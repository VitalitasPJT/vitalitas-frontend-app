type StorageMode = "local" | "session";

// A própria flag de modo sempre fica em localStorage (não guarda nenhum
// dado sensível, só "local" ou "session") — precisa sobreviver mesmo
// quando o modo escolhido é "session", pra que um novo carregamento do app
// saiba em qual storage procurar os tokens.
const STORAGE_MODE_KEY = "authStorageMode";

function getActiveStorage(): Storage {
  const mode = (localStorage.getItem(STORAGE_MODE_KEY) as StorageMode | null) ?? "local";
  return mode === "session" ? sessionStorage : localStorage;
}

/**
 * Ponto único de decisão entre localStorage (sobrevive ao fechar o
 * navegador — "lembrar-me" marcado) e sessionStorage (apaga ao fechar a
 * aba — "lembrar-me" desmarcado). Usado por authService.tsx, AuthContext.tsx
 * e apiURL.tsx, que antes desta extração cada um teria que reimplementar
 * essa escolha (ou, como estava até agora, nenhum dos três respeitava o
 * checkbox — sempre gravavam direto em localStorage).
 */
export function setAuthStorageMode(rememberMe: boolean) {
  localStorage.setItem(STORAGE_MODE_KEY, rememberMe ? "local" : "session");
}

export function getAuthItem(key: string): string | null {
  return getActiveStorage().getItem(key);
}

export function setAuthItem(key: string, value: string) {
  getActiveStorage().setItem(key, value);
}

/**
 * Limpa dos dois storages (não só do ativo) — evita resíduo se o modo
 * escolhido mudar entre um login e outro (ex.: logou marcando "lembrar-me",
 * depois logou de novo sem marcar; sem isso, o token antigo em localStorage
 * ficaria esquecido lá).
 */
export function clearAuthItems(keys: string[]) {
  keys.forEach((key) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  });
  localStorage.removeItem(STORAGE_MODE_KEY);
}
