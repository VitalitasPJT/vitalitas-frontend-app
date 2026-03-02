# Vitalitas - Frontend Web

> **Interface web moderna para gestão integrada de academias.**

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/32288d1f-2bbb-4b78-ae82-979211cb706a" />

<br>
<br>

> ℹ️ **Visão Geral:** Para entender o contexto acadêmico, a proposta de valor e o escopo do produto (MVP), acesse o **[README da Organização Vitalitas](https://github.com/VitalitasPJT)**.
>
> 
> [Link do Protótipo Figma - Clique aqui!](https://www.figma.com/proto/0NrgmDD9v0esjj0oIQD4KC/Website---Vitalitas?node-id=1118-62&t=8dMGgIXzAR59QADD-1&scaling=min-zoom&content-scaling=fixed&page-id=939%3A3&starting-point-node-id=1118%3A62)

---

## Tecnologias e ferramentas utilizadas

  - **Figma**: prototipação das telas antes da implementação em código.

  [![Figma](https://skillicons.dev/icons?i=figma)](https://skillicons.dev)
  
  - **React + TypeScript + Bootstrap**: base tecnológica para o desenvolvimento frontend.

  [![Figma](https://skillicons.dev/icons?i=react,bootstrap,typescript)](https://skillicons.dev)

  Essa combinação de tecnologias foi escolhida por oferecer:

  > 1. Escalabilidade → TypeScript com tipagem estática
  >
  > 2. Produtividade → Componentização do React
  >
  > 3. Padronização visual → Bootstrap + React-Bootstrap
  >
  > 4. Performance → Build otimizado com Vite
  >
  > 5. Segurança → Autenticação baseada em JWT

## Arquitetura

A pasta `./src` possui a seguinte estrutura:

1. `./assets` → imagens e logos utilizadas
2. `./components` → componentes reutilizáveis e formulários
3. `./contexts` → gerenciamento de sessão, usuário logado e permissões
4. `./hooks` → reutilização de contexts e lógica compartilhada
5. `./pages` → páginas principais do sistema
6. `./routes` → rotas públicas e privadas
7. `./services` → comunicação com o backend e APIs externas
8. `./utils` → funções auxiliares

### Bibliotecas utilizadas

- **axios**: comunicação com o backend via requisições HTTP
- **bootstrap**: estilização e padronização visual das páginas
- **bootstrap-icons**: conjunto de ícones prontos para uso
- **jwt-decode**: decodificação de tokens JWT para autenticação
- **react**: biblioteca principal para construção da interface
- **react-bootstrap**: integração de componentes React com Bootstrap
- **react-dom**: renderização dos componentes React no DOM
- **react-router-dom**: gerenciamento de rotas e navegação

### Por que escolher essas tecnologias?
Essas tecnologias foram escolhidas por oferecerem:

- **Produtividade**: React e suas bibliotecas aceleram o desenvolvimento com componentes reutilizáveis.
- **Escalabilidade**: TypeScript garante tipagem estática e maior segurança no código.
- **Padronização visual**: Bootstrap e React-Bootstrap permitem consistência na interface.
- **Segurança**: JWT garante autenticação confiável e controle de acesso.
- **Flexibilidade**: Axios facilita a integração com APIs internas e externas.

## Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- **Node.js** (versão recomendada: 18+ ou 20+)  
  https://nodejs.org/

- **npm** (vem junto com o Node)

Verifique se está instalado:

`node -v`
ou
`npm -v`

## Instalação das dependências

Na pasta do projeto, rode:

`npm install` - Baixa todas as bibliotecas necessárias

## Rodando o projeto em modo desenvolvimento

`npm run dev -- --port 3000` - Inicia o servidor front de desenvolvimento do Vite na porta 3000

## Equipe de Desenvolvimento – Frontend

| Nome | LinkedIn | GitHub |
|------|----------|--------|
| Arthur Guaritá Brasil | [LinkedIn](https://www.linkedin.com/in/arthur-guaritá-brasil-09384b379/) | [GitHub](https://github.com/arthurguaritabrasil) |
| Iuri Guimarães Pinheiro | [LinkedIn](https://www.linkedin.com/in/iuri-guimarães-pinheiro-97159b310/) | [GitHub](https://github.com/IuriGP) |

---

## Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos na disciplina de **Projeto Integrador** do **Centro Universitário de Brasília (UniCEUB)**.

Copyright © 2026 **Vitalitas**. Todos os direitos reservados.
