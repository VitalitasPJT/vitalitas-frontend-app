# 📱 Guia de Setup — Mobile (React Native + Expo)

> Guia completo para configurar o ambiente de desenvolvimento e rodar o app mobile do Vitalitas no emulador Android.

---

## Visão Geral

O app mobile foi desenvolvido exclusivamente para o perfil **Aluno**, usando **React Native + Expo**. Ele consome a mesma API do projeto web e oferece uma experiência mais prática para o aluno acompanhar treinos, evolução e comunicados diretamente pelo celular.

---

## Pré-requisitos

Antes de começar, garanta que os seguintes softwares estão instalados:

| Software | Versão Mínima | Download |
|----------|--------------|----------|
| Node.js | 18 ou superior | [nodejs.org](https://nodejs.org) |
| Git | Qualquer versão recente | [git-scm.com](https://git-scm.com) |
| Android Studio | Ladybug ou superior | [developer.android.com/studio](https://developer.android.com/studio) |
| VS Code (recomendado) | Qualquer versão | [code.visualstudio.com](https://code.visualstudio.com) |

---

## Passo 1 — Clonar o Repositório

```bash
git clone https://github.com/seu-org/vitalitas-frontend-app.git
cd vitalitas-frontend-app
```

### Instalar dependências

O monorepo possui **duas instalações separadas** — uma para o web e outra para o mobile. Isso é intencional para evitar conflitos de versão do React entre os dois projetos.

```bash
# Dependências do monorepo (web)
npm install

# Dependências do mobile (isoladas)
cd apps/mobile
npm install
```

---

## Passo 2 — Instalar e Configurar o Android Studio

### 2.1 — Instalação

1. Acesse [developer.android.com/studio](https://developer.android.com/studio) e baixe o instalador
2. Execute o instalador com as opções padrão
3. Na tela de componentes, garanta que estão marcados:
   - ✅ Android SDK
   - ✅ Android SDK Platform
   - ✅ Android Virtual Device (AVD)

### 2.2 — Instalar o SDK do Android

1. Abra o Android Studio
2. Vá em **More Actions → SDK Manager**
3. Na aba **SDK Platforms**, selecione **Android 13 (API 33)** ou superior
4. Clique em **Apply** e aguarde o download
5. **Copie o caminho** exibido no campo **Android SDK Location** — você vai precisar dele

Exemplo de caminho típico no Windows:
```
C:\Users\SeuNome\AppData\Local\Android\Sdk
```

### 2.3 — Criar o Emulador (AVD)

1. No Android Studio, vá em **More Actions → Virtual Device Manager**
2. Clique em **Create Device**
3. Selecione o hardware — recomendamos **Pixel 7**
4. Clique em **Next**
5. Selecione a imagem do sistema — recomendamos **API 33 (Android 13)**. Clique no ícone de download se ainda não estiver baixada
6. Clique em **Next → Finish**
7. O emulador aparecerá na lista — clique em ▶ para confirmar que abre

---

## Passo 3 — Configurar Variáveis de Ambiente

Abra as variáveis de ambiente do Windows: pressione **Windows + R**, digite `sysdm.cpl` e pressione Enter. Vá na aba **Avançado → Variáveis de Ambiente**.

### 3.1 — ANDROID_HOME

Em **Variáveis do usuário**, clique em **Novo**:

| Campo | Valor |
|-------|-------|
| Nome | `ANDROID_HOME` |
| Valor | `C:\Users\SeuNome\AppData\Local\Android\Sdk` |

> ⚠️ Substitua `SeuNome` pelo seu usuário do Windows. O caminho exato aparece no SDK Manager.

Em seguida, encontre a variável **Path**, clique em **Editar** e adicione as duas entradas abaixo clicando em **Novo** para cada uma:

```
C:\Users\SeuNome\AppData\Local\Android\Sdk\platform-tools
C:\Users\SeuNome\AppData\Local\Android\Sdk\emulator
```

**Verificação:**
```bash
adb --version
# Esperado: Android Debug Bridge version 1.0.41
```

### 3.2 — JAVA_HOME

O Android Studio já vem com Java embutido. Em **Variáveis do usuário**, clique em **Novo**:

| Campo | Valor |
|-------|-------|
| Nome | `JAVA_HOME` |
| Valor | `C:\Program Files\Android\Android Studio\jbr` |

Adicione também ao **Path**:
```
C:\Program Files\Android\Android Studio\jbr\bin
```

**Verificação** (abra um novo terminal após salvar):
```bash
java -version
# Esperado: openjdk version 21.x.x
```

> 💡 Sempre feche e reabra o terminal após alterar variáveis de ambiente.

---

## Passo 4 — Rodar o Projeto no Emulador

### 4.1 — Iniciar o Emulador

1. Abra o Android Studio
2. Vá em **More Actions → Virtual Device Manager**
3. Clique em ▶ ao lado do emulador (ex: Pixel 7)
4. Aguarde a tela inicial do Android carregar completamente

### 4.2 — Iniciar o Servidor Expo

```bash
cd apps/mobile
npx expo start
```

O terminal exibirá um menu interativo. Pressione **`a`** para abrir no emulador Android:

```
› Press a │ open Android
› Press r │ reload app
› Press ? │ show all commands
```

> ⏱️ Na primeira execução, o Expo compila o app nativo e instala no emulador. Isso pode levar de 3 a 5 minutos. As execuções seguintes são muito mais rápidas, portanto, seja paciente.

### 4.3 — Rodar o Backend

O mobile consome a mesma API do web. O backend precisa estar rodando na porta `5156`.

> 🔑 No emulador Android, o `localhost` da sua máquina é acessado via `http://10.0.2.2`. Essa configuração já está aplicada em `apps/mobile/src/services/authService.ts`.

---

## Estrutura do Projeto Mobile

```
apps/mobile/
├── android/              ← Código nativo gerado automaticamente
├── assets/               ← Imagens, ícones e splash screen
├── app/                  ← Rotas do Expo Router (baseadas em arquivo)
│   ├── _layout.tsx       ← Layout raiz (AuthProvider)
│   ├── index.tsx         ← Tela de Login (rota /)
│   └── aluno.tsx         ← Dashboard do Aluno (rota /aluno)
├── src/
│   ├── contexts/
│   │   └── AuthContext.tsx   ← Contexto de autenticação
│   ├── hooks/
│   │   └── useAuth.ts        ← Hook para acessar o AuthContext
│   └── services/
│       └── authService.ts    ← Chamadas à API de autenticação
├── app.json              ← Configuração do Expo
├── package.json          ← Dependências do mobile (isoladas)
└── tsconfig.json
```

### Roteamento com Expo Router

O Expo Router funciona como o Next.js — o nome do arquivo dentro de `app/` define a rota automaticamente, sem configuração adicional.

| Arquivo | Rota |
|---------|------|
| `app/index.tsx` | `/` → Tela de Login |
| `app/aluno.tsx` | `/aluno` → Dashboard do Aluno |
| `app/resetpassword.tsx` | `/resetpassword` → Redefinição de senha |

---

## Solução de Problemas

### `JAVA_HOME is not set`
A variável não está configurada ou o terminal não foi reiniciado.
- Verifique se `JAVA_HOME` está nas variáveis do usuário
- Feche completamente o terminal e abra um novo
- Confirme com: `echo $env:JAVA_HOME` (PowerShell) ou `echo %JAVA_HOME%` (CMD)

### `adb` não é reconhecido
O `platform-tools` não está no Path.
- Digite o caminho manualmente — não copie e cole
- Reinicie o terminal ou o computador se necessário

### `Cannot read property 'useState' of null`
Conflito de versão do React. O mobile precisa de seu próprio `node_modules`.
```bash
cd apps/mobile
npm install
npx expo start --clear
```

### `Unable to resolve module`
Dependência do expo-router faltando. Instale o pacote indicado no erro:
```bash
npx expo install <nome-do-pacote>
```

### Login retorna "Email ou senha inválidos"
Verifique se o backend está rodando e se o usuário possui `flag = 0` no banco. Usuários com `flag = 1` são redirecionados para a tela de redefinição de senha (primeiro acesso).

### Emulador não abre ao pressionar `a`
O emulador precisa estar completamente inicializado antes. Aguarde a tela inicial do Android carregar totalmente.

---

## Referência Rápida

| Comando | O que faz |
|---------|-----------|
| `npx expo start` | Inicia o servidor de desenvolvimento |
| `npx expo start --clear` | Inicia limpando o cache do Metro |
| `npx expo run:android` | Compila e instala o app no emulador |
| `npx expo install <pkg>` | Instala pacote compatível com a versão do Expo |
| `adb --version` | Verifica se o ADB está configurado |
| `java -version` | Verifica se o Java está configurado |
| `adb devices` | Lista emuladores e dispositivos conectados |
