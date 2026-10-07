# Chinese Jelly — local development and deployment

This project originated from the Replit export at commit `a7c3c5e`. The working files were moved out of the former `local/` subfolder into this project root. Historical Replit settings and notes live in `docs/replit-export/`. The previous `.git` directory was not retained during the move; initialize a new repository here for GitHub.

## Deploy your portfolio site on Vercel

This folder is the GitHub repository root: `/Users/tsingliu/Desktop/MFA DT/jelly-study`.
Create the repository from the **contents of this folder**, keeping `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `vercel.json`, `artifacts/`, `lib/`, `scripts/`, and the required `attached_assets/` together. Use this `jelly-study` folder as the repository root, not just its `artifacts/jelly-study` subfolder.

1. Commit and push this working copy to the GitHub repository you create.
2. Import that repository into Vercel. Leave **Root Directory** at the repository root (`.`); use **Vite** and **Node.js 24.x**.
3. The included `vercel.json` supplies the install command, build command, output directory, and cache headers. No environment variables, API server, database, or secrets are required.
4. After checking the Vercel preview, add **jelly.tsingliu.info** in Project Settings → Domains.
5. At the DNS provider for `tsingliu.info`, add the **CNAME named `jelly` with the exact target Vercel displays**. Keep the existing portfolio/apex-domain records unchanged. Vercel issues HTTPS after verification. [Official domain instructions](https://vercel.com/docs/domains/working-with-domains/add-a-domain).

| Setting | Configured value |
| --- | --- |
| Install | `npx --yes pnpm@10.18.3 install --frozen-lockfile` |
| Build | `npx --yes pnpm@10.18.3 run build:site` |
| Output | `artifacts/jelly-study/dist/public` |
| Node | `24.x` (also constrained by root package.json) |
| Public entry | Tea landing page → Enter → peach playground |
| Direct playground | `https://jelly.tsingliu.info/?playground=1` |

