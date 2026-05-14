# Vitalitas - Frontend

> **Interface moderna para gestão integrada de academias — Web e Mobile.**

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

<img width="1558" height="932" alt="aaa1" src="https://github.com/user-attachments/assets/a602fbee-8f82-4de3-aa51-ed407ede212e" />

<br>
<br>

> ℹ️ **Visão Geral:** Para entender o contexto acadêmico, a proposta de valor e o escopo do produto (MVP), acesse o **[README da Organização Vitalitas](https://github.com/VitalitasPJT)**.
>
> [Link do Protótipo Figma - Clique aqui!](https://www.figma.com/proto/0NrgmDD9v0esjj0oIQD4KC/Website---Vitalitas?node-id=1796-118&t=BS6Y6p6UtcrFUDcx-1&scaling=min-zoom&content-scaling=fixed&page-id=939%3A3&starting-point-node-id=1796%3A118&show-proto-sidebar=1)

---

## Estrutura do Repositório

Este repositório é um **monorepo** que contém os dois frontends do sistema:

```
vitalitas-frontend-app/     ← Raiz do monorepo
├── apps/
│   ├── web/                ← React + Tailwind  (Administrador, Gestor, Instrutor)
│   └── mobile/             ← React Native + Expo  (Aluno)
├── packages/
│   └── shared/             ← Tipos e utilitários compartilhados  (*por enquanto não implementado*)
└── package.json    
```

| App | Perfis atendidos | Tecnologia |
|-----|-----------------|------------|
| `apps/web` | Administrador, Gestor, Instrutor | React + TypeScript + Tailwind |
| `apps/mobile` | Aluno | React Native + Expo |

---

## 🌐 Web

### Tecnologias

[![Figma](https://skillicons.dev/icons?i=react,typescript,tailwind,vite)](https://skillicons.dev)

- **React + TypeScript**: base para construção da interface
- **Tailwind CSS**: estilização utilitária e padronização visual
- **Vite**: build otimizado para desenvolvimento
- **Axios**: comunicação com o backend via HTTP
- **React Router DOM**: gerenciamento de rotas e navegação
- **JWT Decode**: decodificação de tokens para autenticação

### Arquitetura

A pasta `apps/web/src` possui a seguinte estrutura:

1. `./assets` → imagens e logos
2. `./components` → componentes reutilizáveis e formulários
3. `./contexts` → gerenciamento de sessão e permissões
4. `./hooks` → reutilização de contexts e lógica compartilhada
5. `./pages` → páginas principais do sistema
6. `./services` → comunicação com o backend
7. `./utils` → funções auxiliares

### Instalação e execução

```bash
# Na raiz do repositório, instale as dependências do monorepo
npm install

# Rode o projeto web
cd apps/web
npm run dev -- --port 3000     (deve ser na porta 3000 devido a configuração do CORS)
```

---

## 📱 Mobile

O app mobile foi desenvolvido para o perfil **Aluno**, oferecendo uma experiência prática para acompanhar treinos, evolução e comunicados diretamente pelo celular — sem precisar acessar o navegador.

### Tecnologias

[![Figma](https://skillicons.dev/icons?i=react,typescript,androidstudio)](https://skillicons.dev)

- **React Native + Expo**: desenvolvimento mobile multiplataforma
- **Expo Router**: navegação baseada em arquivos (similar ao Next.js)
- **AsyncStorage**: persistência de dados no dispositivo
- **Axios**: comunicação com a mesma API do web

### Arquitetura

O app segue uma separação clara de responsabilidades, mantendo a pasta `app/` exclusivamente para roteamento (Expo Router) e concentrando toda a lógica em `src/`:

```
apps/mobile/
├── app/                        ← Roteamento (Expo Router — não alterar)
│   ├── _layout.tsx             ← Layout raiz e provider de autenticação
│   ├── index.tsx               ← Re-export da scene Auth
│   ├── aluno.tsx               ← Re-export da scene Aluno
│   └── resetpassword.tsx       ← Re-export da scene ResetPassword
└── src/
    ├── components/             ← Componentes base reutilizáveis
    │   ├── Button/
    │   └── Input/
    ├── scenes/                 ← Telas completas (lógica + layout)
    │   ├── Auth/
    │   ├── Aluno/
    │   └── ResetPassword/
    ├── services/               ← Comunicação com a API
    │   ├── api.ts              ← Instância e config do Axios
    │   └── authService.tsx     ← Funções de autenticação
    └── store/                  ← Estado global e hooks
        ├── AuthContext.tsx     ← Context de autenticação
        └── useAuth.tsx         ← Hook de acesso ao contexto
```

> **Obs.:** cada tela em `app/` é um re-export simples da sua respectiva scene em `src/scenes/`. Toda lógica, estilo e subcomponentes locais vivem dentro da pasta da scene.

### Configuração do ambiente

A configuração do ambiente mobile envolve a instalação do Android Studio, criação do emulador e configuração das variáveis de ambiente `ANDROID_HOME` e `JAVA_HOME`.

👉 **[Acesse o Guia Completo de Setup Mobile](./docs/MOBILE_SETUP.md)**

### Instalação e execução

```bash

# Rode o projeto mobile
cd apps/mobile
npm install
npx expo start
```

> ⚠️ O emulador Android deve estar rodando antes de executar `npx expo start`. Acesse o **Device Manager** no Android Studio e inicie o AVD desejado.
---

## Fluxo de Branches

O repositório segue um fluxo simples e direto, com duas branches principais:

| Branch | Finalidade |
|--------|-----------|
| `prd`  | Ambiente de **produção** — código estável e validado |
| `des`  | Ambiente de **desenvolvimento/testes** — integração contínua da equipe |

### Como funciona

```
feature/nome_da_feature ──► des ──► [QA / Testes] ──► prd
```

1. **Crie uma branch de feature** a partir de `des`:
```bash
git checkout des
git checkout -b feature/nome_da_feature
```

2. **Desenvolva e faça commits** na sua branch normalmente.

3. **Abra um Pull Request para `des`** ao finalizar.

4. **A equipe de QA valida** o comportamento na branch `des`.

5. **Validou? Abre PR para `prd`** e a feature vai ao ar.

> ⚠️ **Nunca faça commits diretos em `prd` ou `des`.** Todo código entra via Pull Request.

### Nomenclatura de branches

| Prefixo | Uso |
|---------|-----|
| `feature/` | Nova funcionalidade |
| `fix/` | Correção de bug |
| `hotfix/` | Correção urgente em produção |
| `chore/` | Ajustes técnicos, configs, refatorações |

**Exemplos:** `feature/tela_treinos`, `fix/corrige_login`, `hotfix/token_expirado`

---

## Equipe de Desenvolvimento — Frontend

| Nome | LinkedIn | GitHub |
|------|----------|--------|
| Arthur Guaritá Brasil | [LinkedIn](https://www.linkedin.com/in/arthur-guaritá-brasil-09384b379/) | [GitHub](https://github.com/arthurguaritabrasil) |
| Iuri Guimarães Pinheiro | [LinkedIn](https://www.linkedin.com/in/iuri-guimarães-pinheiro-97159b310/) | [GitHub](https://github.com/IuriGP) |

---

## Ferramentas de IA utilizadas no desenvolvimento

O desenvolvimento deste projeto contou com o apoio de ferramentas de inteligência artificial em diferentes etapas do processo criativo e técnico:

| Ferramenta | Uso |
|------------|-----|
| **IA do Figma** | Geração de ideias e sugestões visuais durante a prototipação das telas |
| **Figma Dev Mode** | Extração automática de código CSS e especificações de design para implementação |
| **Claude (Anthropic)** | Auxílio na escrita, revisão e formatação de código React/TypeScript durante o desenvolvimento |

> O uso dessas ferramentas reduziu significativamente o tempo de desenvolvimento das telas — o que antes levava cerca de 3 dias passou a ser concluído em poucas horas — permitindo maior foco na qualidade da implementação, na integração com o backend e na organização da arquitetura do projeto.

---

## Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos na disciplina de **Projeto Integrador** do **Centro Universitário de Brasília (UniCEUB)**.

Copyright © 2026 **Vitalitas**. Todos os direitos reservados.
