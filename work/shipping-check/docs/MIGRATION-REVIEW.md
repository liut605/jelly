# Jelly Study local review — 2026-10-05

## Migration

The clean Replit baseline was commit `a7c3c5e` (15 commits retained). The original `../replit` export is untouched. This local copy retains source, attached reference assets, optional workspace packages, and all Git history. Attached staged prompts were treated as historical reference material; the user's subsequent requests determined the implementation.

Replit runtime plugins, overlays, platform-only dependency restrictions, and automatic database hooks are removed from the active workflow. Historical Replit configuration is under `docs/replit-export/`. The old `gitsafe-backup` remote was removed only from the local copy. Nothing was pushed, published, or deployed.

The Mac launcher installs SHA-256-verified Node 24.21.0 and pnpm 10.18.3 inside `.local/`, avoiding the older global Node version. Locked dependencies, fonts, licenses, editor tasks, strict local ports, and polling hot reload are configured. The playground needs no database, API key, account, or cloud service. Optional API/database/mockup packages remain available, without automatic database changes.

## Current implementation

The user changed the specimen from the original whole peach to a thick slice with an empty pit cavity. The default orientation is flat, with the exposed flesh upward and the pink tip at the upper right in the supplied reference view. The pit socket is now a shallow longitudinal teardrop (0.16 units deep, previously 0.46). A circular rim fillet and welded seam/pole normals remove the hard cut-surface edge. There is no visible or hidden pit mesh. Two color gradients run from the pink tip to pale bottom flesh, and from the saturated cavity toward the pale perimeter. Fine color-only fibers and flecks follow the material as it deforms. No bump displacement is used for these details. The material now has a frosted translucent finish: roughness 0.42, transmission 0.62, low clearcoat, and mild peach-tinted absorption retain the fibers while softening sharp wet highlights.

The catalog now switches between Peach and Bitter gourd; Cherry and Plum are removed. Bitter gourd uses a separate thick volumetric mapping with raised, rounded ridges and smaller tubercles, a dark green rind, lighter green flesh, pale desaturated green-yellow pith, and three orange-red seeds around a pale center. The revised exterior uses broad rounded longitudinal ribs and staggered raised tubercles along a thicker, straighter side wall, based on the latest reference images. A smooth volumetric core carries the finer surface relief. Fine pores, cells, fibers, and three inner tissue chambers follow the deforming material. Both specimens share the same GPU volume solver and smooth surface construction.

The original interface identity, fonts, backdrop, lighting, and desktop front/three-quarter camera pose remain. Camera distance and target are independent of physics. The canvas now extends across the entire viewport, including the headline. The viewport constraint preserves the right-side desktop composition while allowing movement throughout the screen. When the current volume reaches an edge, a common GPU translation brings it inside the visible bounds without changing edge lengths, volume, or the camera. This avoids the excessive strain caused by independently clamping small boundary cells. Portrait phones have a larger centered specimen. The canvas and document fit the dynamic viewport with no overflow. Only bottom-toolbar buttons zoom; wheel and two-finger camera zoom are disabled. The first finger retains its grab when a second finger touches or lifts. Mobile controls use a scrollable Settings drawer, large touch targets, and safe-area padding. Pointer cancellation, blur, and backgrounding end grabs.

The inherited unstable spring simulation was replaced with a WebGL2 volumetric solver: 869 material nodes, 4,032 tetrahedra, fixed 120 Hz stepping, distance and volume constraints, corotational elasticity, floor contact, and a conservative inversion filter. The detailed visible skins have 16,385 vertices for peach and 32,657 for bitter gourd; smooth material-space interpolation and derivative normals prevent triangle tearing. A stretch barrier protects thin boundary cells under opposing hand/contact forces.

To address the floating appearance and motion, both slices have a broad, level underside with rounded shoulders. The elastic recovery frame receives the gravitational moment about its support region, so an edge-balanced slice can tip onto the floor. Local contact friction and bulk Coulomb friction stop residual sliding. A GPU-deformed cast shadow and soft contact shadow show the relationship to the ground. The default camera is unchanged.

