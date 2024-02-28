const express = require('express');
const app = express();


app.listen(8081, () => {
    console.log('Server is running');
});

app.get('/', (request, response) => {
    response.send('Página principal')
});

app.get('/cadastro/usuario', (request, response) => {
    const user = {
        name: request.query.name,
        lastname: request.query.lastname,
        email: request.query.email,
    };
    const responseBody = `Página de cadastro!\nUsuario ${user.name} ${user.lastname} (${user.email}) cadastro com sucesso!`
    
    response.send(responseBody);
});

app.get('/contato', (request, response) => {
    response.send('Página de contato!');
});

app.get('/produtos/:automovel/:marca/:modelo/:ano', (request, response) => {
    response.send(`Página de detalhes do produto ${request.params.automovel}, modelo ${request.params.marca} - Marca: ${request.params.marca} do ano de ${request.params.ano}`);
});
