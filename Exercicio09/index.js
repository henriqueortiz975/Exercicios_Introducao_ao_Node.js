const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    const dataHora = new Date().toLocaleString('pt-BR');

    const log = `
[${dataHora}] URL acessada: ${req.url}
`;

    fs.appendFileSync('log.txt', log);

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if(req.url === '/'){

        res.end(`

            <html>

            <head>

                <title>Servidor Node</title>

                <style>

                    body{
                        background:#0f172a;
                        color:white;
                        font-family:Arial;
                        text-align:center;
                        padding:50px;
                    }

                    .caixa{
                        background:#1e293b;
                        padding:30px;
                        border-radius:15px;
                        width:400px;
                        margin:auto;
                    }

                </style>

            </head>

            <body>

                <div class="caixa">

                    <h1>🚀 Servidor Node.js</h1>

                    <p>Servidor funcionando com sucesso!</p>

                    <p>Data e hora:</p>

                    <h3>${dataHora}</h3>

                    <p>URL acessada: ${req.url}</p>

                </div>

            </body>

            </html>

        `);

    }

    else if(req.url === '/sobre'){

        res.end(`

            <html>

            <body style="
                background:#111827;
                color:white;
                font-family:Arial;
                text-align:center;
                padding:50px;
            ">

                <h1>📘 Sobre</h1>

                <p>Página sobre o aluno.</p>

                <p>Data e hora: ${dataHora}</p>

                <p>URL acessada: ${req.url}</p>

            </body>

            </html>

        `);

    }

    else{

        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });

        res.end(`

            <html>

            <body style="
                background:#7f1d1d;
                color:white;
                font-family:Arial;
                text-align:center;
                padding:50px;
            ">

                <h1>❌ Página não encontrada</h1>

                <p>URL acessada: ${req.url}</p>

            </body>

            </html>

        `);

    }

});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});