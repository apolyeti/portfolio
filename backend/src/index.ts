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

// load vite manifest
const manifest: Manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../frontend/dist/.vite/manifest.json'), 'utf-8')
);


app.use(express.static(path.join(__dirname, '../../frontend/dist')));


function injectAssets(html: string, manifestEntry: string): string {
    const entry = manifest[manifestEntry].file;
    const cssFiles = manifest[manifestEntry].css.map((file: string) => `<link rel="stylesheet" href="/${file}">`).join('\n');

    // inject entry file
    html = html.replace('<script type="module" src="/src/main.tsx"></script>', `<script type="module" src="/${entry}"></script>`);

    // inject css files
    html = html.replace('</head>', `${cssFiles}</head>`);

    return html;
}

app.get('/', (req: Request, res: Response) => {
  let html = fs.readFileSync(path.join(__dirname, '../../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/main.tsx');
  res.send(html);
});


// contact page
app.get('/contact', (req: Request, res: Response) => {
  let html = fs.readFileSync(path.join(__dirname, '../../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/contact.tsx');
  res.send(html);
});

// SPA catch-all
app.get('*', (req: Request, res: Response) => {
  let html = fs.readFileSync(path.join(__dirname, '../../frontend/index.html'), 'utf-8');
  html = injectAssets(html, 'src/main.tsx');
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
