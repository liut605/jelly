import { useEffect, useRef, useState } from "react";
import { BRANCH_PATHS, paintBlossomCutout } from "./teaBranches";
import fullUrl from "../../../../../attached_assets/tea-blossoms-hover.mp4?url";
import posterUrl from "../../../../../attached_assets/tea-blossoms-hover-poster.jpg?url";

import cleanBackgroundUrl from "../../../../../attached_assets/tea-blossoms-clean-background.jpg?url";

type Playback = "still" | "starting" | "playing";
const ease = (value: number) => {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
};

export default function TeaBackdrop({
  reducedMotion,
  leaving,
}: {
  reducedMotion: boolean;
  leaving: boolean;
}) {
  const full = useRef<HTMLVideoElement>(null);
  const poster = useRef<HTMLImageElement>(null);
  const cleanBackground = useRef<HTMLImageElement>(null);
  const cutout = useRef<HTMLCanvasElement>(null);
  const phase = useRef<Playback>("still");
  const videoOpacity = useRef(0);
  const [playback, setPlayback] = useState<Playback>("still");
  const [failed, setFailed] = useState(false);
  const [cutoutReady, setCutoutReady] = useState(false);
  const alive = useRef(true);
  const change = (next: Playback) => {
    phase.current = next;
    if (alive.current) setPlayback(next);
  };
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  useEffect(() => {
    if (leaving) return;
    // A still first frame is the only idle state. Preloading never starts motion.
    full.current?.pause();
    if (full.current) full.current.currentTime = 0;
    change("still");
  }, [reducedMotion, failed, leaving]);

  useEffect(() => {
    const video = full.current;
    if (!video || leaving) return;
    let frame = 0;
    const blend = () => {
      // Reveal the moving frame gently, then dissolve into the first-frame
      // poster during the final 0.85s. Rewinding happens only once it is hidden.
      const remaining = Number.isFinite(video.duration)
        ? video.duration - video.currentTime
        : Infinity;
      videoOpacity.current =
        playback === "playing"
          ? Math.min(ease(video.currentTime / 0.25), ease(remaining / 0.85))
          : 0;
      video.style.opacity = String(videoOpacity.current);
      if (playback === "playing") frame = requestAnimationFrame(blend);
    };
    blend();
    return () => cancelAnimationFrame(frame);
  }, [playback, leaving]);

  const activate = () => {
    if (
      leaving ||
      failed ||
      phase.current === "playing" ||
      phase.current === "starting"
    )
      return;
    const video = full.current;
    if (!video) return;
    video.currentTime = 0;
    change("starting");
    video.play().catch(() => change("still"));
  };
  const onFullPlaying = () => {
    if (leaving || phase.current !== "starting") return;
    change("playing");
  };
  const returnToStill = () => {
    if (leaving) return;
    full.current?.pause();
    videoOpacity.current = 0;
    if (full.current) full.current.style.opacity = "0";
    change("still");
    if (full.current) full.current.currentTime = 0;
  };

  useEffect(() => {
    if (!leaving) return;
    const active = phase.current === "playing" ? full.current : null;
    let source: CanvasImageSource | null = poster.current;
    if (active && active.readyState >= 2) {
      // Preserve the visible blend if Enter is pressed during the crossfade.
      const frame = document.createElement("canvas");
      frame.width = active.videoWidth;
      frame.height = active.videoHeight;
      const context = frame.getContext("2d");
      if (context) {
        if (poster.current?.complete && poster.current.naturalWidth)
          context.drawImage(poster.current, 0, 0, frame.width, frame.height);
        context.globalAlpha = videoOpacity.current;
        context.drawImage(active, 0, 0, frame.width, frame.height);
        source = frame;
      }
    }
    if (!reducedMotion && source && cutout.current) {
      setCutoutReady(
        paintBlossomCutout(source, cutout.current, cleanBackground.current),
      );
    }
    full.current?.pause();
  }, [leaving, reducedMotion]);

  return (
    <>
      <div className="tea-clean-background" aria-hidden="true">
        <img
          ref={cleanBackground}
          className="tea-backdrop-frame"
          src={cleanBackgroundUrl}
          alt=""
        />
      </div>
      <div
        className="tea-backdrop"
        data-testid="tea-backdrop"
        data-state={playback}
        aria-hidden="true"
      >
        <div className="tea-backdrop-frame">
          <img ref={poster} src={posterUrl} alt="" />
          <video
            ref={full}
            src={fullUrl}
            muted
            playsInline
            preload="auto"
            className="tea-full-video"
            data-testid="tea-full-video"
            data-visible={!failed && playback === "playing"}
            onPlaying={onFullPlaying}
            onEnded={returnToStill}
            onError={() => setFailed(true)}
          />
        </div>
      </div>
      <div className="tea-branch-interaction" aria-hidden={leaving || failed}>
        <svg
          className="tea-backdrop-frame tea-branch-guide"
          viewBox="0 0 1920 1064"
        >
          <g
            role="button"
            tabIndex={leaving || failed ? -1 : 0}
            aria-label="Animate the blossoms"
            data-testid="tea-branches"
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch" && !reducedMotion) activate();
            }}
            onClick={activate}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activate();
              }
            }}
          >
            {BRANCH_PATHS.map((path) => (
              <path key={path} d={path} />
            ))}
          </g>
        </svg>
      </div>
      <div
        className="tea-blossom-cutout"
        aria-hidden="true"
        data-ready={cutoutReady}
      >
        <canvas ref={cutout} className="tea-backdrop-frame" />
      </div>
    </>
  );
}
