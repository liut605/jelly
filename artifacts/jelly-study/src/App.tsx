import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  Hand,
  RotateCcw,
  Rotate3d,
  Cookie,
  SlidersHorizontal,
  X,
  Timer,
  Waves,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import PeachScene from "./scene/PeachScene";
import { StudioHost } from "./scene/studio";
import { specimens, type SpecimenId } from "./scene/specimens";
import { DEFAULT_SOFT_BODY_SETTINGS as defaults } from "./scene/softBodySettings";
import "./index.css";
import "./studyControls.css";

// Ship the tea entry as a lazy chunk so the 3D assets load only on the landing page.
const TeaLanding = lazy(() => import("./scene/tea/TeaLanding"));

const catalog = [
  { id: "lotus-root", label: "Stuffed Lotus Root", chinese: "桂花莲藕" },
  { id: "dried-persimmon", label: "Dried Persimmon", chinese: "柿饼" },
  { id: "peach", label: "Longevity Peach", chinese: "寿桃" },
  { id: "bitter-gourd", label: "Bitter Gourd", chinese: "苦瓜" },
] as const;
const specimenHeadings: Record<
  SpecimenId,
  { lines: string[]; chinese: string }
> = {
  peach: { lines: ["Longevity", "Peach"], chinese: "寿桃" },
  "bitter-gourd": { lines: ["Bitter", "Gourd"], chinese: "苦瓜" },
  "lotus-root": { lines: ["Stuffed", "Lotus Root"], chinese: "糯米莲藕" },
  "dried-persimmon": { lines: ["Dried", "Persimmon"], chinese: "柿饼" },
};
type SimulationStatus = "checking" | "ready" | "still";

