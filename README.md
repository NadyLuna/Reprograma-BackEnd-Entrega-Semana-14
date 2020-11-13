# Integração do Banco de dados utilizando o Cluster do MongoDB

## Exercícios  

- [x] Selecionar alguma API Rest feita em semanas anteriores e aplicar a integração ao banco de dados do Mongona Nuvem.

 ### _API Escolhido: Servidor de Livros (Semana 10)_

 _____

 <h2>Conectando o Banco de Dados à Nuvem</h2>

Site de acesso: [Cloud MongoDB](https://cloud.mongodb.com/)

Após entrar nesse site, é necessário seguir alguns passos para configurar a sua Cloud.

Caso apareça algum erro de conexão, pode ser a configuração do DNS, então abre esse [link](https://use.opendns.com/) aqui e faz o passo a passo.

```
1) Clica em "Connect";
2) Clica na terceira opção "allow access from everywere" - (0.0.0.0 geralmente significa a rota padrão (a rota para "o resto da" Internet)) e clica em "add IP Address";
3) Escolhe um usuário e senha ;
4) Clica em "choose a connection method";
5) Vai na opção do meio "connect your application";
6) Na opção de "driver", deixa "node.js" e o "version", deixa "3.6 or late";
7) Copia a string da aplicação;
8) Abre o visualcode;
9) No app.js, substitui a string "localhost" no "mongoose.connect" pela string copiada do Cluster;
10) Lembrar de colocar o password e o nome da db;
11) iniciar o nodemon - Comando npm start ou nodemon server;
12) Mandar um Post pelo Postman;
13) No site do Cluster, apertar em "Collections", e ai vai aparecer o Post dado.
```




### Fontes:

1. Passo a passo feito por [Wanessa Souza](https://github.com/blackALT); 
2. Sobre configuração do DNS. Disponível em: https://use.opendns.com/.
