
## Contexto importante antes de decidir

O site **já opera como SSG na prática**: `scripts/prerender.js` gera `dist/<rota>/index.html` com HTML completo (title, description, canonical, OG, JSON-LD, headings) para cada uma das 20 rotas, servido via `.htaccess` na Hostinger. Crawlers já recebem HTML pronto — não é SPA "cega" para o Google.

**Migrar para Next.js / Astro / TanStack Start SSR** significaria:
- Reescrever roteamento, `main.tsx`, todas as páginas
- Refazer integração com `react-helmet-async`, providers, QueryClient
- Alto risco de regressão visual em 20 páginas
- Perder o pipeline de deploy FTP → Hostinger que já funciona

**Recomendação:** manter a stack atual (Vite + prerender) e fazer correções cirúrgicas. Se você quiser mesmo trocar para Next/Astro, me diga — é outro projeto de escopo, ~1 semana de trabalho, e precisa aprovação explícita.

---

## O que vou fazer (plano cirúrgico)

### 1. Diagnóstico real (não "achismo")
- Rodar `npm run build` + `node scripts/prerender.js` e inspecionar HTML gerado de cada rota (title/description/canonical/OG/H1 únicos, JSON-LD válido).
- Verificar sitemap × rotas × prerender (sincronizados).
- Checar todas as `<img>` do projeto: `alt`, `width`/`height`, `loading="lazy"`, `decoding="async"`.
- Auditar Core Web Vitals prováveis: fontes, imagens LCP, chunks JS.
- Rodar Playwright headless em `localhost:8080` capturando console errors e screenshot de cada rota principal — comparar antes/depois.

### 2. Correções de indexação (GSC)
- Garantir `<link rel="canonical">` com trailing slash em 100% das páginas prerendered.
- Verificar que cada `dist/<rota>/index.html` tem `<title>` e `<meta description>` únicos (não o fallback do `index.html` raiz).
- Adicionar `<meta name="robots" content="index,follow">` explícito no HTML estático.
- `sitemap.xml`: atualizar `lastmod` para data atual, validar XML.
- `robots.txt`: já está bom — só validar.

### 3. Imagens (Core Web Vitals + acessibilidade)
- Auditar `src/assets/*.jpg` e uso: adicionar `width`, `height`, `loading="lazy"` (exceto LCP), `decoding="async"`, `alt` descritivo onde faltar.
- Imagem LCP do Hero: `fetchpriority="high"`, sem lazy.
- **Não** vou converter para WebP/AVIF via build (exigiria `vite-imagetools` + reprocessar todos os assets — risco). Se quiser, listo como próximo passo separado.

### 4. Performance
- Verificar `vite.config.ts`: já tem build padrão do Vite (minify + gzip via `.htaccess`).
- Adicionar `<link rel="preconnect">` para Google Fonts / GTM no `index.html`.
- Preload da fonte principal se houver FOUT.

### 5. Schema markup
- Validar JSON-LD existente (Organization, WebSite, FAQPage, Article, BreadcrumbList) — corrigir campos faltantes.
- Adicionar `LocalBusiness` no `index.html` (endereço João Pessoa/PB da memória).

### 6. Validação zero-regressão
- Screenshot Playwright de `/`, `/sobre/`, `/solucoes/`, `/blog/`, `/economia-de-agua/` **antes** das mudanças.
- Aplicar mudanças.
- Screenshot **depois** e comparar — se qualquer pixel visual quebrar, reverto aquela mudança.

### 7. Relatório final
- Lista de arquivos alterados
- Antes/depois: contagem de erros, tamanho de bundle, imagens sem alt, canonicals incorretos
- Checklist do que o usuário deve fazer no GSC (revalidar, resubmeter sitemap)

---

## O que NÃO vou fazer (e por quê)

| Pedido | Por que não |
|---|---|
| Migrar para SSR/Next.js | Reescrita completa; alto risco de quebrar layout de 20 páginas. Precisa aprovação explícita como projeto separado. |
| Converter imagens para WebP/AVIF automaticamente | Precisa `vite-imagetools` + reprocessar `src/assets/*`; separo como etapa 2 se você aprovar. |
| CDN dedicado | Site está na Hostinger; CDN externo (Cloudflare) é config de infra fora do código. Posso escrever guia. |

---

## Arquivos que provavelmente vão mudar
- `public/sitemap.xml` (lastmod)
- `index.html` (preconnects, LocalBusiness JSON-LD)
- `scripts/prerender.js` (garantir meta robots + fixes por rota)
- `src/components/Hero.tsx` e componentes com `<img>` (dims + lazy + fetchpriority)
- `src/pages/*.tsx` pontuais para canonicals/schema faltantes

Confirma que quer que eu prossiga por este caminho cirúrgico (mantendo Vite + prerender)? Ou você quer mesmo a migração completa para SSR/SSG framework (Next/Astro), aceitando o risco de regressão visual e retrabalho?
