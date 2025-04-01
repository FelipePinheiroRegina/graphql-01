# GraphQL: o que é e o por que?

Criado em 2012 pelo facebook para reduzir o consumo de banda nas requests

- utiliza do protocolo http
- os dados são todos tipados
- não temos varias rotas GET, POST, PUT, DELETE ex.: como nas APIRest
- temos apenas o POST
- 1 schema de graphql pode ter dados de varias entidades do banco de dados

- resolvers são funções para manipular os dados
- @Query para buscar dados
- @Mutation para mutar dados

echo "# graphql-01" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:FelipePinheiroRegina/graphql-01.git
git push -u origin main