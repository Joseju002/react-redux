const express = require('express');
const app = express();

const fs = require('fs');
app.use(express.static('dist'));

const port = 3001;

app.get('*', (req, res) => {
    var contenido = fs.readFileSync('./dist/index.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.send(contenido);
});

app.listen (port, () => console.log(`Servidor funcionando en ${port}`));