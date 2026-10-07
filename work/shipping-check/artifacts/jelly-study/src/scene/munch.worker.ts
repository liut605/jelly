import { initializeMunch, munchGeometry } from "./munchGeometry";
import {
  packResult,
  transferBuffers,
  unpackRequest,
  type CutRequest,
  type CutResponse,
} from "./munchTransfer";
import wasmUrl from "manifold-3d/manifold.wasm?url";

const ready = initializeMunch(() => wasmUrl);
// Keep a load failure handled until the first request can display it.
void ready.catch(() => undefined);
const scope = self as unknown as {
  onmessage: ((event: MessageEvent<CutRequest>) => void) | null;
  postMessage(message: CutResponse, transfer?: ArrayBuffer[]): void;
};
scope.onmessage = async ({ data }) => {
  let input: ReturnType<typeof unpackRequest> | undefined;
  try {
    await ready;
    input = unpackRequest(data);
    const result = await munchGeometry(
      input.geometry,
      input.state,
      input.guide,
      data.specimen,
      data.consumeWhole,
    );
    try {
      const packed = packResult(result);
      scope.postMessage(
        { id: data.id, result: packed },
        transferBuffers(packed),
      );
    } finally {
      if (result.kind === "cut")
        result.pieces.forEach((p) => p.geometry.dispose());
    }
  } catch (error) {
    scope.postMessage({
      id: data.id,
      error:
        error instanceof Error
          ? error.message
          : "Munch could not finish. Try again or Reset.",
    });
  } finally {
    input?.geometry.dispose();
  }
};
