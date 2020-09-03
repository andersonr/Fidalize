Iniciando o desenvolvimento do projeto em um novo ambiente

Se for utilizar docker, executar o comando: docker run --name fideleasy_container -e POSTGRES_PASSWORD=IGUAL_DO_ENV -p 5432:5432 -d postgres

Renomear arquivo .env.example para .env e preencher os campos com XXXX

Executar migration: yarn sequelize db:migrate