The custom hostname is configured in Vercel/DNS, not bound inside the app. Preview `*.vercel.app` URLs work too. Canonical and social metadata use `https://jelly.tsingliu.info/`; update `artifacts/jelly-study/index.html` and the build verifier if you choose another name. [Vercel configuration reference](https://vercel.com/docs/project-configuration/vercel-json).

Required landing assets are `tea-set-web.glb`, `tea-blossoms-hover.mp4`, `tea-blossoms-hover-poster.jpg`, and `tea-blossoms-clean-background.jpg` in `attached_assets/`. Keep these in Git. The model is about 30 MB and the video about 6 MB; they are loaded by the landing page, while the direct playground skips them. The build hashes imported assets and caches them immutably. Local toolchains, dependencies, profiling files, original models and the unused document-camera model are excluded by `.gitignore` / `.vercelignore`. No files were deleted to achieve those exclusions.

Check the shipping build locally:

```sh
./scripts/local.sh build:site
./scripts/local.sh preview
```

Visit `http://127.0.0.1:4173/` to check the actual production landing page, Enter transition, all four specimens, Munch, Hand, Rotate, two-finger zoom/orbit, sliders and Reset. Use a real iPhone/Android and Safari trackpad before publishing; automated touch/native-gesture events validate the handlers but don't reproduce device performance. Only the static output is deployed; development test pages and original assets are not public build output. GitHub, Vercel, and DNS setup are intentionally left to you.

## Start on this Mac

Double-click **Start Jelly Study.command** in Finder. Leave its Terminal window open while using the app; press **Control-C** to stop it. It opens **http://127.0.0.1:5173** in your default browser.

Or, from this folder:

```sh
./scripts/local.sh dev
```

The launcher downloads a SHA-256-verified Node 24.21.0 from nodejs.org and pnpm 10.18.3 from npm on first use, then installs the locked dependencies. Tools, caches, and dependencies stay inside this folder. It does not change your global Node installation or shell profile. Internet is needed for a fresh setup; fonts and all app assets are served locally afterwards.

## Work on the app

Open this folder in your editor. The app lives in `artifacts/jelly-study/src/`. Changes refresh in the browser; the dev server uses polling so sandboxed editor changes are detected on macOS.

```sh
./scripts/local.sh install    # Install exactly the lockfile versions
./scripts/local.sh typecheck  # Check all workspace packages
./scripts/local.sh test       # Check specimen geometry, volume topology, and viewport framing
./scripts/local.sh build      # Typecheck and build the entire workspace
./scripts/local.sh preview    # Serve the built app at http://127.0.0.1:4173
```

Production web files are in `artifacts/jelly-study/dist/public/`. Serve this directory through HTTP; opening `index.html` directly via file:// is not supported. No hosting or publishing was performed.

VS Code users can run the included **Jelly Study: dev**, **build**, and **typecheck** tasks. The scripts also work from any Terminal/editor.

If you prefer your own tooling, use `.nvmrc` (Node 24.21.0) and pnpm 10.18.3, then `pnpm install --frozen-lockfile` and `pnpm dev`. Your system Node 20.17 is too old for the existing Vite setup; the launcher avoids this issue. [Vite requirements](https://vite.dev/guide/).

Port 5173 is intentionally strict: stop an existing Jelly Study server before launching a second one. Alternatively use `PORT=5175 ./scripts/local.sh dev`. The server binds to this Mac only. No environment file, Replit account, database, API key, or paid service is needed to run the current playground.

## Project map

| Location | Purpose |
| --- | --- |
| `artifacts/jelly-study/src/App.tsx` | Interface and control state |
| `artifacts/jelly-study/src/index.css` / `studyControls.css` | Layout, bilingual navigation, vertical tools, physics window, touch targets and safe areas |
| `artifacts/jelly-study/src/scene/*Geometry.ts` | Procedural specimen geometry, colors, and tissue patterns |
| `artifacts/jelly-study/src/scene/specimens.ts` / `sliceGeometry.ts` | Switchable specimen registry and shared smooth surface construction |
| `artifacts/jelly-study/src/scene/PeachScene.tsx` | Rendering, materials, lights, camera, picking |
| `artifacts/jelly-study/src/scene/jellyOptics.ts` | Frosted page transmission and curvature-driven refraction |
| `artifacts/jelly-study/src/scene/softBodyGpu.ts` | GPU volume, elastic shape, contact, and material-point grab constraints |
| `artifacts/jelly-study/src/scene/volumeTopology.ts` | Closed tetrahedral slice volume and smooth surface bindings |
| `artifacts/jelly-study/src/scene/framing.ts` | Fixed camera composition and full-viewport bounds |
| `artifacts/jelly-study/public/fonts/` | Existing fonts, now local, with licenses |
| `attached_assets/` | Original visual references and staged prompt document |
| `docs/MIGRATION-REVIEW.md` | Migration record, current implementation, verification, and limits |

The generated geometry is the fruit asset; there is no separate `.glb` model, skin texture, seed mesh, or core mesh in this export. The attached prompts are historical reference material, not instructions to implement every later stage.

## Optional inherited packages

The API, database libraries, generated clients, and mockup sandbox are preserved, but the current playground does not call them.

- `./scripts/local.sh dev:api`: optional health API at `http://127.0.0.1:3001/api/healthz`.
- `./scripts/local.sh dev:mockup`: original mockup sandbox at `http://127.0.0.1:5174`.
- Database schema operations need your own PostgreSQL `DATABASE_URL`. No database was found or migrated, and no schema operation runs automatically.

The previous Git metadata was not retained when the project folder was moved. Create a new GitHub repository from this root; nothing has been pushed.

## Current specimens and controls

The specimen is now a thick longevity-peach slice, lying flat with its empty pit cavity facing upward and its pink tip toward the upper right, matching the supplied reference view. The cavity is a shallow longitudinal teardrop, and the cut face rolls smoothly into the outer skin. Pink at the tip and around the cavity fades into pale cream/pink flesh. The frosted translucent material uses broad soft reflections, light transmission, and mild peach-tinted absorption. Procedural fibers and speckles remain visible and are attached to the material coordinates without making the surface bumpy. There is no pit, seed, or core object.

The jelly resolves the page heading and caption through a frosted refraction texture instead of letting sharp HTML show through canvas alpha. Base roughness is **0.58**, transmission **0.62**, IOR **1.40**, and optical thickness **0.75**; specimen-specific tissue settings remain in place. Deformed surface normals bend the transmitted image around curved regions, and roughness scatters its detail. This is screen-space volume refraction, not full ray-traced lens optics. The same material composition applies to bitten pieces and newly dropped specimens.

Choose **Longevity Peach**, **Bitter Gourd**, **Stuffed Lotus Root / 糯米莲藕**, or **Dried Persimmon / 柿饼** to switch the current specimen. Fresh Persimmon has been removed from the active catalog. Switching preserves all current soft-body settings and playback modes; only explicit Reset restores defaults. Cherry and Plum have been removed. The bitter gourd is a thick cross-section with raised green ridges and tubercles, darker skin, lighter green flesh, pale green-yellow inner tissue, and three orange-red seeds around a pale center. Fine cell, fiber, pore, and chamber patterns move with the material.

The canvas covers the entire viewport, including the headline. A GPU viewport constraint keeps the jelly inside the screen with a uniform lateral correction, preserving its deformation instead of crushing boundary cells. Desktop retains the right-side resting composition and existing front/three-quarter view; portrait phones use a larger centered specimen. The camera uses a fixed target and never recenters or zooms to accommodate deformation. Hand targets stop at the viewport bounds, and the canvas clips at the viewport edge.

- Drag the slice with Hand enabled to pull at the clicked material point. The force spreads through a small fingertip-sized region so the thin rim does not tear into spikes. Release to settle.
- Select **Rotate** for single-pointer orbit. **Hand** only manipulates the jelly; dragging empty space in Hand does not rotate. Two-finger drag/twist orbits, pinch changes zoom, and trackpad two-finger scrolling orbits while pinch zooms. A second finger releases a grab and cancels a pending Munch gesture. The remaining finger never inherits a bite or grab after the other lifts. Toolbar +/- stays relative to the current gesture zoom.
- Firmness changes elastic stiffness (default **45**). Damping changes vibration decay (default **0**). **Hand strength** independently adjusts grab force from 0 (no pulling force) to 100; its default is 100.
- **Gravity** runs from 0× (weightless) to 2×, default 1.70×. At 1× the downward acceleration is 9.81 world units/s², matching the [reference study](https://marinabudarina.github.io/jelly-study/). It points toward the floor beneath the resting slice, independent of camera orbit. Floor friction is 0.55 and rebound comes from elastic recovery; no extra bounce impulse is added.
- **Wiggle** gives a short, balanced movement through the jelly, with minimal whole-body movement; **Slow** uses 24% speed. Pause and Export are removed from the interface. Reset restores the slice, its default cavity-up orientation, camera, and control values.
- On compact screens, open **Settings** in the right-hand toolbar to access the four sliders.
- If GPU float rendering is unavailable, the app labels a still preview and disables simulation controls. It retains the full WebGL material when rendering is supported; a software still of the same slice is used when WebGL itself is unavailable.

## Physics and checks

The WebGL2 solver uses 869 material nodes and 4,032 tetrahedra, with distance, volume, corotational elasticity, floor contact, and barycentric grabbing constraints. It simulates at a fixed 120 Hz, catching up by up to six substeps per frame so normal-speed gravity remains consistent down to 20 fps. A step filter prevents inverted cells; a grounded elastic recovery target avoids stalled contact states. Broad, level underside support, support-point gravity torque, and Coulomb friction let the slice tip, land, and settle instead of remaining balanced on an edge or slowly gliding. A deformed cast shadow and soft contact shadow make contact visible. The detailed visible surfaces have 16,385 vertices for peach, 32,657 for bitter gourd, 98,918 for stuffed lotus root, and 41,905 for dried persimmon, using smooth displacement interpolation. This is actual simulation, not a looping animation.

Run `./scripts/local.sh test` for geometry and interaction checks covering the specimen shapes, volume topology, shallow cavity, smooth rim, broad underside support, fixed-camera/full-viewport framing, and landing-camera paths. Open `http://127.0.0.1:5173/tests/gpu-stability.html` while the dev server runs for the real GPU regression. Append `?specimen=bitter-gourd`, `?specimen=lotus-root`, or `?specimen=dried-persimmon` to run the same checks on another specimen. It reads actual positions and checks volume, positive cell orientation, floor rebound, responsive repeated grabbing, settling, Reset, Pause, Slow, Hand strength, firmness, damping, gravity strength, equal fall distance at 20/30/60/120 fps, conservative visible-surface bounds, and eight alternating wall pulls at maximum hand strength and the closest zoom.

Open `http://127.0.0.1:5173/tests/optics-gpu.html` for optical regression checks: DOM text capture, curved-surface image displacement, frosted contrast reduction, opaque canvas coverage inside each of the four translucent specimens, and bitten surfaces.

The full GPU regression passed for both specimens: 40 grab/release cycles total, no inverted cells, and maximum sampled volume changes of 1.13% (peach) and 1.64% (bitter gourd) at the requested 45 / 0 / 100 / 1.70× defaults. The CPU tests, workspace typechecks, and the production build passed. The detailed measurements are in `docs/MIGRATION-REVIEW.md`. Phone-sized layouts were checked at 390×844, 320×568, and 844×390. Actual iOS/Android hardware and Safari performance have not been measured.

Munch is enabled on GPU-supported devices. Hover shows the original `public/references/bite-mark.svg`, uniformly scaled at its 213:187 aspect ratio in screen space; click/tap removes the near-side region. The guide is resolved against each piece’s current GPU-deformed surface, then inverse-projected onto that piece’s contact plane; the cutter follows the fixed-proportion guide while extruding vertically in world Y regardless of camera pitch. A guide crossing the horizon is explicitly rejected. There is no percentage-based overlap minimum: any real overlap attempts a bite, including grazing contacts. Full screen containment consumes that fragment independently of neighboring pieces. A Manifold Boolean produces closed visible cut faces, while conforming tetrahedral clipping removes the corresponding physical volume and rebuilds constraints, bindings, and picking. Disconnected remainders have independent GPU bodies. Cover a complete remainder to consume it; finishing the last piece drops a fresh current specimen. Reset restores the whole specimen. A local thickness cleanup removes paper-thin flaps next to the bite from both visible geometry and physical volume. Tiny detached remnants are consumed automatically. Numerically degenerate, overly detailed, or mismatched surface/volume cuts are explicitly rejected before committing. Export is removed from the interface; inter-piece and self-collision are not implemented. The old unused `softBodyTopology.ts` and `physicsPlaceholder.ts` remain as inherited source; the active solver imports `volumeTopology.ts`.

## Open on a phone

The default launcher is restricted to this Mac. To opt into testing on a phone on your trusted local Wi-Fi, stop the existing server and run:

```sh
./scripts/local.sh dev --host 0.0.0.0
```

Use the Network URL printed by Vite on the phone. This exposes the development server to the local network only while that command is running; stop it with Control-C when done. No network-sharing service was started during this migration. For ordinary Mac development, use the default launcher again.

## Main-page layout

The development root URL opens directly into the Peach playground; production opens the tea landing page first. Use `?playground=1` to skip the production landing. The earlier document-camera landing page and entry transition are inactive. The main page follows the latest PNG: large English specimen name and Chinese title at left, the supplied specimen captions at lower left, and bilingual specimen navigation at the bottom left. The selector follows `main.png`: Stuffed Lotus Root / 桂花莲藕, Dried Persimmon / 柿饼, Longevity Peach / 寿桃, and Bitter Gourd / 苦瓜, separated by fine vertical rules with the current choice in deep red. Tools form a vertical rail on the right, above a matching square-edged soft-body window with red slider tracks and values. Header branding, field-note numbers, Latin names, descriptive notes, and orbit hints are removed from the visible interface. Compact screens use an icon rail with accessible names and a dismissible Settings window anchored to the lower right; the bilingual selector wraps into two columns on phones. The canvas remains limited to the viewport and allows interaction across the title area.

Fresh Persimmon is no longer in the selector or runtime specimen registry. Its earlier procedural source and geometry checks remain available for reference, but are not imported by the app.

The original and losslessly compressed document-camera assets remain in `attached_assets/` for later reuse; neither is loaded or copied into the current production site. The earlier scene modules and architecture notes are retained as inactive work. `scripts/prepare-document-camera.mjs` now writes the compressed archive to `attached_assets/document-camera-web.glb`.

## Dried Persimmon / 柿饼

Dried Persimmon is now a thick horizontal slice with the top removed to expose smooth orange flesh. A darker center joins eight translucent amber tissue rays; dark fine speckles and delicate fibers follow the deforming cut face. The rounded exterior retains the powdery white coating and subtle dried-skin folds. There are no leaves or stem, and no indentation on the exposed top. Its broad underside supports the same gravity and contact behavior, and switching preserves shared soft-body settings.

The exposed top is part of the initial closed volumetric specimen. Munch uses its material-space interior sampler, with orange flesh and dark volumetric speckles on newly exposed bite faces.

Fourteen CPU checks cover the existing specimens and the revised dried slice, including positive volume cells, level support, the smooth leaf-free top, eight tissue rays, and darker speckled flesh. The workspace typecheck/build passed. The new appearance was checked on desktop, a 320×568 phone viewport, and the labeled software preview. Physical phone hardware remains untested. The revised slice passed the full GPU regression at `/tests/gpu-stability.html?specimen=dried-persimmon`: 12 ordinary grab/release cycles, eight maximum-strength wall pulls, settling, Reset, and all controls. Maximum sampled volume error was 1.11%, with no inverted cells; minimum signed element ratio was 0.1500 and peak edge ratio 1.561.


## Stuffed Lotus Root / 糯米莲藕

A thick salmon-pink disc with eight irregular rice-filled chambers arranged around a small central chamber, fourteen smaller open channels, and nine embedded four-petal osmanthus flowers. The filling is soft ivory glutinous paste with sparse visible grains. The closed 98,918-vertex surface has smooth rounded rims and true tunnels through both caps, attached to surrounding tetrahedra at their actual depth so tilting cannot pull strips below the slice. The shared coarse physics volume does not resolve each tiny pore as a separate physical tunnel. Munch preserves the remaining rice, flower, rind, and tunnel detail.

The supplied lotus-root and bitter-gourd captions appear at lower left. The lotus caption emphasizes “tracing back to the Tang Dynasty,” as requested. Settings remain shared when switching. The final lotus model passed all 20 GPU grab/release cycles, floor rebound, settling, Reset, Pause, Slow, and all sliders. Maximum sampled volume error was 1.65%, minimum signed element ratio 0.1500, and peak edge ratio 1.383. No volume cells inverted. Desktop, 390×844 mobile, and the labeled software fallback were checked.


## Munch verification and extension hook

`/tests/munch-gpu.html` exercises actual GPU state after successive bites, grabs/releases, whole-piece consumption, dropping a fresh specimen, and resetting. The Node tests additionally check closed visible/physical boundaries, disconnected pieces, misses, explicit grazing-cut rejection, vertical cuts across camera orbits, refined cap triangles, exact current-pose attachment, smooth affine normal deformation, removal of attached thin flaps both on and between sampling planes, preservation of healthy rounded skin, and screen-guide/cutter alignment across viewport, orbit, and zoom. Cut surfaces are conformingly refined to a 0.04 world-unit target edge length. Their bindings are retained in the newly clipped volume, and GPU-interpolated nodal deformation gradients keep shading continuous across physical cells.

Future sound can subscribe to the exported `munchEvents` EventTarget in `src/scene/munchEvents.ts`. A `munch` CustomEvent carries `{ specimen, removedVolume, remainingPieces, consumed }` only after a successful commit; no sound is played yet. Surface Boolean work, remnant cleanup, physical clipping, and surface binding run in one reusable Web Worker, with transferable typed buffers. The main thread keeps rendering; the jelly pose is held during a bite. Reset and specimen changes terminate pending work. Geometry detail and safety thresholds are unchanged. Complex bites still take roughly 1–3 seconds in local browser tests. `/tests/munch-worker.html` compares direct/worker results byte-for-byte; `/tests/munch-gpu.html?worker` checks the cut bodies and grabbing; `/tests/interaction-controls.html` and `?mobile` exercise production input handlers with synthetic gestures.


## Tea landing and development preview

Open `http://127.0.0.1:5173/?draft=tea` during local development for the separate
landing preview. The replacement blossom video stays on its first frame until
hovering or tapping a branch plays the full animation. It returns to a still
frame afterward through a 0.85-second crossfade; there is no idle autoplay. A light 1.25px blur softens the full backdrop, including its poster and transition artwork, while text and 3D tea objects stay sharp. The teapot and cup retain
independent cursor motion and moving shadows.

The **Enter** button below 中式果冻 previews the transition:
artwork moves right, the title moves left, the clean background fades, and the
Peach playground's text and controls enter from the right. The production root opens this landing page. `?playground=1` opens the playground directly. Local development keeps the root playground shortcut and `?draft=tea` landing preview. See
`docs/TEA-LANDING-PLAN.md` for asset preparation and transition details.
