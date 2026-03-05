# GitHub User Search 🔍

Um WebApp moderno desenvolvido com **React + Vite** para buscar, exibir e favoritar perfis do GitHub. O projeto foca em uma arquitetura limpa, separando a lógica de negócio da interface visual, proporcionando uma experiência de usuário fluida e responsiva.

Consome a **API pública do GitHub** e apresenta os resultados em cards dinâmicos com gerenciamento de estados de carregamento, erro e persistência de dados.

---

## ✨ Funcionalidades

* **Busca em Tempo Real:** Interface intuitiva para localização de perfis.
* **Gestão de Favoritos:** Salve seus usuários favoritos; a lista é persistida automaticamente no navegador via `LocalStorage`.
* **Arquitetura Modular:** Lógica de busca e persistência encapsulada em **Custom Hooks**, mantendo os componentes visuais limpos e focados na interface.
* **Design Defensivo:** Tratamento inteligente de textos longos (nomes e bios) com `line-clamp` e `ellipsis` para evitar quebras de layout.
* **Feedback ao Usuário:** Cards específicos para estados de Erro, Boas-vindas e um Spinner para carregamento.
* **UX Aprimorada:** Gerenciamento de foco automático com `useRef` para agilizar a interação.
* **Totalmente Responsivo:** Layout adaptável para Mobile, Tablet e Desktop construído com **CSS Grid**.

---

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca principal para construção da interface.
* **Vite:** Ferramenta de build ultra-rápida.
* **Custom Hooks:** Para gerenciamento de estado global da busca e sincronização com LocalStorage.
* **CSS Modules:** Estilização encapsulada para evitar vazamento de escopo.
* **API pública do GitHub:** Fonte de dados para os perfis.

---

## 🧠 Diferenciais Técnicos (Clean Code)

Neste projeto, apliquei princípios de desenvolvimento profissional:
* **Separação de Preocupações:** Funções de lógica (submit, favoritos) foram movidas para scripts externos, tornando o `App.jsx` puramente declarativo.
* **Persistência Reativa:** Sincronização automática entre o estado do React e o `localStorage`.
* **Layout com CSS Grid:** Uso de `grid-template-areas` para uma troca de layout mobile/desktop elegante e com poucas linhas de código.

---

## 🚀 Como Executar Localmente

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/Peixoto1990/github-user-search.git
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd github-user-search
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
5.  **Abra o navegador e acesse:** `http://localhost:5173`

---

## 🌐 Deploy

Este projeto está hospedado com sucesso no **Vercel**.
🔗 [Confira o WebApp Online](https://github-user-search-seven-nu.vercel.app/)

---

## 📂 Organização de Componentes

* **Form.jsx:** Controle de input e disparo de buscas.
* **UserCard.jsx:** Componente principal de exibição com lógica de favoritar.
* **FavoriteList.jsx:** Lista lateral/topo para acesso rápido aos favoritos salvos.
* **ErrorCard.jsx / WelcomeCard.jsx:** Feedback visual de contexto.
* **Spinner.jsx:** Indicador de processamento de dados.

---

## 📜 Licença

Este projeto é de código aberto e está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar.