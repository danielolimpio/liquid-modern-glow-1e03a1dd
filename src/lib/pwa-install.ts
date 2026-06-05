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

export function setupPwaInstall() {
  if (typeof window === "undefined") return;

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
