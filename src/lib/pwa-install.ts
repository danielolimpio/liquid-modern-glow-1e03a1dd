// PWA Install Trigger — usa APENAS interfaces nativas do navegador.
// - Android/Chrome/Desktop: captura `beforeinstallprompt` e dispara no
//   primeiro clique do usuário (respeitando exigência de gesto).
// - iOS Safari: não expõe API programática — o ícone de Compartilhar do
//   próprio Safari é a única via nativa para "Adicionar à Tela de Início".
// Sem modais ou UI customizada.

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt(): Promise<void>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
let promptShown = false;

function isPreviewOrDevHost(): boolean {
  if (typeof window === "undefined") return true;
  try {
    if (window.self !== window.top) return true;
  } catch {
    return true;
  }
  const h = window.location.hostname;
  if (h === "localhost" || h === "127.0.0.1") return true;
  if (h.startsWith("id-preview--") || h.startsWith("preview--")) return true;
  if (h === "lovableproject.com" || h.endsWith(".lovableproject.com")) return true;
  if (h === "lovableproject-dev.com" || h.endsWith(".lovableproject-dev.com")) return true;
  if (h === "beta.lovable.dev" || h.endsWith(".beta.lovable.dev")) return true;
  if (new URLSearchParams(window.location.search).get("sw") === "off") return true;
  return false;
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (isPreviewOrDevHost()) {
    // Garante que nada fique registrado em contextos de preview/dev.
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        regs
          .filter((r) => {
            const url = r.active?.scriptURL || r.installing?.scriptURL || r.waiting?.scriptURL || "";
            return url.endsWith("/sw.js");
          })
          .map((r) => r.unregister()),
      );
    } catch {}
    return;
  }
  try {
    await navigator.serviceWorker.register("/sw.js", { scope: "/" });
  } catch {
    // Falhas silenciosas — o app continua funcionando sem SW.
  }
}

export function setupPwaInstall() {
  if (typeof window === "undefined") return;

  // Registra SW mínimo para reforçar critério de installability do Chrome.
  if (document.readyState === "complete") {
    registerServiceWorker();
  } else {
    window.addEventListener("load", () => registerServiceWorker(), { once: true });
  }

  // Captura o evento nativo antes que o navegador o consuma.
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  });

  // Limpa após instalação concluída.
  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    promptShown = true;
    try {
      localStorage.setItem("pwa-installed", "1");
    } catch {}
  });

  const triggerInstall = async () => {
    if (promptShown || !deferredPrompt) return;
    promptShown = true;
    try {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
    } catch {
      // Usuário pode reabrir o ícone na barra de endereço a qualquer momento.
    } finally {
      deferredPrompt = null;
    }
  };

  // Dispara no primeiro clique/toque em qualquer lugar do site.
  const onFirstInteraction = () => {
    triggerInstall();
  };

  window.addEventListener("click", onFirstInteraction, { once: false, capture: true });
  window.addEventListener("touchend", onFirstInteraction, { once: false, capture: true });
}
