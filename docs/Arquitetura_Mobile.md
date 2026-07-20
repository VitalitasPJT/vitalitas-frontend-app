# Arquitetura Mobile

## Tecnologias

- React Native
- Expo
- Expo Router
- TypeScript

---

# Estrutura

```text
mobile
│
├── app
├── assets
├── src
└── android
```

---

# app

A pasta **app** pertence ao Expo Router.

Ela define as rotas da aplicação.

Cada arquivo representa uma rota.

Exemplo:

```text
app
├── _layout.tsx
├── index.tsx
├── aluno.tsx
└── resetpassword.tsx
```

Os arquivos da pasta **app** devem apenas exportar as páginas presentes em **features**, mantendo o roteamento separado da implementação.

---

# assets

Contém apenas recursos utilizados pelo Expo.

Exemplo:

```text
assets
├── icon.png
├── splash-icon.png
└── adaptive-icon.png
```

Imagens da aplicação devem permanecer em:

```text
src/shared/assets
```

---

# src

A lógica da aplicação encontra-se nesta pasta.

```text
src
│
├── contexts
├── features
├── shared
├── store
└── styles
```

---

# contexts

Contextos globais da aplicação.

---

# features

Cada funcionalidade é isolada.

Exemplo:

```text
features
│
├── auth
├── users
├── first-password
└── landing
```

Cada feature concentra:

- componentes
- páginas
- hooks
- serviços

---

# shared

Recursos reutilizados entre diversas funcionalidades.

```text
shared
│
├── assets
├── components
├── hooks
├── services
├── utils
├── constants
└── types
```

---

# store

Responsável pelo gerenciamento de estado global.

Exemplo:

- Redux
- Zustand

---

# styles

Contém estilos globais reutilizados pela aplicação.

---

# Organização

A arquitetura do Mobile segue a mesma filosofia da aplicação Web.

A única diferença é a existência da pasta **app**, obrigatória para funcionamento do Expo Router.