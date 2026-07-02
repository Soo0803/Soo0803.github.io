# Wei Jie's Personal Website (Astro Rebuild)

This repository hosts a componentized, animation-enhanced port of Wei Jie's personal blog-style website, migrated from a single-file template to the **Astro** static-site framework.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v22.12.0 or higher recommended) installed.

### Setup and Installation
1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

3. Build the production static site:
   ```bash
   npm run build
   ```
   The built HTML/CSS/JS assets will be inside the `dist/` directory.

4. Preview the built site locally:
   ```bash
   npm run preview
   ```

---

## 📸 Media Asset Management

All photos, videos, and diagrams are referenced relative to the `public/` directory. Place your files inside:
`public/media/`

### How to Swap Media Box Placeholders for Real Content

All media elements on the site are structured using the `<MediaBox />` component (located in `src/components/MediaBox.astro`). By default, they are rendered as empty, dashed placeholders.

#### 1. Image Mode
To display a static screenshot or photo (e.g. `terny.png` or `diagram.png`):
1. Drop the image inside `public/media/`.
2. Locate the project inside [src/components/Work.astro](file:///Users/soo/Desktop/resume%20and%20cover%20letter/personal%20website/src/components/Work.astro) or [src/components/Beyond.astro](file:///Users/soo/Desktop/resume%20and%20cover%20letter/personal%20website/src/components/Beyond.astro).
3. Update the component props:
   ```astro
   <MediaBox
     slot="media"
     type="image"
     src="/media/terny.png"
     alt="Terny screenshot"
     caption="Terny matching a student to research in seconds."
     shape="shot"
   />
   ```

#### 2. Video Mode
To play an MP4 file with video player controls:
1. Drop the video file (e.g. `robot-hand.mp4`) and optional poster image inside `public/media/`.
2. Update the component props:
   ```astro
   <MediaBox
     slot="media"
     type="video"
     src="/media/robot-hand.mp4"
     poster="/media/robot-hand-poster.png"
     caption="The hand tracking my fingers in simulation."
     shape="wide"
   />
   ```

#### 3. Embed/IFrame Mode
To display a YouTube or Vimeo embedded video:
1. Copy the embed link from YouTube/Vimeo (e.g., `https://www.youtube.com/embed/VIDEO_ID`).
2. Update the component props:
   ```astro
   <MediaBox
     slot="media"
     type="embed"
     src="https://www.youtube.com/embed/VIDEO_ID"
     shape="wide"
   />
   ```

---

## 🌎 Deployment Guide

The site builds to static files in the `dist/` directory, making it highly compatible with modern serverless hosting providers.

### ⚡ Deploying to Netlify
1. Log into [Netlify](https://www.netlify.com/).
2. Select **Import from Git** or drag-and-drop the `dist/` folder manually under **Deploy manually**.
3. If connecting via Git, configure the following settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

### ⚡ Deploying to Vercel
1. Log into [Vercel](https://vercel.com/) and click **Add New** > **Project**.
2. Import the Git repository.
3. Vercel automatically detects **Astro** and configures the default settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### ⚡ Deploying to GitHub Pages
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Select **GitHub Actions** as the source.
3. Create a workflow file `.github/workflows/deploy.yml` with the official Astro deploy configuration:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build site
           run: npm run build
         - name: Upload Pages Artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: dist/
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```
4. Astro configuration: Ensure `site` and `base` in `astro.config.mjs` match your GitHub URL if deploying to a subdirectory:
   ```javascript
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     site: 'https://<username>.github.io',
     base: '/<repo-name>',
   });
   ```

---

## 🎨 Design Tokens

All colors and fonts are centralized inside `src/styles/tokens.css` for easy tweaking:

- Primary background: Warm ivory (`--bg: #FAF4E8`)
- Highlighting/accent: Honey (`--honey: #C4892E`)
- Text: Primary ink (`--ink: #2B2721`)
- Typography accents: Moss green (`--moss: #46583C`)
