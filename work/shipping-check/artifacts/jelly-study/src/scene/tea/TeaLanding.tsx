import { useEffect, useRef, useState } from "react";
import TeaScene from "./TeaScene";
import TeaBackdrop from "./TeaBackdrop";
import "./teaLanding.css";

/** Public tea entry; /?draft=tea also previews it during development. */
export default function TeaLanding({ onEnter }: { onEnter: () => void }) {
  const [reducedMotion, setReducedMotion] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [leaving, setLeaving] = useState(false);
  const started = useRef(false);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!leaving) return;
    const timer = setTimeout(onEnter, reducedMotion ? 200 : 1250);
    return () => clearTimeout(timer);
  }, [leaving, reducedMotion, onEnter]);

  return (
    <main
      className="tea-landing-draft"
      aria-label="Chinese Jelly tea landing"
      data-leaving={leaving}
      data-reduced-motion={reducedMotion}
      aria-busy={leaving}
    >
      <TeaBackdrop reducedMotion={reducedMotion} leaving={leaving} />
      <div className="tea-title">
        <h1 aria-label="Chinese Jelly · 中式果冻">
          <span className="tea-title-english">
            <span>Chinese</span>
            <span>Jelly</span>
          </span>
          <span className="tea-title-chinese" lang="zh-Hans">
            中式果冻
          </span>
        </h1>
        <button
          className="tea-enter"
          type="button"
          aria-label="Enter playground"
          disabled={leaving}
          data-testid="tea-enter"
          onClick={() => {
            if (!started.current) {
              started.current = true;
              setLeaving(true);
            }
          }}
        >
          Enter
        </button>
      </div>
      <TeaScene />
    </main>
  );
}
