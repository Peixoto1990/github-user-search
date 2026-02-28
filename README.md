# GitHub User Search 🔍

Um WebApp desenvolvido em **React + Vite** para buscar e exibir informações de usuários do GitHub de forma simples e intuitiva.  
O projeto consome a **API pública do GitHub** e apresenta os resultados em um card estilizado, com feedback visual para estados de carregamento, erro e inicial.

---

## ✨ Funcionalidades
- Campo de busca para usuários do GitHub.
- Exibição de informações do perfil em um **UserCard** (avatar, bio, seguidores, etc).
- Tratamento de erros com **ErrorCard** quando o usuário não é encontrado.
- Mensagem inicial com **WelcomeCard** para orientar o uso.
- **Spinner** para indicar estado de carregamento durante requisições.
- Layout moderno com **CSS Grid, Flexbox e animações**.
- Preparado para **responsividade** (media queries serão adicionadas futuramente).

---

## 🛠️ Tecnologias utilizadas
- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [CSS Modules](https://github.com/css-modules/css-modules)  
- API pública do [GitHub](https://docs.github.com/en/rest/users/users)

---

## 🚀 Como executar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/peixoto1990/github-user-search.git

2. Acesse a pasta do projeto:
   ```bash
   cd github-user-search

3. Instale as dependências:
   ```bash
   npm install

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev

5. Abra o navegador e acesse:
   ```bash
   http://localhost:5173
   
---

## 🌐 Deploy

Este projeto está hospedado no Vercel.

🔗 Breve aqui.

---

## 📂 Estrutura de componentes

- Form.jsx → Campo de busca e controle de input.

- UserCard.jsx → Exibe dados do usuário.

- ErrorCard.jsx → Mensagem de erro quando o usuário não é encontrado.

- WelcomeCard.jsx → Mensagem inicial para orientar o usuário.

- Spinner.jsx → Indicador visual de carregamento.

---

## 📜 Licença

Este projeto é de código aberto e está sob a licença MIT.

Sinta-se livre para usar, modificar e compartilhar.