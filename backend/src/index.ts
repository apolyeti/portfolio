import express  from 'express';
import path     from 'path';
import fs       from 'fs';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    const index = path.join(__dirname, '../frontend/dist/index.html', 'utf-8');
    res.send(index);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
