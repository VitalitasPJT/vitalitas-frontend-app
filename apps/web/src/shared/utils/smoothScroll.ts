/**
 * Scroll suave até uma seção pelo id, com velocidade controlada por
 * código (em vez de `scroll-behavior: smooth` do CSS, cuja velocidade
 * varia de navegador pra navegador e não dá pra ajustar).
 */

// h-20 (80px) do Header sticky + respiro, pra a seção não ficar escondida
// atrás do header fixo ao chegar no destino.
const HEADER_OFFSET = 88;

// Duração do scroll em ms — mexa aqui pra ajustar a "velocidade" em todo o site.
const DEFAULT_DURATION = 700;

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function smoothScrollTo(id: string, duration: number = DEFAULT_DURATION) {
  const element = document.getElementById(id);
  if (!element) return;

  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + startY - HEADER_OFFSET;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

/**
 * Handler pronto pra usar em `<a href="#id" onClick={handleAnchorClick}>`.
 * Extrai o id do próprio href, cancela o pulo nativo do navegador e
 * chama o scroll suave no lugar.
 */
export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#") || href.length < 2) return;
  e.preventDefault();
  smoothScrollTo(href.slice(1));
}
