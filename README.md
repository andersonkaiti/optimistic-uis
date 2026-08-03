# Optimistic UIs

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-2-60A5FA?logo=biome&logoColor=white)

Aplicação de exemplo que demonstra **interfaces otimistas (optimistic UI)** com React e TanStack Query. A ideia é atualizar a interface imediatamente após uma ação do usuário — antes mesmo da resposta do servidor — e reconciliar (ou reverter) o estado assim que a requisição é concluída.

## 🛠️ Tecnologias

| Tecnologia                                          | Descrição                                     |
| --------------------------------------------------- | --------------------------------------------- |
| [React 19](https://react.dev/)                      | Biblioteca de UI (com React Compiler)         |
| [Vite](https://vitejs.dev/)                         | Build tool e servidor de desenvolvimento      |
| [TanStack Query](https://tanstack.com/query)        | Gerenciamento de estado assíncrono e cache    |
| [Tailwind CSS v4](https://tailwindcss.com/)         | Estilização utilitária                        |
| [Base UI](https://base-ui.com/)                     | Componentes acessíveis (estilo shadcn)        |
| [TypeScript](https://www.typescriptlang.org/)       | Tipagem estática                              |
| [json-server](https://github.com/typicode/json-server) | API fake para desenvolvimento              |
| [Biome](https://biomejs.dev/)                       | Lint e formatação                             |
| [Husky](https://typicode.github.io/husky/) + [commitlint](https://commitlint.js.org/) | Git hooks e padrão de commits (gitmoji) |

## 🧠 Como funciona o otimismo

A lógica central vive nos hooks de mutação e usa os callbacks do TanStack Query:

- **`onMutate`** — atualiza o cache (`queryClient.setQueryData`) antes da resposta, guardando o estado anterior no `context`.
- **`onSuccess`** — cancela queries em andamento e reconcilia o cache com o dado retornado pelo servidor.
- **`onError`** — reverte o cache para o estado anterior (`context.previousUsers`) ou marca o item com status `error`.

O tipo `WithStatus<T>` adiciona um campo opcional `status` (`pending` | `error`) para que a interface possa sinalizar visualmente o estado de cada linha durante a operação.

---

Projeto desenvolvido como parte dos estudos da [JStack](https://jstack.com.br/).
