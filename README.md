# My Book API Landing

Este projeto é uma aplicação web desenvolvida com React e Vite, que permite aos usuários buscar, visualizar e gerenciar livros favoritos. A aplicação utiliza a API do Google Books para buscar informações sobre os livros.

## Funcionalidades

- **Busca de Livros**: Permite aos usuários buscar livros por título, autor, categoria e data de publicação.
- **Favoritos**: Os usuários podem adicionar livros aos favoritos e removê-los. Os favoritos são persistidos no `localStorage`.
- **Histórico de Leitura**: Mantém um registro dos livros que o usuário já visualizou.
- **Modo Escuro/Claro**: Alterna entre temas claro e escuro.
- **Paginação**: Navegação entre páginas de resultados de busca.
- **Filtros Avançados**: Filtragem de resultados por autor, data de publicação e classificação.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e leve para projetos front-end.
- **Styled-components**: Biblioteca para estilização de componentes React.
- **Google Books API**: API para buscar informações sobre livros.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/my-book-api-landing.git
   cd my-book-api-landing

   ```bash
    npm install

   ```bash
     npm run dev


O projeto estará disponível em http://localhost:3000.

## Scripts Disponíveis

npm run dev: Inicia o servidor de desenvolvimento.
npm run build: Cria uma versão otimizada para produção.
npm run serve: Serve a versão otimizada para produção.
npm run lint: Executa o linter para verificar problemas no código.

## Estrutura do Projeto

```
my-book-api-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AdvancedFilters.jsx
│   │   ├── BookDetailsPopup.jsx
│   │   ├── BookList.jsx
│   │   ├── FavoritesList.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Pagination.jsx
│   │   ├── ReadingHistory.jsx
│   │   └── SearchBar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```



Contribuição
Se você deseja contribuir com este projeto, siga os passos abaixo:

Faça um fork do repositório.
Crie uma nova branch: git checkout -b minha-feature.
Faça suas alterações e commit: git commit -m 'Minha nova feature'.
Envie para o seu fork: git push origin minha-feature.
Abra um Pull Request.
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato
Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

Email: reisgabriela293@gmail.com
GitHub: [Meu Github](https://github.com/dev-gabis)