function Study({ entering = false }: { entering?: boolean }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [enteringNow, setEnteringNow] = useState(entering);
  useEffect(() => {
    if (!entering) return;
    headingRef.current?.focus({ preventScroll: true });
    const timer = setTimeout(() => setEnteringNow(false), 1300);
    return () => clearTimeout(timer);
  }, [entering]);
  const [specimen, setSpecimen] = useState<SpecimenId>("peach");
  const currentSpecimen = specimens[specimen];
  const [viewReset, setViewReset] = useState(0);
  const [zoom, setZoom] = useState(0);
  const [simulationStatus, setSimulationStatus] =
    useState<SimulationStatus>("checking");
  const [tool, setTool] = useState<"hand" | "rotate" | "munch">("hand");
  const handEnabled = tool === "hand";
  const munchEnabled = tool === "munch";
  const [slowMotion, setSlowMotion] = useState(false);
  const [firmness, setFirmness] = useState(defaults.firmness);
  const [damping, setDamping] = useState(defaults.damping);
  const [shakeToken, setShakeToken] = useState(0);
  const [handStrength, setHandStrength] = useState(defaults.handStrength);
  const [gravityStrength, setGravityStrength] = useState(
    defaults.gravityStrength,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const simulationAvailable = simulationStatus === "ready";

  const zoomIn = useCallback(() => setZoom((value) => value - 1), []);
  const zoomOut = useCallback(() => setZoom((value) => value + 1), []);
  const reset = useCallback(() => {
    setViewReset((value) => value + 1);
    setZoom(0);
    setTool("hand");
    setSlowMotion(false);
    setFirmness(defaults.firmness);
    setDamping(defaults.damping);
    setHandStrength(defaults.handStrength);
    setGravityStrength(defaults.gravityStrength);
  }, []);

  return (
    <main
      className="study-shell playground-shell"
      data-entering={enteringNow}
      aria-label="Jelly Study 3D fruit playground"
    >
      <h1
        className="specimen-heading"
        ref={headingRef}
        tabIndex={-1}
        aria-label={`${specimenHeadings[specimen].lines.join(" ")} · ${specimenHeadings[specimen].chinese}`}
      >
        <span className="specimen-heading-english">
          {specimenHeadings[specimen].lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </span>
        <span className="specimen-heading-chinese" lang="zh-Hans">
          {specimenHeadings[specimen].chinese}
        </span>
      </h1>

      <nav className="selection" aria-label="Specimen selection">
        <div className="fruit-list">
          {catalog.map(({ id, label, chinese }) => {
            const available = Object.hasOwn(specimens, id);
            return (
              <button
                type="button"
                key={id}
                className="fruit-link"
                aria-pressed={id === specimen}
                aria-label={`${label}: ${!available ? "not available yet" : id === specimen ? "current specimen" : "select specimen"}`}
                disabled={!available}
                onClick={() => {
                  if (available && id !== specimen) {
                    setSimulationStatus("checking");
                    setSpecimen(id as SpecimenId);
                  }
                }}
                data-testid={`select-fruit-${id}`}
              >
                <span>{label}</span>
                <span lang="zh-Hans">{chinese}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <PeachScene
        key={`${specimen}-${viewReset}`}
        specimen={specimen}
        resetToken={viewReset}
        zoomStep={zoom}
        handEnabled={handEnabled}
        munchEnabled={munchEnabled}
        rotateEnabled={tool === "rotate"}
        slowMotion={slowMotion}
        firmness={firmness}
        damping={damping}
        handStrength={handStrength}
        gravityStrength={gravityStrength}
        shakeToken={shakeToken}
        onSimulationStatus={setSimulationStatus}
      />

      {simulationStatus === "still" && (
        <div className="preview-notice" role="status">
          Still preview · GPU simulation unavailable
        </div>
      )}

      {specimen === "peach" && (
        <aside
          className="specimen-caption"
          data-testid="text-specimen-description"
        >
          Traditionally enjoyed as a steamed bun at birthdays of elderly
          individuals.
        </aside>
      )}

      {specimen === "bitter-gourd" && (
        <aside
          className="specimen-caption"
          data-testid="text-specimen-description"
        >
          Eating bitter gourds symbolizes enduring and accepting hardship.
        </aside>
      )}

      {specimen === "dried-persimmon" && (
        <aside
          className="specimen-caption"
          data-testid="text-specimen-description"
        >
          As persimmons dry and lose moisture, their natural sugars crystallize
          on the surface, creating a prized white powdery coating
        </aside>
      )}

      {specimen === "lotus-root" && (
        <aside
          className="specimen-caption"
          data-testid="text-specimen-description"
        >
          A traditional sweet appetizer{" "}
          <strong>tracing back to the Tang Dynasty,</strong> usually stuffed
          with sticky rice and sweetened with Osmanthus syrup
        </aside>
      )}

      <aside
        className="physics-panel"
        id="physics-settings"
        data-expanded={settingsOpen}
        aria-label="Soft-body simulation settings"
      >
        <button
          type="button"
          className="settings-close"
          aria-label="Close physics settings"
          onClick={() => setSettingsOpen(false)}
        >
          <X aria-hidden="true" />
        </button>
        <div className="physics-panel-heading">
          <span>Soft body</span>
        </div>
        <label className="physics-range" htmlFor="firmness-control">
          <span>
            Firmness <output htmlFor="firmness-control">{firmness}</output>
          </span>
          <input
            id="firmness-control"
            style={{ "--range-fill": `${firmness}%` } as CSSProperties}
            data-testid="slider-firmness"
            type="range"
            min="0"
            max="100"
            step="1"
            value={firmness}
            disabled={!simulationAvailable}
            onChange={(event) => setFirmness(Number(event.target.value))}
          />
        </label>
        <label className="physics-range" htmlFor="damping-control">
          <span>
            Damping <output htmlFor="damping-control">{damping}</output>
          </span>
          <input
            id="damping-control"
            style={{ "--range-fill": `${damping}%` } as CSSProperties}
            data-testid="slider-damping"
            type="range"
            min="0"
            max="100"
            step="1"
            value={damping}
            disabled={!simulationAvailable}
            onChange={(event) => setDamping(Number(event.target.value))}
          />
        </label>
        <label className="physics-range" htmlFor="hand-strength-control">
          <span>
            Hand strength{" "}
            <output htmlFor="hand-strength-control">{handStrength}</output>
          </span>
          <input
            title="Grab/pinch force: 0 applies no pull, 100 gives the strongest attachment"
            id="hand-strength-control"
            style={{ "--range-fill": `${handStrength}%` } as CSSProperties}
            data-testid="slider-hand-strength"
            type="range"
            min="0"
            max="100"
            step="1"
            value={handStrength}
            disabled={!simulationAvailable}
            onChange={(event) => setHandStrength(Number(event.target.value))}
          />
        </label>
        <label className="physics-range" htmlFor="gravity-control">
          <span>
            Gravity{" "}
            <output htmlFor="gravity-control">
              {(gravityStrength / 100).toFixed(2)}×
            </output>
          </span>
          <input
            id="gravity-control"
            style={
              { "--range-fill": `${gravityStrength / 2}%` } as CSSProperties
            }
            data-testid="slider-gravity"
            type="range"
            min="0"
            max="200"
            step="5"
            value={gravityStrength}
            disabled={!simulationAvailable}
            title="Gravity toward the floor beneath the slice: 0× is weightless, 1× uses 9.81 units/s²"
            onChange={(event) => setGravityStrength(Number(event.target.value))}
          />
        </label>
      </aside>

      <nav className="toolbar" aria-label="Study tools">
        <button
          type="button"
          className="tool-button"
          title="Reset"
          data-testid="button-reset-view"
          aria-label="Reset specimen, simulation, and view"
          onClick={reset}
        >
          <RotateCcw aria-hidden="true" />
          <span>Reset</span>
        </button>
        <span className="tool-divider" aria-hidden="true" />
        <div className="tool-zoom" role="group" aria-label="Zoom">
          <button
            type="button"
            className="tool-button"
            title="Zoom out"
            data-testid="button-zoom-out"
            aria-label="Zoom out"
            onClick={zoomOut}
          >
            <ZoomOut aria-hidden="true" />
          </button>
          <span className="zoom-label" aria-hidden="true">
            Zoom
          </span>
          <button
            type="button"
            className="tool-button"
            title="Zoom in"
            data-testid="button-zoom-in"
            aria-label="Zoom in"
            onClick={zoomIn}
          >
            <ZoomIn aria-hidden="true" />
          </button>
        </div>
        <button
          type="button"
          className="tool-button"
          title="Rotate — drag to orbit; two fingers rotate and pinch to zoom"
          data-testid="button-rotate-mode"
          data-active={tool === "rotate"}
          aria-label={tool === "rotate" ? "Rotate mode on" : "Rotate mode off"}
          aria-pressed={tool === "rotate"}
          disabled={!simulationAvailable}
          onClick={() => setTool("rotate")}
        >
          <Rotate3d aria-hidden="true" />
          <span>Rotate</span>
        </button>
        <span className="tool-divider" aria-hidden="true" />
        <button
          type="button"
          className="tool-button"
          title="Hand"
          data-testid="button-hand-mode"
          data-active={handEnabled}
          aria-label={
            handEnabled
              ? "Hand mode on: drag the fruit to deform it"
              : "Hand mode off: select to drag or poke the jelly"
          }
          aria-pressed={handEnabled}
          disabled={!simulationAvailable}
          onClick={() => setTool("hand")}
        >
          <Hand aria-hidden="true" />
          <span>Hand</span>
        </button>
        <button
          type="button"
          className="tool-button"
          title="Munch"
          data-testid="button-munch"
          aria-label={munchEnabled ? "Munch mode on" : "Munch mode off"}
          aria-pressed={munchEnabled}
          data-active={munchEnabled}
          disabled={!simulationAvailable}
          onClick={() => setTool("munch")}
        >
          <Cookie aria-hidden="true" />
          <span>Munch</span>
        </button>
        <button
          type="button"
          className="tool-button"
          title="Wiggle"
          data-testid="button-shake"
          aria-label="Wiggle specimen"
          disabled={!simulationAvailable}
          onClick={() => setShakeToken((value) => value + 1)}
        >
          <Waves aria-hidden="true" />
          <span>Wiggle</span>
        </button>
        <button
          type="button"
          className="tool-button"
          title="Slow motion"
          data-testid="button-slow-motion"
          data-active={slowMotion}
          aria-label={slowMotion ? "Slow motion on" : "Slow motion off"}
          aria-pressed={slowMotion}
          disabled={!simulationAvailable}
          onClick={() => setSlowMotion((value) => !value)}
        >
          <Timer aria-hidden="true" />
          <span>Slow</span>
        </button>
        <button
          type="button"
          className="tool-button settings-toggle"
          title="Physics settings"
          data-testid="button-physics-settings"
          aria-label="Physics settings"
          aria-expanded={settingsOpen}
          aria-controls="physics-settings"
          data-active={settingsOpen}
          onClick={() => setSettingsOpen((value) => !value)}
        >
          <SlidersHorizontal aria-hidden="true" />
          <span>Settings</span>
        </button>
      </nav>
      <span
        className="sr-only"
        aria-live="polite"
        data-testid="status-active-fruit"
      >
        {currentSpecimen.title} is the current specimen. Choose Longevity Peach,
        Bitter Gourd, Stuffed Lotus Root, or Dried Persimmon to switch
        specimens.
      </span>
      <span
        className="sr-only"
        aria-live="polite"
        data-testid="text-stage-status"
      >
        {simulationAvailable
          ? "Hand drags or pokes the jelly. Rotate orbits the view. Use two fingers to rotate and pinch to zoom, or use the zoom buttons."
          : simulationStatus === "still"
            ? "Still preview. GPU simulation is unavailable and simulation-only controls are disabled."
            : "Checking GPU support for soft-body simulation."}
      </span>
    </main>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const enterPlayground = useCallback(() => setEntered(true), []);
  const query = new URLSearchParams(location.search);
  const showLanding =
    !entered &&
    (query.get("draft") === "tea" ||
      (!import.meta.env.DEV && !query.has("playground")));
  return (
    <StudioHost>
      {showLanding ? (
        <Suspense
          fallback={
            <div className="studio-loading">Preparing the tea table…</div>
          }
        >
          <TeaLanding onEnter={enterPlayground} />
        </Suspense>
      ) : (
        <Study entering={entered} />
      )}
    </StudioHost>
  );
}
