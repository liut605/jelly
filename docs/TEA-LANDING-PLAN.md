# Tea landing draft

Status: isolated development preview. Open `http://127.0.0.1:5173/?draft=tea`.
The ordinary root URL and production build continue to open the jelly playground.
The supplied backdrop and placeholder Enter interaction are now implemented for review.
The draft is still isolated from the production route.

## Composition

Follow `MacBook Pro 16_ - 15.png`: large dark “CHINESE / JELLY” at the upper left,
deep-red “中式果冻” beneath it. The newer `TEA-POS.png` sets the tea composition:
cup to the left of the pot, together near the lower center-left, with open space
beneath the blossom branches.
The supplied blossom video fills the background beneath the text and 3D objects.
The small draft-status note is preview-only.
On phones the title sits above the tea set. All layers remain inside the viewport.
The desktop tea stage starts at 26.5% from the left, sits 8% above the bottom,
and occupies 34% of viewport width and height. Compact landscape uses a 32% left
offset; phones retain the full-width stage beneath the title. The stage contains
the renderer, moving shadows, and interaction targets so they remain aligned.

## Asset preparation — implemented

The supplied Tripo GLB contained one named mesh, approximately 1.92 million
triangles, and three embedded texture maps. Connectivity across coincident UV
seams identifies exactly two separate objects. `scripts/prepare-tea-set.mjs`
exports named `Teapot` and `Teacup` meshes, retaining every triangle, normal, UV,
material and texture. No decimation or texture recompression is applied.

- Original: `attached_assets/tea-set-original.glb`, 67,178,908 bytes.
- Delivery draft: `attached_assets/tea-set-web.glb`, 31,790,712 bytes.
- Teapot: 1,545,715 triangles; cup: 373,754 triangles.
- Eight geometry buffers are decoded and byte-checked after lossless Meshopt
  compression. Full source hash and segmentation bounds are recorded in
  `docs/tea-set-asset.json`.

This is still a detailed asset. A lighter mobile version can be evaluated before
launch if real-device performance warrants it; the source remains intact.

## Interaction — implemented for the draft

Each object has its own pivot at its base and its own accessible hit target.
Hover eases the selected object up by 0.016–0.022 model units, adds up to
0.035 units of lateral cursor-following movement, and gently turns/tilts it
(up to about 7 degrees), then returns it to rest. The other object remains still.
There is no continuous idle wobble. Keyboard focus provides the same response;
a tap gives a brief motion pulse. Reduced-motion preferences keep the objects
still. Hover targets stay at their rest positions to avoid feedback jitter.

Neither tea object navigates. A separate placeholder Enter playground button
beneath the Chinese text starts the entry transition. Audio remains unassigned.

## Lighting and shadows — implemented

A large rectangular softbox and matching shadow-casting key light sit above and
to the left of the tea objects. Warm neutral hemisphere light and a modest fill
support the original celadon ceramic and wicker textures. The camera, lighting,
and transparent receiving plane are isolated from the playground scene.

A custom shadow shader searches for occluders and widens a 32-sample filter as
caster/receiver separation increases. Contact stays comparatively tight while
raised forms cast softer shadows toward the right/back. Both objects cast real
geometry shadows, updated on every hover and cursor-driven pose change, including motion after
the initial hover has settled. Idle rendering stops once the motion settles. Renderer shadow settings and GPU resources are restored/disposed
when the draft unmounts.

## Backdrop video — implemented

Source: `Animating_tree_branches_and_blos…_20261006174435.mp4`, eight seconds,
1920 × 1080, 24 fps. The delivery files remove only the eight black pixels at the
top and bottom, producing 1920 × 1064 footage, and omit the audio track.

- `attached_assets/tea-blossoms-hover.mp4`: replacement eight-second animation.
- `attached_assets/tea-blossoms-hover-poster.jpg`: its first-frame still.
- Previous full/ping-pong assets are retained but no longer imported or played.
- `attached_assets/tea-blossoms-clean-background.jpg`: supplied 4096 × 2272 clean
  plate for the transition. Its original JPEG is retained.

`TeaBackdrop` initially shows only the new poster. The single video element is
paused at time zero, with no autoplay or idle loop. Hover on an invisible SVG
corridor following the branches starts the full animation from the beginning.
Moving away lets it finish. Over the last 0.85 seconds the moving frame gently
dissolves into the first-frame poster, then the video rewinds while hidden.
The start has a 0.25-second fade-in. A shared 1.25px CSS blur softens the entire
backdrop, poster, clean plate, and outgoing cutout without blurring the title or
3D objects. Entry during the dissolve captures the blended frame. The still
first frame remains until the next activation. Hovering the empty wall, text, or tea objects does not trigger it. Click/tap and Enter/Space also activate the
branches. Reduced-motion preferences use a still frame; explicit branch
activation can play the full clip once. Playback failure falls back to the poster.

The video, poster, transition cutout, clean plate, and branch hit regions share
one cover rectangle without aspect-ratio distortion. They stay below the title,
Enter button, tea objects, and their hit targets. No full-screen input overlay
intercepts the scene.

Preparation tools are `scripts/prepare-tea-video.m` and
`scripts/prepare-tea-pingpong.m`. Compile with macOS clang and the Foundation,
AVFoundation, CoreMedia, CoreGraphics, ImageIO (first tool) and CoreVideo (second
tool) frameworks. Both accept an input video path; the first takes an output
directory, the second takes an output MP4 path. Use a fresh output destination.
The first tool also creates a forward-only intermediate idle clip, unused by the
app. No global tooling or new package dependency is required.

## Entry transition — implemented as a draft

The placeholder Enter playground button under 中式果冻 is the only entry trigger.
Repeated activation is ignored. The title/button leave left, while the isolated
video artwork and tea set leave right. The supplied clean plate replaces the
video wall and fades into the playground background. After 1.25 seconds the
shared renderer is released by TeaScene and acquired by the Peach playground.
The playground heading, selector, caption, settings, and toolbar then enter from
the right with a short stagger. Focus transfers to its heading. Reduced motion
uses a short fade with no sliding.

At entry, the current visible video frame is frozen and matted into a single RGBA
foreground group using the supplied clean plate, branch corridors, and blossom
color separation. The decorative vertical strip is included. This is a 2D
transition cutout, not independently reconstructed/tracked branches or a claim
that the original video has transparency. The unmodified footage is used during
normal playback. If capture is unavailable, entry still works via a fade.

## Validation

Asset split and lossless compression verified. Desktop preview and 390 × 844
layout inspected. Hover tests show the teapot and cup respond independently and
return toward rest; the page stays on the draft URL. Backdrop playback and Enter-to-Peach behavior are verified on desktop and mobile
viewports. Final build checks and console checks are recorded in `docs/MIGRATION-REVIEW.md`.


### Updated entry control

The `landing.png` reference now defines the entry treatment: uppercase deep-red ENTER, a single fine vertical rule at its left, and generous space below the Chinese title. The pill outline and arrow are removed. The real button retains keyboard focus, its accessible “Enter playground” name, double-trigger protection, and the existing transition. The draft annotation is no longer visible.
