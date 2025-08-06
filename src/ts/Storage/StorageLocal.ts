const CHAVE_LOCAL = "TEAM_VGC";

export function getStorage(): string | null {
  return localStorage.getItem(CHAVE_LOCAL);
}

export function setStorage(value : string): void {
  localStorage.setItem(CHAVE_LOCAL, value);
}

export function clearStorage(): void {
  localStorage.removeItem(CHAVE_LOCAL);
}