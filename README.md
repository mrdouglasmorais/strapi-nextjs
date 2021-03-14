# Blog Gama Academy NEXTJS | Strapi

Iniciando com strapi.

![screenshot image](/screenshot.png)

Este iniciador permite que você experimente o Strapi com o Next com o exemplo de um blog simples. É totalmente personalizável e devido ao fato de ser open source, totalmente aberto a contribuições. Portanto, não hesite em adicionar novos recursos e relatar bugs!

## Features

- 2 tipos de conteúdo: Artigo, Categoria
- 2 artigos criados
- 3 categorias criadas
- Design responsivo usando UIkit

Páginas:

- "/" para exibir todos os artigos
- "/article/:id" para exibir um artigo
- "/categoria/:id" exibe artigos dependendo da categoria

## Getting started

A maneira mais fácil de experimentar este iniciador é executá-lo localmente em seu computador.

First, you'll need to create your own copy of this starter. You can do so by clicking [the "Use this template" button](https://github.com/strapi/strapi-starter-next-blog/generate) on GitHub, and filling the [form](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)

### Backend

Crie um projeto Strapi chamado `backend` usando o [blog template](https://github.com/strapi/strapi-template-blog):

```
# Using Yarn
yarn create strapi-app backend --template https://github.com/strapi/strapi-template-blog

# Com o NPX
npx create-strapi-app backend --template https://github.com/strapi/strapi-template-blog
```

O servidor Strapi iniciará automaticamente e importará dados do template.

### Frontend

Deixe o back-end do Strapi em execução em segundo plano. Abra outra guia de terminal e verifique se você está no diretório `frontend`

```bash
cd frontend
```

Para instalar as dependiencias do NextJS:

```bash
# Using yarn
yarn
yarn develop

# Using yarn
yarn install
yarn develop
```

Crie um arquivo para varivel de ambiente  `touch .env.local`

Servidor next => [http://localhost:3000](http://localhost:3000)

Bora codar!
