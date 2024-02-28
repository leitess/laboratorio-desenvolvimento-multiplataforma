Laboratorio de Desenvolvimento Multiplataforma
==============================================

Atividade 1 (Construção de rotas) baseado na 
aula do dia 28/02/2024 de   introdutoria ao Express 
e Node.js. Foi usado o nodemon, para reiniciar 
o servidor a cada alteração nos arquivos do projeto.

O projeto deve contar as seguintes rotas: 
    - produtos/automovel/marca/modelo/ano
    - cadastro/usuario
    - contato

Na rota cadastro/usuario está sendo usado querystring,
eis aqui um exemplo:

- http://localhost:8081/cadastro/usuario?name=%22Silas%22&lastname=%22Leite%22&email=%22silas.leite2@fatec.sp.gov.br%22


Abaixo está um exemplo da pagina de produto:
- http://localhost:8081/produto/chevette/chevy/chevrolet/1981


Para rodar antes instale as depedências com o 
comando:
    - npm install

Depois use o comando:
    - npm run dev