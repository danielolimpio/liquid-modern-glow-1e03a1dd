import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Sinaliza para o prerender (Puppeteer) quando o HTML já está completo
setTimeout(() => {
  document.dispatchEvent(new Event("prerender-ready"));
}, 0);
