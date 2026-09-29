const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type,charset=utf-8');
    res.end('C:\Users\boumh\Documents\PORTFOLIO BY YASSINE 2026\pagina web');
});

server.listen(PORT, () => {
    console.log(`Servidor local a correr com sucesso em http://localhost:${PORT}`);
    console.log(`Agora já podes abrir outro terminal e correr: ngrok http ${PORT}`);
});
