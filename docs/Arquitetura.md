# Arquitetura Frontend

## Visão Geral

O frontend da plataforma Vitalitas é organizado utilizando a estratégia de **Monorepo**, permitindo que múltiplas aplicações compartilhem o mesmo repositório mantendo independência de desenvolvimento.

Atualmente o projeto é dividido em duas aplicações:

```text
apps/
├── web/
└── mobile/
```

Cada aplicação possui seu próprio ciclo de vida, dependências, configurações e processo de build.

Embora independentes, ambas seguem a mesma filosofia de organização interna, baseada em **Features (Feature-Based Architecture)**.

---

## Estrutura do Projeto

```text
frontend
│
├── apps
│   ├── web
│   └── mobile
│
├── docs
│
├── public
│
├── package.json
└── README.md
```

---

## Organização

O projeto foi dividido em:

- **apps** → aplicações independentes.
- **docs** → documentação do projeto.
- **public** → arquivos públicos utilizados na documentação.
- **package.json** → gerenciamento do workspace.

---

## Monorepo

O monorepo permite:

- Compartilhamento de configurações.
- Versionamento único.
- Padronização da arquitetura.
- Facilidade para manutenção.
- Escalabilidade do projeto.

Cada aplicação continua possuindo seu próprio:

- package.json
- node_modules
- build
- configurações

mantendo independência entre Web e Mobile.

---

## Arquitetura

Todas as aplicações seguem a organização por funcionalidades (**Feature-Based Architecture**).

Cada módulo concentra:

- páginas
- componentes
- hooks
- serviços
- tipos

reduzindo o acoplamento entre funcionalidades.