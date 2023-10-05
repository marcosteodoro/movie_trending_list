# React Movie Trending List
## Aplicação do módulo 6 de consumo de APIs com React do TIC em Trihas do C.E.S.A.R.

A API que utilizaremos para o projeto será a seguinte: https://developer.themoviedb.org/docs

Para rodar o projeto realize um git clone, e entre no diretório do repositório com o comando:
```
cd movie_trending_list
```
Será necessário criar uma conta para obter uma chave da API, para isso siga os seguintes passos:
https://www.educative.io/courses/movie-database-api-python/set-up-the-credentials#Create-an-account

Com a chave de API em mãos crie um arquivo ```.env.local``` na raiz do projeto com o conteúdo a seguir
```
VITE_MOVIEDB_JWT_TOKEN=S3U.JWT.4QU1
```
Com tudo isso configurado rode o seguinte comando, para instalar as dependências do projeto:
```
npm install
```
E por fim basta colocar o projeto pra rodar:
```
npm run dev
```

Abrindo seu navegador em http://localhost:5173 você verá seu projeto rodando! 😁