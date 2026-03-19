

## Diagnosis

The white screen is caused by **two issues**:

1. **`basename="/zen-dream-scape"` in BrowserRouter** — The Lovable preview serves the app at `/`, not at `/zen-dream-scape/`. The router sees the URL doesn't start with `/zen-dream-scape` and renders nothing. The console log confirms this: *"Router is not able to match the URL because it does not start with the basename"*.

2. **`base: "/zen-dream-scape/"` in vite.config.ts** — Same problem for asset loading in the preview.

The `src/index.css` file exists and is fine. `src/main.tsx` has `.tsx` in the App import but that works with Vite (not the cause).

## Plan

### Step 1: Remove hardcoded basename from BrowserRouter
In `src/App.tsx`, change `<BrowserRouter basename="/zen-dream-scape">` to `<BrowserRouter>`. The basename is only needed for GitHub Pages deployment and breaks the Lovable preview.

### Step 2: Remove hardcoded base from Vite config
In `vite.config.ts`, remove `base: "/zen-dream-scape/"` (or set it conditionally for production only). This ensures assets load correctly in the preview.

### Step 3 (optional): Clean up main.tsx import
Change `import App from "./App.tsx"` to `import App from "./App"` to follow conventions (not causing the bug, but cleaner).

These three changes will fix the white screen immediately.

