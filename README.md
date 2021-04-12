# Marketkess
API desenvolvida em NodeJs para servir de backend para o aplicativo.

# Como rodar localmente
 
Para rodar a aplicação são necessários alguns pré-requisitos:
- NodeJS
- Docker
Após baixar os pré-requisitos primeiro passo é executar o comando ```npm intall```, que irá baixar todas dependências do NodeJs que estão contidas no arquivo package.json.
Para a aplicação poder funcionar é necessário configurar o arquivo ```.env```, para isso podemos usar o arquivo ```.env.example``` como base, preenchendo todas as informações.

# Comandos Úteis:

Criar uma nova migration para criar/editar uma tabela:
```
npx sequelize-cli migration:create --name DESCRICAO_DA_MIGRATION
```
Reverter todas as migrations:
```
yarn sequelize db:migrate:undo:all
```