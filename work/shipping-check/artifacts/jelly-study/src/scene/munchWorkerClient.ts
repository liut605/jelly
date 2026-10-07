import type * as THREE from "three";
import type { BiteGuide } from "./biteVolume.ts";
import { MunchRejected } from "./biteVolume.ts";
import type { MunchResult } from "./munchGeometry";
import type { SoftBodySnapshot } from "./softBodyGpu";
import type { SpecimenId } from "./specimens";
import {
  packRequest,
  transferBuffers,
  unpackResult,
  type CutResponse,
} from "./munchTransfer.ts";

/** One lazily loaded worker per scene, shared by mouse and touch bites. */
export class MunchWorkerClient {
  private worker: Worker | null = null;
  private disposed = false;
  private warmupAttempted = false;
  private readonly createWorker: () => Worker;
  private sequence = 0;
  private pending: {
    id: number;
    resolve: (result: MunchResult) => void;
    reject: (error: Error) => void;
  } | null = null;
  constructor(
    createWorker = () =>
      new Worker(new URL("./munch.worker.ts", import.meta.url), {
        type: "module",
      }),
  ) {
    this.createWorker = createWorker;
  }

  warmup(): void {
    if (this.worker || this.disposed || this.warmupAttempted) return;
    this.warmupAttempted = true;
    // Failure is reported on the attempted bite, never as an unhandled hover error.
    try {
      this.ensureWorker();
    } catch {
      /* Retry and report on click/tap. */
    }
  }
  private ensureWorker(): Worker {
    if (this.disposed) throw new DOMException("Munch cancelled.", "AbortError");
    if (this.worker) return this.worker;
    const worker = this.createWorker();
    this.worker = worker;
    worker.onmessage = ({ data }: MessageEvent<CutResponse>) => {
      const pending = this.pending;
      if (!pending || data.id !== pending.id || this.worker !== worker) return;
      this.pending = null;
      if ("error" in data) pending.reject(new MunchRejected(data.error));
      else {
        try {
          pending.resolve(unpackResult(data.result));
        } catch {
          pending.reject(
            new Error("Munch could not restore this cut. Try again or Reset."),
          );
        }
      }
    };
    const failed = () => {
      if (this.worker !== worker) return;
      worker.terminate();
      this.worker = null;
      this.pending?.reject(
        new Error("Munch could not load or finish. Try again or Reset."),
      );
      this.pending = null;
    };
    worker.onerror = failed;
    worker.onmessageerror = failed;
    return worker;
  }
  async cut(
    geometry: THREE.BufferGeometry,
    state: SoftBodySnapshot,
    guide: BiteGuide,
    specimen: SpecimenId,
    consumeWhole = false,
  ): Promise<MunchResult> {
    if (this.pending)
      throw new Error("Please wait for the current bite to finish.");
    const worker = this.ensureWorker();
    const request = packRequest(
      ++this.sequence,
      geometry,
      state,
      guide,
      specimen,
      consumeWhole,
    );
    return new Promise((resolve, reject) => {
      this.pending = { id: request.id, resolve, reject };
      try {
        worker.postMessage(request, transferBuffers(request));
      } catch (error) {
        this.pending = null;
        reject(error);
      }
    });
  }
  dispose(): void {
    this.disposed = true;
    this.worker?.terminate();
    this.worker = null;
    this.pending?.reject(new DOMException("Munch cancelled.", "AbortError"));
    this.pending = null;
  }
}
