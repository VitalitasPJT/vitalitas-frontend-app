# Vitalitas – Frontend

O **Vitalitas** é uma plataforma web desenvolvida para modernizar a gestão de academias, oferecendo uma solução integrada para alunos, professores, funcionários e administradores.

Este repositório contém o **frontend** da aplicação, responsável pela interface do usuário, experiência de navegação e comunicação com os serviços do backend.

O objetivo é fornecer uma experiência intuitiva, responsiva e segura, garantindo acessibilidade e usabilidade em diferentes dispositivos.

<img width="1862" height="769" alt="image" src="https://github.com/user-attachments/assets/32288d1f-2bbb-4b78-ae82-979211cb706a" />

[Link do Protótipo Figma - Clique aqui!](https://www.figma.com/proto/0NrgmDD9v0esjj0oIQD4KC/Website---Vitalitas?node-id=1118-62&t=8dMGgIXzAR59QADD-1&scaling=min-zoom&content-scaling=fixed&page-id=939%3A3&starting-point-node-id=1118%3A62)

## Contexto Acadêmico

O projeto Vitalitas está sendo desenvolvido no contexto dos Projetos Integradores do **Centro Universitário de Brasília (CEUB)**, instituição de ensino que incentiva, orienta e acompanha continuamente todas as etapas de concepção, planejamento e evolução da solução.

A iniciativa integra a proposta pedagógica do curso ao promover a aplicação prática dos conhecimentos adquiridos ao longo da formação acadêmica, estimulando a construção de um produto com impacto real e alinhado às demandas do mercado.

O desenvolvimento ocorre com acompanhamento docente e abordagem baseada em metodologia ágil, promovendo integração multidisciplinar entre diversas áreas da tecnologia como Engenharia de Software, Banco de Dados, Programação Web e Arquitetura de Sistemas.

## Visão Geral do Projeto

- **Qual problema ele resolve?**

  Muitas academias ainda utilizam ferramentas fragmentadas (planilhas, sistemas isolados ou controles manuais), o que gera:

  - Falta de centralização de informações;

  - Dificuldade na tomada de decisão;

  - Baixa eficiência operacional;

  - Experiência limitada para alunos e professores;

  O Vitalitas propõe uma plataforma unificada, com controle completo da jornada do aluno e da gestão administrativa.

  **Benefícios esperados:** 
  - Centralização de dados de alunos, treinos e avaliações;

  - Maior eficiência operacional;

  - Dados confiáveis para tomada de decisão;

  - Melhor acompanhamento da evolução física dos alunos;

  - Melhoria na experiência digital da academia;

- **Tecnologias e ferramentas utilizadas para Frontend**

  - **Figma**: prototipação das telas antes da implementação em código.
  
  - **React + TypeScript + Bootstrap**: base tecnológica para o desenvolvimento frontend.

  Essa combinação de tecnologias foi escolhida por oferecer:

    1. Escalabilidade → TypeScript com tipagem estática

    2. Produtividade → Componentização do React

    3. Padronização visual → Bootstrap + React-Bootstrap

    4. Performance → Build otimizado com Vite

    5. Segurança → Autenticação baseada em JWT

## Entrega de valor

Atualmente, o frontend já conta com: 
- Landing page (SPA – Single Page Application) 
- Interface de login funcional 
- Página de erro dinâmica 
- Menu de navegação entre os conteúdos da landing page (Contato, Serviços, Quem Somos) 

Essas funcionalidades ainda podem sofrer ajustes futuros, mas já estão majoritariamente implementadas. 

---

## Arquitetura do Front end

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

## MVP - Funcionalidades Incluídas

- Autenticação e Controle de Acesso

    - Login com e-mail e senha  ☑

    - Identificação automática do perfil de usuário  ☑

    - Redirecionamento conforme permissões  ☑

    - Alteração obrigatória de senha no primeiro acesso  ☑

- Gestão de Usuários

  - Criação de usuários (Administrador, Funcionário, Professor e Aluno)

  - Regras de permissão por perfil

  - Visualização e edição de dados de perfil

- Gestão de Treinos e Avaliações

  - Criação e edição de fichas de treino

  - Comparação entre ficha atual e anterior

  - Agenda de avaliações com visualização em calendário

- Funcionalidades do Professor

  - Edição de dados pessoais

  - Visualização de alunos vinculados

  - Consulta às fichas de treino sob sua responsabilidade

- Funcionalidades do Aluno

  - Visualização da ficha de treino atual

  - Agendamento de avaliações

  - Edição básica de dados pessoais

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

## Proximos Passos

As funcionalidades abaixo não fazem parte do MVP e estão previstas para versões futuras:

- Geração obrigatória de ficha médica para alunos

- Cadastro de avaliações de bioimpedância

- Histórico completo de avaliações físicas

- Integração financeira e controle de mensalidades

- Contratação de licença via site

- Upload e gerenciamento de vídeos de exercícios

- Sistema de ranking interno por XP

- Lembretes automáticos para ingestão de água

- Explicações automatizadas de avaliações com uso de Inteligência Artificial

## Equipe de Desenvolvimento – Frontend

| Nome | LinkedIn | GitHub |
|------|----------|--------|
| Arthur Guaritá Brasil | [LinkedIn](https://www.linkedin.com/in/arthur-guaritá-brasil-09384b379/) | [GitHub](https://github.com/arthurguaritabrasil) |
| Iuri Guimarães Pinheiro | [LinkedIn](https://www.linkedin.com/in/iuri-guimarães-pinheiro-97159b310/) | [GitHub](https://github.com/IuriGP) |
