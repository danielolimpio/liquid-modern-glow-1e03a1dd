// Prerender script for SEO optimization (static snapshots)
// Gera HTML completo por rota (sem depender de JS no crawler)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Prerenderer from "@prerenderer/prerenderer";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../dist");

// Rotas canônicas com barra final
const routes = [
  "/",
  "/sobre/",
  "/solucoes/",
  "/monitoramento-iot/",
  "/gestao-operacional/",
  "/gestao-financeira/",
  "/analytics-bi/",
  "/consultoria-esg/",
  "/impacto/",
  "/blog/",
  "/contato/",
  "/politica-privacidade/",
  "/politica-cookies/",
  "/termos-uso/",
];

function removeMetaKeywords(html) {
  // remove <meta name="keywords" ...>
  return html.replace(/\s*<meta\s+name=["']keywords["'][^>]*>\s*/gi, "\n");
}

function normalizeCanonicalTrailingSlash(html) {
  // garante canonicals com barra final (exceto raiz)
  return html.replace(
    /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']\s*\/>/gi,
    (m, href) => {
      try {
        const u = new URL(href);
        if (u.pathname !== "/" && !u.pathname.endsWith("/")) {
          u.pathname = `${u.pathname}/`;
        }
        return `<link rel="canonical" href="${u.toString()}" />`;
      } catch {
        return m;
      }
    }
  );
}

function postProcessHtml(html) {
  let out = html;
  out = removeMetaKeywords(out);
  out = normalizeCanonicalTrailingSlash(out);
  return out;
}

async function prerender() {
  console.log("🚀 Starting prerender (static snapshots)...");

  const baseHtmlPath = path.join(distPath, "index.html");
  if (!fs.existsSync(baseHtmlPath)) {
    console.error("❌ dist/index.html not found. Run build first.");
    process.exit(1);
  }

  const prerenderer = new Prerenderer({
    staticDir: distPath,
    routes,
    renderer: new PuppeteerRenderer({
      headless: true,
      // Espera o app sinalizar que terminou de renderizar
      renderAfterDocumentEvent: "prerender-ready",
      // Deixa o Chromium mais estável em CI/containers
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    }),
  });

  try {
    await prerenderer.initialize();
    const renderedRoutes = await prerenderer.renderRoutes(routes);

    // Pós-processamento: remove keywords e normaliza canonical
    for (const rr of renderedRoutes) {
      if (!rr || !rr.route || !rr.html) continue;

      const filePath = path.join(
        distPath,
        rr.route === "/" ? "index.html" : rr.route.replace(/^\//, ""),
        rr.route === "/" ? "" : "index.html"
      );

      // rr.route vem com barra final; isso cria dist/sobre/index.html etc.
      const target = rr.route === "/" ? path.join(distPath, "index.html") : filePath;
      const processed = postProcessHtml(rr.html);

      // garante pasta
      if (rr.route !== "/") {
        const dir = path.dirname(target);
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(target, processed, "utf-8");
      console.log(`✅ Snapshot: ${rr.route} -> ${path.relative(distPath, target)}`);
    }

    // Também limpa keywords no index.html base (caso algo escape)
    const rootHtml = fs.readFileSync(path.join(distPath, "index.html"), "utf-8");
    fs.writeFileSync(path.join(distPath, "index.html"), postProcessHtml(rootHtml), "utf-8");

    console.log("🎉 Prerender complete: HTML completo por rota gerado em /dist.");
  } catch (err) {
    console.error("❌ Prerender failed:", err);
    process.exit(1);
  } finally {
    try {
      await prerenderer.destroy();
    } catch {
      // ignore
    }
  }
}

prerender();
