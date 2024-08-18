import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

// Load the Vite manifest
const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../frontend/dist/.vite/manifest.json'), 'utf-8')
);

// Serve static assets from the Vite build output
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Helper function to inject assets into HTML
function injectAssets(html, manifestEntry) {
  const entry = manifest[manifestEntry].file;
  const cssFiles = manifest[manifestEntry].css.map((file) => `<link rel="stylesheet" href="/${file}">`).join('\n');

  html = html.replace('<script type="module" src="/src/main.tsx"></script>', `<script type="module" src="/${entry}"></script>`);
  html = html.replace('</head>', `${cssFiles}</head>`);

  return html;
}

// Route for the homepage
app.get('/', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/main.tsx');
  res.send(html);
});

// Route for the about page
app.get('/about', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/about.tsx');
  res.send(html);
});

// Route for the contact page
app.get('/contact', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/contact.tsx');
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
