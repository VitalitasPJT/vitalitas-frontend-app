# Arquitetura Web

## Tecnologias

- React
- TypeScript
- React Router
- Vite
- Bootstrap
- Tailwind CSS

---

# Estrutura

```text
src
│
├── app
├── contexts
├── features
├── shared
└── styles
```

---

# app

Responsável pela inicialização da aplicação.

Contém:

```text
app
├── routes
├── App.tsx
└── main.tsx
```

Funções:

- inicialização
- providers
- roteamento
- configuração global

---

# contexts

Armazena Context API globais.

Exemplo:

```text
contexts
├── AuthContext.tsx
└── ThemeContext.tsx
```

São estados compartilhados por toda aplicação.

---

# features

Cada funcionalidade possui sua própria estrutura.

Exemplo:

```text
features
│
├── auth
├── users
├── landing-page
├── first-password
└── redirect-error
```

Cada feature deve conter apenas arquivos relacionados à sua responsabilidade.

Exemplo:

```text
users
│
├── gestor
├── aluno
├── instrutor
├── components
├── pages
└── services
```

---

# shared

Componentes reutilizados por diversas funcionalidades.

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

Exemplos:

- Button
- Input
- Modal
- Card

---

# styles

Contém estilos globais.

Exemplo:

```text
styles
├── index.css
└── tailwind.css
```

---

# Organização das Features

Cada feature deve concentrar:

- componentes
- páginas
- hooks
- serviços
- tipos

A estrutura segue o princípio de alta coesão e baixo acoplamento.