const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulação de um banco de dados de códigos, com um campo 'amount' para o valor de dinheiro
const codes = {
    "UPDATE": { reward: "RECOMPENSA1", amount: 1000 }, // O jogador recebe 100 de dinheiro
    "CÓDIGO2": { reward: "RECOMPENSA2", amount: 200 }  // O jogador recebe 200 de dinheiro
};

// Rota para verificar códigos
app.get('/redeem/:code', (req, res) => {
    const code = req.params.code.toUpperCase(); // Ignorar maiúsculas/minúsculas

    if (codes[code]) {
        // Código válido - incluir 'amount' na resposta
        res.json({ success: true, message: `Código resgatado!`, amount: codes[code].amount });
    } else {
        // Código inválido
        res.json({ success: false, message: "Código inválido." });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