Triangle/barycentric picking measures the material point actually clicked. Hand force uses a compact 0.36-unit neighborhood through the volume, while the attachment measurement retains the exact surface interpolation. This prevents signed interpolation weights from applying opposing forces to tiny rim cells. Firmness, damping, Hand strength, and Gravity control independent quantities. Gravity ranges from 0× to 2×; 1× is 9.81 world units/s² toward the floor beneath the flat slice. The [reference study](https://marinabudarina.github.io/jelly-study/) uses this acceleration and a floor-friction coefficient of 0.55. The local solver now uses these settings and the reference air-drag rates (0.08 released, 1.4 while held). The old added rebound impulse and local restitution kick were removed; stored elastic strain provides rebound. Orbit never changes gravity direction. Six fixed substeps per rendered frame maintain gravity timing down to 20 fps. The current startup and explicit Reset defaults are Firmness 45, Damping 0, Hand strength 100, and Gravity 1.70×, defined together in `softBodySettings.ts`. Switching specimens preserves all current slider values, Hand mode, Pause, and Slow motion. Hand strength zero applies no pulling force. A rate-limited target gives delayed elastic response instead of an instantaneous hard pin. Shake applies a 0.36-second burst of opposed squeeze/shear forces, with net translation and rigid spin removed from each material-space mode. The force follows the current body orientation, has no uniform upward kick, and lets the volumetric solver handle spring-back and decay. Extra presses during a burst do not stack forces. Pause and Slow also govern the burst clock; Reset cancels it. Pause freezes positions, Slow runs at 24%, and Reset restores all physical and view defaults.

When float GPU simulation is unavailable, controls are disabled and the preview is labeled. Render-capable devices keep the same 3D material; devices without WebGL use a software still of the same slice. Development query switches `?preview=still` and `?preview=canvas` exercise these paths.

## Verification

Eight CPU checks cover positive closed volume, connected topology, material binding, the shallow cavity, smooth rim tangents, level support, bitter gourd thickness/tubercles, and camera/viewport framing. Both specimens use the actual GPU regression at `/tests/gpu-stability.html` (append `?specimen=bitter-gourd` for gourd). The test measures floor contact and rebound at every physics step to avoid missing short, firm rebounds between low-frequency samples. Focused runs are available with `phase=walls` and `phase=shake` (combine with `specimen=bitter-gourd` for gourd).

Browser checks covered switching specimens, four working sliders and their Reset values, menu-only zoom, dragging over the headline to orbit, exact viewport-sized canvas bounds, and 390×844, 320×568, and 844×390 layouts. The still-preview paths were tested for both 3D rendering and software rendering, including gourd selection and disabled simulation controls. No app console errors were observed.

The full-workspace typecheck and production build passed (app JavaScript about 201 kB gzip; Vite retains a non-blocking bundle-size notice). All eight CPU tests passed, including positive coarse material cells and actual raised surface relief on the revised bitter gourd.

Before the Shake adjustment, the complete regression passed for both specimens, with the repeated-grab and boundary phases using **Firmness 45, Damping 0, Hand strength 100, and Gravity 1.70×**. It covers 12 ordinary grab/release cycles and eight maximum-strength boundary cycles per specimen (40 total), floor contact, elastic rebound, settling, Pause, Reset, Slow motion, and all four sliders.

| Measurement | Peach | Bitter gourd |
| --- | ---: | ---: |
| Maximum sampled volume error | 1.13% | 1.64% |
| Minimum signed element ratio (positive) | 0.1500 | 0.1500 |
| Peak edge-length ratio | 1.529 | 1.384 |
| Final maximum node speed | 0.00003 | 0.00002 |
| Hand strength 0 / 60 / 100 calibration displacement | 0 / 0.2888 / 0.5375 | 0 / 0.3050 / 0.5208 |
| Firmness 0 / 100 peak edge strain | 0.2778 / 0.1794 | 0.2165 / 0.1069 |
| Damping 0 / 100 sampled vibration energy | 0.4562 / 0.04920 | 1.593 / 0.1625 |

The calibration checks run separately from the new-default stress phases: both specimens fell 0.0530 units over 0.1 seconds at 1× gravity at 20, 30, 60, and 120 rendered frames per second. Gravity 0× / 1× / 2× produced initial falls of 0 / 0.0374 / 0.0747 units. Measured 1× rebound speeds were 0.498 and 0.453 units/second. Boundary-check visible vertices stayed inside the viewport (maximum projected extent 0.941), with unchanged camera position.

The browser round-trip test set custom values of 31 / 18 / 72 / 1.25×, enabled Pause and Slow, and switched Bitter gourd → Peach → Bitter gourd. All values and both playback modes persisted. Explicit Reset restored 45 / 0 / 100 / 1.70× and normal playback. Startup defaults, the 390×844 layout, the higher-detail GPU mesh, and the software fallback were also verified; no console errors were observed.

The focused Shake regression passed for both specimens after reducing the force from 220 to 100 (about 55% gentler). At the requested defaults, peak internal surface motion was 0.0222 / 0.0213 units, while center travel stayed at 0.0003 / 0.0003 and upward lift at 0.0002 / 0.0004 (peach / gourd). Both showed four measured squeeze-direction reversals and settled naturally. The suite also passed 24 rapid presses per specimen, Pause/resume mid-burst, zero-gravity balance, Reset cancellation, and identical positions at equivalent fixed-step times in Slow motion. Maximum sampled volume errors were 0.29% / 0.39%, with all tetrahedra positive (minimum ratios 0.9481 / 0.9395). The workspace production build, typecheck, and eight CPU tests passed again. The actual toolbar was checked on both specimens with no browser console errors.

These checks cover the stated sequence and this Mac's Chrome GPU. They do not establish unlimited-duration stability or performance on every phone. Physical iOS/Android devices, Safari, and two-finger input on actual hardware have not been tested.

## Remaining scope

Cutting and Export remain unavailable. A tetrahedral volume and surface bindings are in place, but cutting still requires remeshing, exposed interior surfaces, separated-body handling, and self-collision. There are no separate seed/core assets in the original export. The old unused spring topology and stage-one placeholder files remain as inherited source; current code uses `volumeTopology.ts`.

## Earlier document-camera landing experience (now inactive)

The supplied GLB and corrected tall layout are now implemented. The model retains its original yellow and gray, the existing study lighting and cast shadows, and nearly full-height desktop framing. The exact black circular lens on the angled neck is both the projected accessible click target and the shared destination of Lens glide, Overhead, and Arc in. Each path reveals Peach. The playground header returns to the landing page; physical settings persist across navigation.

`StudioHost` owns one persistent renderer. Landing and playground manage their own scene resources and hand the same canvas between them. The landing scene renders on demand when idle. Camera motion is isolated in pure pose functions and does not alter jelly coordinates. Reduced motion uses a brief fade; keyboard entry, a skip control, retry, and a no-WebGL entry path are available. An empty future-slice group and a reserved region near the title leave room for later additions.

The original 66.3 MB GLB is retained. The 44.7 MB web asset is losslessly mesh-compressed, with all 48 decoded geometry buffers byte-compared against the source and original texture bytes retained. No triangle simplification, recoloring, normal replacement, or material replacement remains. The source has 12 generic meshes, not an authored mechanical rig, so future articulation requires deliberate segmentation or rigging. The reproducible asset script and report are `scripts/prepare-document-camera.mjs` and `docs/document-camera-asset.json`.

All three transitions were exercised in Chrome and entered the GPU Peach playground. A navigation round trip preserved Firmness 37 and Pause while changing from Bitter gourd back to the default Peach. Grab, Shake, and Reset were exercised after entry. Portrait landing layouts at 390×844 and 320×568 fit the whole model and caption; the narrow layout had one canvas and document bounds equal to the viewport. The no-renderer landing provided an accessible Enter the study button and reached a labeled software still preview with simulation-only controls disabled. No app console errors were observed in the tested active scene. Actual phones and Safari remain untested.

All 10 CPU checks now pass, including continuous finite camera poses, lens convergence, and the horizontal overhead view. The full-workspace typecheck and production build pass (app JavaScript about 238 kB gzip, plus the separately loaded 44.7 MB model; Vite retains its non-blocking chunk-size notice). The existing detailed physics regressions above were not rerun in full for the landing-only changes. `docs/LANDING-ARCHITECTURE.html` records the implemented architecture.

## Current specimen page and Persimmon

The newer PNG supersedes the landing experience. The root page now opens straight into Peach, with a large dynamic English name and Chinese title, a vertical right-hand catalog, only the supplied peach caption, unchanged bottom tools, and soft-body controls at bottom right. The header, field notes, Latin names, old descriptive notes, and gesture hints are no longer visible. Phone settings open above the toolbar on the right. Lotus Root is a disabled placeholder; the available specimens are Peach, Bitter gourd, and Persimmon.

Persimmon adds a circular supported 0.6-unit-thick volume, smoothly rounded shoulders, thin orange peel, lighter golden flesh, and an off-white heart. Its eight-point tissue star has higher transmission and lower roughness than the surrounding flesh. Fine procedural grain, sparse dark spots, delicate fibers, and faint rings remain in material coordinates. The visible surface has 29,041 vertices bound to the shared 869-node, 4,032-tetrahedron solver. The main colors and star also appear in the software still preview. Bitter gourd retains the recent three orange-red seeds and pale center.

The 44.7 MB compressed camera asset was moved into attached_assets, alongside the untouched original; the new main page loads neither. Earlier landing source is preserved for reuse but is not imported by the app.

The twelve CPU checks and full workspace typecheck/build pass. The updated app JavaScript is about 203 kB gzip. Desktop, 390×844 and 320×568 phone layouts were checked, including a bottom-right mobile settings drawer, no viewport overflow, and preserving Firmness 37 across Bitter gourd and Persimmon. The unsupported-renderer route displays a labeled Persimmon still preview and disables simulation-only controls. Physical phones and Safari remain untested.

Persimmon's full GPU regression passed: 12 ordinary grab/release cycles plus eight maximum-strength wall pulls, all at the configured stress defaults. Maximum sampled volume error was 1.89%, minimum signed element ratio stayed positive at 0.1500, and peak edge ratio was 1.493. Final maximum speed was 0.00001. Floor rebound reached 0.450 units/second. Hand-strength displacements at 0/60/100 were 0/0.2955/0.5200; firmness 0/100 produced strains 0.1834/0.1051; damping 0/100 produced vibration energy 1.420/0.1450. Pause, Shake, Slow motion, Reset, and viewport confinement all passed. The largest sampled wall extent was 0.938, inside the screen. The 844×390 landscape layout also passed visual inspection.

## Dried Persimmon / 柿饼

Added a separate whole dried persimmon alongside the fresh slice. The shape is a thick flattened disc with a broad supported underside and shallow top indentation. Warm orange shows through a fine patchy white coating, subtle wrinkles, and a four-leaf dark brown calyx. The 41,905-vertex surface integrates leaf relief and the stem into the deforming mesh. Frost grain, leaf veins, roughness, and transmission remain attached to material coordinates; the same volumetric solver and shared settings apply.

A specimen-level interior color sampler defines vibrant orange flesh and dark speckles for a later cutter. There are no cut faces yet, and Cutting/Export remain disabled. This addition does not change the existing specimens, camera, controls, or startup selection.

All fourteen CPU tests passed, including positive dried-fruit volume mapping, broad flat support, shallow dimple, four top-only calyx leaves, and the orange/speckled interior sampler. Full workspace typecheck/build and the final app production build passed (about 204 kB gzip JavaScript; existing non-blocking chunk-size notice remains). Desktop and 390×844 / 320×568 layouts were checked. At 320×568, document scroll bounds equal the viewport. Firmness 37 survived Dried Persimmon → Persimmon → Dried Persimmon. The software fallback renders the whole fruit and leaves, labels the still preview, and disables simulation-only controls. No errors were logged in the final fresh mobile browser session. Physical phones and Safari remain untested.

The complete actual-GPU regression at `/tests/gpu-stability.html?specimen=dried-persimmon` passed all 12 ordinary grab/release cycles and eight maximum-strength wall pulls. Maximum sampled volume error was 1.06%, minimum signed element ratio 0.2789, peak edge ratio 1.463, and final maximum node speed 0.00004. Hand strength 0/60/100 produced displacement 0/0.3063/0.5284; firmness 0/100 produced strain 0.1960/0.1132; damping 0/100 produced vibration energy 2.046/0.2075. Rebound reached 0.543 units/second. Gravity timing was consistent at 20/30/60/120 fps. Shake, Pause, Slow, Reset, conservative visible-surface bounds, and viewport confinement passed; maximum sampled wall extent was 0.937.

## Horizontal dried-persimmon slice revision

The latest request replaces the whole dried specimen with a thick horizontal slice. The top is planar orange flesh with a darker heart, eight translucent star rays, fine dark speckles, pale fibers, and faint rings. Both geometry and material remove the leaves and stem. White powder and tiny dried folds remain on the rounded exterior and underside only. The exposed face rolls into the rind without a sharp lip; the broad underside and positive tetrahedral volume remain intact. The star uses transmission 0.94 and lower roughness than the surrounding flesh (transmission 0.60), with all optical detail in material coordinates.

This is the specimen's initial geometry, not an interactive cutting feature. The Cut control remains disabled. The fourteen CPU tests and complete workspace typecheck/production build pass. Desktop and 320×568 phone previews show the slice, and the software fallback shows its exposed flesh/star with simulation controls disabled. No browser shader errors were observed. The revised slice passed the full GPU regression: all 12 ordinary grabs and eight maximum-strength wall pulls, plus settling, Reset, and all controls. Maximum sampled volume error was 1.11%, minimum signed element ratio 0.1500, peak edge ratio 1.561, and maximum screen extent 0.945. Final maximum speed was 0.00003. The earlier 1.06% result above belongs to the whole-fruit version. The revised slice retained positive volume cells throughout the measured sequence.


## Stuffed lotus root and final catalog revision

Added Stuffed Lotus Root / 糯米莲藕 with a 0.68-unit-thick supported volume, muted salmon-pink flesh, eight varied rice-filled outer chambers and a small central chamber, fourteen empty smaller channels, and five embedded yellow four-petal osmanthus flowers. The rice reads as soft glutinous paste with a few intact grains. The 51,681-vertex surface has actual cap openings and recessed walls for the smaller channels; it provides local surface derivatives to preserve wall shading during deformation. The software preview now follows explicit mesh indices so it retains the openings. These fine pores remain detail bound to the existing coarse solid simulation volume, rather than individually resolved physical tunnels.

Added the user-provided bitter-gourd hardship caption and lotus-root Tang Dynasty/osmanthus-syrup caption, including the requested emphasis. Removed fresh Persimmon from the selector, active registry, heading map, and accessible selection text; Dried Persimmon / 柿饼 remains. The four available specimens are Peach, Bitter Gourd, Stuffed Lotus Root, and Dried Persimmon. Historical sections above describe earlier iterations.

Seventeen CPU tests and the workspace typecheck/production build pass. The complete lotus-root GPU regression passed all 12 ordinary grabs and eight maximum-strength wall pulls, all controls, floor rebound, and settling. Maximum sampled volume error was 1.65%, minimum signed element ratio 0.1500, peak edge ratio 1.383, maximum screen extent 0.939, and final speed 0.00001. No measured volume cells inverted. Hand strength 0/60/100 produced displacement 0/0.3077/0.5335; gravity fall distance matched at 20/30/60/120 fps.

Desktop and 390×844 views show the updated captions and model. The mobile document bounds exactly matched the viewport. Firmness 44 survived Lotus Root → Bitter Gourd → Lotus Root, then was restored to 45. Software fallback retained the hollow channels and disabled simulation-only controls. No console errors were observed. Physical phone hardware and Safari remain untested.

## Lotus tunnels and Munch (current)

Replaced the stair-stepped cap/funnel approximation with a closed, 98,918-vertex perforated surface. Both caps share rounded tunnel rims and continuous walls. Actual tetrahedral surface attachment now carries each wall at its own depth; regression tests verify rigid tilt and affine deformation without hanging strips. Nine osmanthus blossoms are embedded in the surface. Original cap shading is preserved through Boolean cuts rather than recomputed from skinny cap triangles.

Munch replaces Cut. Click/tap commits a bite; hover shows a dashed scalloped arch. Manifold WebAssembly subtracts a closed bite volume, and conforming tetrahedral clipping separately removes physical mass and constraints. Each remaining connected volume receives rebuilt adjacency, a new GPU solver, material-space surface attachments, and current picking geometry. Newly exposed faces receive the specimen's interior appearance, including dried-persimmon speckles. Misses do nothing; grazing, thin, excessive-complexity, or surface/volume-inconsistent cuts return a visible rejection before the live bodies are replaced. A fully covered piece is consumed; consuming the last one drops a fresh current specimen. Reset remounts the original whole geometry and Hand mode. The `munchEvents` event provides a future audio hook; sound is not implemented.

Validation: all 25 Node tests pass, including positive/closed tetrahedral cuts, closed visible boundaries, two disconnected pieces, miss/no-change behavior, and explicit small-cut rejection. Workspace typechecks and production build pass. The actual-GPU Munch suite passed two successive cuts and six grab/release cycles on each of the four specimens, then consumption, a fresh drop, and Reset. Every sampled physical element remained positive; the suite also checks finite surfaces, volume, absolute edge extension, resolved edge strain, and speed. Final post-grab volume ratios were 0.9984 (peach), 1.0001 (bitter gourd), 1.0002 (lotus root), and 1.0001 (dried persimmon). A separate two-piece test passed ray picking, grab/release, and individual consumption for each piece.

Desktop and 390×844 browser interaction checks passed: real bites, independent grabbing of two remainders, consumption/refill, and Reset. The mobile document bounds equal 390×844. Actual phones and Safari remain untested. WebAssembly cutting briefly occupies the main thread; simulation remains on the GPU. Fine lotus pores and rind bumps are surface detail supported by a coarser physical volume. Fragment self-collision and inter-piece collision are not yet implemented. Earlier measurements above refer to prior specimen revisions.

Production smoke check: the built app successfully loaded the bundled Manifold WebAssembly and cut lotus root without console errors. The explicit still-preview route labeled GPU simulation unavailable and disabled Munch and the other simulation controls.


## Munch refinement — October 6

The new supplied bite-mark.svg provides the shared scalloped profile for guide, Boolean cutter, and physical-volume classification. The guide follows a horizontal plane at the specimen’s upper surface and its extrusion follows world Y; camera pitch no longer tilts the cut. A partial bite must overlap at least 10% of the piece’s horizontal footprint and remove at least 4% of its volume. Complete consumption bypasses those partial-cut thresholds. Misses and rejected cuts leave live geometry and physics untouched.

New cut surfaces use conforming triangle refinement (target edge length 0.045). Smooth scallop normals are retained, and a GPU pass computes a continuous interpolated deformation-gradient field for shading. Cut vertices bind to the new physical cells in their current pose once, preserving that binding when the GPU body is created. This removes the previous old-volume inversion/new-volume rebinding mismatch that could pull polygons out of position. Existing specimen colors, flesh coordinates, and cut-interior appearance are retained.

Verification: 29 Node tests passed, including cutting an already deformed body without moving its cut surface or introducing a normal discontinuity. The four-specimen GPU suite passed two successive cuts and six grab/release cycles per specimen, followed by consumption, fresh drop, and Reset; separate-piece ray picking, grabbing, and consumption also passed. Final volume ratios after the second bite were 1.0004 (peach), 0.9999 (bitter gourd), 1.0005 (lotus root), and 1.0002 (dried persimmon), with positive physical cells. A bitter-gourd overlap that left a thin unsupported fragment was explicitly rejected without changing state; a nearby supported bite succeeded. Workspace typechecks and the production build also pass. The browser reported no errors. Desktop and 390 × 844 viewport checks confirmed vertical scalloped walls, visible overlap rejection, Hand after biting, and Reset. Phone hardware and Safari were not tested. Existing limits on slivers, surface/volume topology mismatches, inter-piece collision, and self-collision still apply.


## Thin bite-remnant cleanup — October 6

The cutter retains its straight vertical extrusion and the supplied scalloped outline. A local minimum-thickness field removes attached paper-thin flaps near the new bite, using a 0.09-unit thickness threshold within a 0.19-unit neighborhood. The closed cleanup mask is subtracted from the visible solid and applied to physical-cell clipping, so removed material has no remaining mass, constraints, or picking surface. Unaffected exterior detail is preserved. Detached components below 0.008 cubic units or an effective thickness of 0.035 units are discarded; any remaining surface/physics mismatch still rejects the bite atomically. Finishing a tiny remainder consumes it and follows the existing refill behavior. Cap refinement now uses a 0.04-unit target.

All 30 Node tests pass. The new regression constructs a solid block with an attached 0.012-unit-thick flap, verifies that the flap is removed while the main volume stays closed, and repeats with the flap between sampling planes. Existing tests still verify straight walls, smooth normals, current-pose attachment, misses, and independent pieces.

The final straight-cut GPU suite passes on all four specimens: two successive bites, repeated grab/release, separate-piece picking and consumption, refill, and Reset. All sampled cells remained positive; second-bite volume ratios were 1.0000 (peach), 0.9999/1.0000 (two bitter-gourd pieces), 1.0002 (lotus root), and 1.0002 (dried persimmon). Workspace typechecks and production build pass. A direct main-page peach bite visually confirmed a thick, closed, vertically cut remainder.


## Fixed-proportion guide and preserved bite-edge skin — October 6

The guide now displays the original 213 × 187 SVG with a single uniform scale. Camera perspective no longer compresses or stretches its shape or dashes. The cutter centerline is inverse-projected from those screen pixels onto the horizontal cutting plane, and the same resulting profile drives the Boolean, footprint-overlap check, physical-volume clipping, and remnant cleanup. Extrusion remains vertical. Near-horizon views that cannot support that projection report a visible rejection.

The former cleanup dilation was smaller than the sampling uncertainty at the eroded core boundary, which skimmed healthy skin beside a bite and replaced it with a ragged strip of pale interior material. The dilation now includes a grid-resolution guard, preserving healthy surfaces while still removing unsupported thin flaps. The regression verifies both a rounded solid that must not be skimmed and an attached 0.012-unit flap that must be removed, including an offset between sampling planes. All 32 Node tests pass, including screen-to-cutter alignment at desktop and phone aspect ratios, multiple pitches, and both zoom limits. Close-up browser inspection confirms the clean peach edge and original guide proportions.

Final verification: workspace typechecks/build and the four-specimen GPU Munch suite pass, including repeated bites, grabs/releases, independent-piece picking/consumption, fresh drops, and Reset. Every sampled cell stayed positive. Browser inspection measured the guide at 217.6 × 191.0385 pixels (exactly 213:187) and reported no console errors.


## Tea landing draft — October 6

Prepared a development-only `/?draft=tea` view from the new tea layout. The Tripo mesh was separated into its two true spatial components across UV seams: 1,545,715 teapot triangles and 373,754 cup triangles. Authored geometry, normals, UVs, materials, and texture bytes are retained. Lossless Meshopt compression reduces 67,178,908 bytes to 31,790,712; eight decoded geometry buffers are byte-verified. The original asset and reproducible preparation script are retained.

Each object has an independent base pivot, subtle damped hover response, keyboard focus, and a touch pulse. No entry navigation has been assigned. Upper-left rectangular softbox lighting and a matching shadow-casting key use a custom 32-sample contact-hardening filter. The neutral draft leaves room for the pending blossom video. A typed backdrop configuration provides muted inline looping, poster fallback, focal-point placement, and reduced-motion handling; no substitute animation was added.

Desktop and 390 × 844 mobile previews were inspected; mobile document bounds equal the viewport. Separate hover checks measured the pot responding while the cup stayed at zero, then the cup responding while the pot returned to rest. The final fresh draft page loads without console errors. Workspace typechecks and production build pass. Build inspection confirms the tea GLB/draft code are excluded from production, and the ordinary root URL still opens the GPU Peach playground. Real phone hardware has not been tested. A transient Vite dependency re-optimization during shader development required a page reload; the final clean load is error-free.

Video integration, final matching to its backdrop, the entry gesture, transition choreography, and activation as the main landing page are explicitly deferred. `docs/TEA-LANDING-PLAN.md` records this plan.

Tea hover revision: increased lift to 0.022 units for the pot and 0.016 for the cup, added damped cursor-following lateral/depth movement and gentle tilt/turn, and made the render/shadow invalidation track pointer-driven pose changes even after hover easing settles. Browser checks confirm independent motion, moving cast shadows, return toward rest, and no console errors. App typecheck passes.


## Blossom backdrop and placeholder entry — October 6

Integrated the supplied eight-second video underneath every landing content layer.
A native two-second idle asset plays source time 0 → 1 → 0 at 24 fps. Hover/click/tap
on branch-shaped hit corridors starts full playback at the corresponding source
frame and returns to idle when finished. A native reverse-frame clip avoids
negative playbackRate support and timer-dependent one-second seeking. The matched
0.25/1.75, 0.5/1.5, and 0.75/1.25-second frame pairs differ by less than one average
RGB level out of 255 after compression. Both delivery clips omit audio.

Added the requested placeholder Enter button below the Chinese title. The entry
choreography sends the title left and tea/artwork right, fades the supplied clean
background to the playground ground, then brings playground UI in from the right.
The current video frame is isolated into a grouped RGBA matte for this brief exit;
it does not claim per-branch tracking. Reduced motion uses still idle and a fade.
The renderer handoff restores the default GPU Peach and transfers keyboard focus.
The draft remains at /?draft=tea; production routing is unchanged.

Desktop checks: native idle duration is 2s, full clip duration is 8s, branch hover
starts full playback, end returns to idle, and Enter reaches the active GPU Peach
with default settings and no console errors. Phone-sized 390 × 844 preview keeps
the title, Enter button, tea objects and backdrop within the viewport; branch tap
starts playback. Full workspace typechecks/build pass; the final backdrop updates
also pass the app typecheck. No physical phone hardware has been tested.

## Replacement backdrop and stationary idle — October 6

Replaced the landing footage and poster with the supplied
`Animating_tree_branches_and_blos…_20261006174435.mp4` (8 seconds, 1920 × 1080,
24 fps). New delivery assets use distinct hover-video filenames to avoid stale
browser media caches; only the original eight-pixel black letterbox is removed.
The old ping-pong loop is no longer imported. One paused video and its poster
remain at source time zero until a branch hover, tap, or keyboard activation.
Playback finishes once and returns to the still first frame. Tea hover remains
independent, and reduced-motion preferences suppress hover-triggered playback.

Shifted the teapot/cup stage 4.5 viewport percentage points left on desktop and
short landscape layouts, and four points left on phones. The existing shadows,
object hit targets, and entry animation all move with the same stage.

App typecheck and whitespace checks pass. Browser inspection confirms the new
first-frame artwork, stationary idle, no video activation from teapot hover,
and video playback on branch hover. The separate draft URL remains unchanged.

## Bite alignment after moving fragments — October 6

The screen guide now intersects each freshly synchronized GPU-deformed surface
independently. Exact triangle/arch overlap determines a local contact height;
conservative simulation bounds and the heights of other fragments no longer
position the cutter. Complete screen containment consumes just that fragment.
The original 213:187 screen guide and straight vertical extrusion are preserved.
The former 10% footprint / 4% volume thresholds are removed. Any real overlap
attempts the closed Boolean and physical cut; only numerical tangency is a miss.
Existing closed-volume, tiny-remnant, and invalid-geometry safeguards remain.
Hand behavior is unchanged.

Verification: all 34 Node tests pass, including a grazing bite below 4% that
removes physical mass, edge-only screen intersection, moved/tilted split-piece
alignment, and unchanged neighboring pieces. The GPU suite passes two successive
bites for all four specimens, grabbing each result, removal, fresh drop, and
Reset, plus screen-aligned consumption of two independently grabbed fragments.
Interactive Peach checks reproduce a dividing bite, Hand movement of the left
piece, guide-based consumption at its new position with the right piece intact,
consumption of the last piece, fresh drop, and Reset. Workspace typechecks and
production builds pass. Existing build-size warnings remain.

## Softer video and return crossfade — October 6

The replacement video fades into the opening-frame poster over its final 0.85s
with smooth easing; it rewinds only after becoming transparent. Playback starts
with a 0.25s reveal and still requires branch activation. A 1.25px blur applies
to the entire video, matching poster, clean plate, and transition cutout. Text
and 3D tea rendering retain their original sharpness. Enter during the dissolve
captures the current combined image for the outgoing artwork.

Browser verification observed full video opacity during playback, partial
opacity during the final dissolve, then a stationary poster with video opacity
zero. The existing leftward tea placement and independent shadows are retained.


## Frosted page refraction

Fixed sharp DOM typography appearing through the jelly. `jellyOptics.ts` captures only the behind-canvas heading/caption and page color into a mipmapped texture, refreshed on layout, content, and font changes. Physical transmission samples that image at Three's normal/IOR/thickness-driven refracted UV and scatters detail according to surface roughness. Curved and GPU-deformed normals therefore bend the transmitted image; this remains a screen-space volume approximation, not full two-interface lens tracing or caustics. The final surface has full canvas coverage, preventing the browser from compositing unfiltered HTML a second time. The native Three r170 transmission target's white/0.5-alpha fallback is removed before compositing the page input; this integration should be revisited on a Three upgrade.

Base IOR is 1.40 and thickness 0.75, with roughness 0.58 and transmission 0.62. All four specimens, cut materials, and replacement drops share the optical binding. Hand and simulation code are unchanged. The optical GPU regression passes: curved refraction shifts 5,882 test pixels between stripe bands, frosting reduces transmitted stripe variance by 99.7%, every specimen and a real peach bite render with opaque interior canvas coverage while empty canvas remains transparent. Manual dragging over the Chinese heading/caption confirms there is no sharp lettering leak.
