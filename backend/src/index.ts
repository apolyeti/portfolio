import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

interface ManifestEntry {
  file: string;
  css: string[];
}

interface Manifest {
  [key: string]: ManifestEntry;
}

// Load the Vite manifest
const manifest: Manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../frontend/dist/.vite/manifest.json'), 'utf-8')
);

// Serve static assets from the Vite build output
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Helper function to inject assets into HTML
function injectAssets(html: string, manifestEntry: string): string {
  const entry = manifest[manifestEntry].file;
  const cssFiles = manifest[manifestEntry].css.map((file: string) => `<link rel="stylesheet" href="/${file}">`).join('\n');

  // Replace the placeholder script with the built script path
  html = html.replace('<script type="module" src="/src/main.tsx"></script>', `<script type="module" src="/${entry}"></script>`);

  // Inject CSS files
  html = html.replace('</head>', `${cssFiles}</head>`);

  return html;
}

// Route for the homepage
app.get('/', (req: Request, res: Response) => {
  let html = fs.readFileSync(path.join(__dirname, '../../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/main.tsx'); // Adjust if your entry point differs for homepage
  res.send(html);
});

// Route for the about page
app.get('/about', (req: Request, res: Response) => {
  let html = fs.readFileSync(path.join(__dirname, '../../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/about.tsx'); // Replace 'src/about.tsx' with the correct entry point
  res.send(html);
});

// Route for the contact page
app.get('/contact', (req: Request, res: Response) => {
  let html = fs.readFileSync(path.join(__dirname, '../../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/contact.tsx'); // Replace 'src/contact.tsx' with the correct entry point
  res.send(html);
});

// Handle any other routes (optional, usually for SPAs)
app.get('*', (req: Request, res: Response) => {
  let html = fs.readFileSync(path.join(__dirname, '../../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/main.tsx'); // Adjust if needed
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
