const express = require('express');
const app = express();


app.listen(3003, () => {
    console.log('Server is running');
});

app.get('/cadastro', (request, response) => {
    response.send('Página de cadastro!');
});

app.get('/contato', (request, response) => {
    response.send('Página de contato!');
});

app.get('/produto/:item', (request, response) => {
    response.send(`Página de detalhes do produto ${request.params.item}`);
});

app.get('/produto/:category/:color', (request, response) => {
    const product = `Página de produtos da categoria ${request.params.category} e cor: ${request.params.color}`;
    response.send(product);
});

app.get('/', (request, response) => {
    response.send('Página principal')
});
