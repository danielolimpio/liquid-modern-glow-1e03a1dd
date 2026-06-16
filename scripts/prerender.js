// Prerender script for SEO optimization
// This script generates static HTML files for each route after build

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

// All routes to prerender
const routes = [
  '/',
  '/sobre',
  '/solucoes',
  '/impacto',
  '/contato',
  '/blog',
  '/gestao-operacional',
  '/monitoramento-iot',
  '/analytics-bi',
  '/consultoria-esg',
  '/gestao-financeira',
  '/politica-privacidade',
  '/termos-uso',
  '/politica-cookies',
  '/economia-de-agua',
  '/desperdicio-de-agua-empresas',
  '/como-economizar-agua-empresa',
  '/pegada-hidrica-empresarial'
];

// SEO metadata for each route
const seoData = {
  '/': {
    title: 'AcquaFlux | Gestão Hídrica e Economia de Água para Empresas',
    description: 'Reduza até 70% na conta de água da sua empresa. Gestão hídrica completa: auditoria de fatura, monitoramento IoT, BI, ESG e combate ao desperdício de água. Diagnóstico gratuito.',
    keywords: 'gestão hídrica, economia de água, economia de água para empresas, como economizar água, como reduzir a conta de água, desperdício de água nas empresas, dicas para economizar água, conta de água alta, reuso de água, pegada hídrica, water footprint, sustentabilidade empresarial, monitoramento IoT água, consultoria ESG, eficiência hídrica, sistema SEA, TDRR, individualização de hidrômetros, GCI, segurança hídrica, uso racional da água',
    h1: 'Gestão Hídrica para Empresas: Economize Água e Reduza Custos',
    h2: ['Nossas Soluções de Gestão Hídrica', 'Impacto e Economia de Água Comprovados', 'Sobre a AcquaFlux']
  },
  '/sobre': {
    title: 'Sobre a AcquaFlux | Pioneira em Gestão Hídrica Sustentável',
    description: 'Conheça a AcquaFlux, empresa brasileira com mais de 10 anos de experiência em soluções sustentáveis para gestão de recursos hídricos. Presença em 15 estados.',
    keywords: 'sobre AcquaFlux, história AcquaFlux, empresa gestão hídrica, pioneira sustentabilidade água',
    h1: 'Quem Somos',
    h2: ['Nossa História', 'Missão e Valores', 'Nossa Equipe']
  },
  '/solucoes': {
    title: 'Soluções AcquaFlux | SEA, IoT, BI, ESG e RCI-A',
    description: 'Conheça as soluções AcquaFlux: Sistema SEA, monitoramento IoT, Analytics BI, consultoria ESG e RCI-A — restituição de créditos de água. Economia de até 70% no consumo e recuperação de valores pagos indevidamente.',
    keywords: 'sistema SEA, soluções gestão água, monitoramento IoT hídrico, economia água empresas, TDRR monitoramento, RCI-A, recuperação de créditos de água, restituição conta de água, auditoria fatura água',
    h1: 'Nossas Soluções',
    h2: ['Sistema SEA', 'Monitoramento TDRR', 'GCI Individualização', 'RCI-A Restituição de Créditos']
  },
  '/impacto': {
    title: 'Impacto Ambiental | Resultados da Gestão Hídrica AcquaFlux',
    description: 'Veja o impacto real das soluções AcquaFlux: mais de 2 milhões de litros economizados, 500+ clientes satisfeitos e redução de 70% no consumo.',
    keywords: 'impacto ambiental água, resultados gestão hídrica, economia água empresas, sustentabilidade hídrica',
    h1: 'Nosso Impacto',
    h2: ['Resultados Comprovados', 'Cases de Sucesso', 'Impacto Ambiental']
  },
  '/contato': {
    title: 'Contato | Fale com Especialistas em Gestão Hídrica',
    description: 'Entre em contato com a AcquaFlux. Solicite diagnóstico gratuito do consumo hídrico da sua empresa. Atendimento em até 24 horas.',
    keywords: 'contato AcquaFlux, fale conosco gestão hídrica, diagnóstico gratuito água, orçamento economia água',
    h1: 'Entre em Contato',
    h2: ['Envie sua Mensagem', 'Informações de Contato', 'Nossa Localização']
  },
  '/blog': {
    title: 'Blog | Artigos sobre Gestão Hídrica e Sustentabilidade',
    description: 'Artigos, notícias e dicas sobre gestão hídrica empresarial, sustentabilidade, economia de água e tecnologias IoT para o setor hídrico.',
    keywords: 'blog gestão hídrica, artigos economia água, notícias sustentabilidade, dicas consumo água',
    h1: 'Blog AcquaFlux',
    h2: ['Artigos Recentes', 'Categorias', 'Destaques']
  },
  '/gestao-operacional': {
    title: 'Gestão Operacional de Água | Controle e Otimização Hídrica',
    description: 'Sistema de gestão operacional para controle total do consumo de água. Otimize processos, reduza desperdícios e aumente a eficiência hídrica.',
    keywords: 'gestão operacional água, controle consumo hídrico, otimização processos água, eficiência operacional hídrica',
    h1: 'Gestão Operacional',
    h2: ['Como Funciona', 'Benefícios', 'Resultados']
  },
  '/monitoramento-iot': {
    title: 'Monitoramento IoT | Sensores Inteligentes para Água',
    description: 'Sistema de monitoramento IoT com sensores inteligentes para gestão hídrica em tempo real. Detecte vazamentos e otimize o consumo de água.',
    keywords: 'monitoramento IoT água, sensores inteligentes hídricos, telemetria água, monitoramento remoto consumo',
    h1: 'Monitoramento IoT',
    h2: ['Tecnologia TDRR', 'Sensores Inteligentes', 'Dashboard em Tempo Real']
  },
  '/analytics-bi': {
    title: 'Analytics e BI | Inteligência de Dados para Gestão Hídrica',
    description: 'Dashboards e relatórios analíticos para gestão hídrica. Tome decisões baseadas em dados e otimize o consumo de água da sua empresa.',
    keywords: 'analytics água, business intelligence hídrico, dashboards consumo água, relatórios gestão hídrica',
    h1: 'Analytics e BI',
    h2: ['Dashboards Inteligentes', 'Relatórios Personalizados', 'Insights de Dados']
  },
  '/consultoria-esg': {
    title: 'Consultoria ESG | Sustentabilidade e Compliance Hídrico',
    description: 'Consultoria especializada em ESG para gestão hídrica. Adeque sua empresa às normas ambientais e alcance metas de sustentabilidade.',
    keywords: 'consultoria ESG água, sustentabilidade empresarial, compliance ambiental hídrico, metas ODS água',
    h1: 'Consultoria ESG',
    h2: ['Adequação Ambiental', 'Certificações', 'Relatórios ESG']
  },
  '/gestao-financeira': {
    title: 'Gestão Financeira Hídrica | Economia e Controle de Custos',
    description: 'Gestão financeira especializada em recursos hídricos. Controle custos, otimize investimentos e comprove ROI em projetos de água.',
    keywords: 'gestão financeira água, economia custos hídricos, ROI projetos água, controle financeiro consumo',
    h1: 'Gestão Financeira',
    h2: ['Controle de Custos', 'Análise de ROI', 'Projeções Financeiras']
  },
  '/politica-privacidade': {
    title: 'Política de Privacidade | AcquaFlux',
    description: 'Política de privacidade da AcquaFlux. Saiba como coletamos, usamos e protegemos seus dados pessoais.',
    keywords: 'política privacidade, proteção dados, LGPD, privacidade AcquaFlux',
    h1: 'Política de Privacidade',
    h2: ['Coleta de Dados', 'Uso das Informações', 'Seus Direitos']
  },
  '/termos-uso': {
    title: 'Termos de Uso | AcquaFlux',
    description: 'Termos e condições de uso do site e serviços da AcquaFlux. Leia antes de utilizar nossos serviços.',
    keywords: 'termos uso, condições serviço, termos AcquaFlux',
    h1: 'Termos de Uso',
    h2: ['Condições Gerais', 'Responsabilidades', 'Limitações']
  },
  '/politica-cookies': {
    title: 'Política de Cookies | AcquaFlux',
    description: 'Política de cookies da AcquaFlux. Entenda como utilizamos cookies para melhorar sua experiência.',
    keywords: 'política cookies, uso cookies, cookies AcquaFlux',
    h1: 'Política de Cookies',
    h2: ['Tipos de Cookies', 'Como Usamos', 'Gerenciamento']
  },
  '/economia-de-agua': {
    title: 'Economia de Água para Empresas: Reduza até 70% | AcquaFlux',
    description: 'Como reduzir a conta de água da empresa? Guia completo com auditoria, IoT, BI e ESG. Estratégias validadas para economia de até 70%. Diagnóstico gratuito.',
    keywords: 'economia de água, economia de água para empresas, como reduzir a conta de água, reduzir conta de água empresa, conta de água alta empresa, gestão hídrica empresarial, auditoria de fatura de água, desperdício de água nas empresas, vazamento água empresa, monitoramento IoT água, pegada hídrica, ROI economia de água, sustentabilidade hídrica, sistema SEA, TDRR',
    h1: 'Economia de Água para Empresas: guia completo de gestão hídrica',
    h2: ['O que é economia de água empresarial', 'Como reduzir a conta de água', 'Desperdício de água nas empresas', 'Auditoria de fatura de água', 'Monitoramento IoT e gestão em tempo real', 'Analytics e BI para gestão hídrica', 'ESG, compliance e pegada hídrica', 'ROI e indicadores de eficiência', 'Perguntas frequentes']
  },
  '/desperdicio-de-agua-empresas': {
    title: 'Desperdício de Água nas Empresas: causas e como evitar | AcquaFlux',
    description: 'Como evitar o desperdício de água em empresas? Veja onde estão os vazamentos invisíveis, o impacto na fatura e estratégias práticas para eliminar até 40% das perdas hídricas.',
    keywords: 'desperdício de água, desperdício de água nas empresas, como evitar o desperdício de água, vazamento de água empresa, perdas hídricas, vazamento invisível, conscientização sobre o uso da água, uso racional da água, gestão hídrica empresarial',
    h1: 'Desperdício de água nas empresas: causas, impactos e como evitar',
    h2: ['O que é desperdício de água empresarial', 'Onde está o ralo invisível', 'Como evitar o desperdício de água', 'Impacto financeiro do desperdício', 'Perguntas frequentes']
  },
  '/como-economizar-agua-empresa': {
    title: 'Como Economizar Água na Empresa: 8 Estratégias | AcquaFlux',
    description: 'Como economizar água na empresa? 8 estratégias comprovadas para reduzir a conta entre 30% e 70%: auditoria, IoT, individualização, reuso e ESG. Diagnóstico gratuito.',
    keywords: 'como economizar água, como economizar água na empresa, dicas para economizar água, economizar água, como diminuir a conta de água, conta de água alta, economia de água, uso racional da água, reuso de água, conscientização sobre o uso da água',
    h1: 'Como economizar água na empresa: 8 estratégias para diminuir a conta de água',
    h2: ['8 dicas para economizar água em empresas', 'Como diminuir a conta de água sem CAPEX', 'Conscientização e uso racional da água', 'Perguntas frequentes']
  },
  '/pegada-hidrica-empresarial': {
    title: 'Pegada Hídrica Empresarial: cálculo, ESG e relatórios | AcquaFlux',
    description: 'O que é pegada hídrica? Como calcular o water footprint da sua empresa (ISO 14046) e reportar em ESG, GRI 303, CDP Water e ODS 6. Guia completo AcquaFlux.',
    keywords: 'pegada hídrica, water footprint, pegada hídrica empresarial, ISO 14046, GRI 303, CDP Water, ODS 6, sustentabilidade hídrica, ESG água, segurança hídrica, escassez hídrica, água virtual',
    h1: 'Pegada hídrica empresarial: o que é, como calcular e reportar',
    h2: ['O que é pegada hídrica', 'Como calcular a pegada hídrica de uma empresa', 'Pegada hídrica e ESG: frameworks e relatórios', 'Segurança hídrica e escassez', 'Perguntas frequentes']
  }
};

// Function to create route-specific HTML
function createRouteHtml(route, baseHtml) {
  const seo = seoData[route] || seoData['/'];

  // Padrão canônico com barra final (exceto raiz já é "/")
  const canonicalUrl = `https://acquaflux.com${route === '/' ? '/' : `${route.replace(/\/+$/, '')}/`}`;

  let html = baseHtml;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${seo.title}</title>`
  );

  // Replace meta title
  html = html.replace(
    /<meta name="title" content=".*?".*?\/>/,
    `<meta name="title" content="${seo.title}" />`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?".*?\/>/,
    `<meta name="description" content="${seo.description}" />`
  );

  // Replace meta keywords
  html = html.replace(
    /<meta name="keywords" content=".*?".*?\/>/,
    `<meta name="keywords" content="${seo.keywords}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href=".*?".*?\/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace OG URL
  html = html.replace(
    /<meta property="og:url" content=".*?".*?\/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace OG title
  html = html.replace(
    /<meta property="og:title" content=".*?".*?\/>/,
    `<meta property="og:title" content="${seo.title}" />`
  );

  // Replace OG description
  html = html.replace(
    /<meta property="og:description" content=".*?".*?\/>/,
    `<meta property="og:description" content="${seo.description}" />`
  );

  // Replace Twitter URL
  html = html.replace(
    /<meta name="twitter:url" content=".*?".*?\/>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );

  // Replace Twitter title
  html = html.replace(
    /<meta name="twitter:title" content=".*?".*?\/>/,
    `<meta name="twitter:title" content="${seo.title}" />`
  );

  // Replace Twitter description
  html = html.replace(
    /<meta name="twitter:description" content=".*?".*?\/>/,
    `<meta name="twitter:description" content="${seo.description}" />`
  );

  // Replace noscript placeholders (evita H1/H2 repetidos no Screaming Frog)
  html = html.replaceAll('__PRERENDER_H1__', seo.h1);

  const h2List = Array.isArray(seo.h2) ? seo.h2 : [];
  html = html.replaceAll('__PRERENDER_H2_1__', h2List[0] || seoData['/'].h2[0]);
  html = html.replaceAll('__PRERENDER_H2_2__', h2List[1] || seoData['/'].h2[1]);
  html = html.replaceAll('__PRERENDER_H2_3__', h2List[2] || seoData['/'].h2[2]);
  html = html.replaceAll('__PRERENDER_H2_4__', h2List[3] || 'Entre em Contato');

  return html;
}

// Main function
async function prerender() {
  console.log('🚀 Starting prerender process...');
  
  // Read the base HTML
  const baseHtmlPath = path.join(distPath, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('❌ dist/index.html not found. Run build first.');
    process.exit(1);
  }
  
  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');
  
  // Create route directories and HTML files
  for (const route of routes) {
    if (route === '/') continue; // Skip root, already has index.html
    
    const routeDir = route.replace(/^\/+/, "");
    const routePath = path.join(distPath, routeDir);
    const htmlPath = path.join(routePath, 'index.html');
    
    // Create directory if not exists
    if (!fs.existsSync(routePath)) {
      fs.mkdirSync(routePath, { recursive: true });
    }
    
    // Generate route-specific HTML
    const routeHtml = createRouteHtml(route, baseHtml);
    
    // Write the HTML file
    fs.writeFileSync(htmlPath, routeHtml);
    console.log(`✅ Created: ${route}/index.html`);
  }
  
  // Update root index.html with home page SEO
  const homeHtml = createRouteHtml('/', baseHtml);
  fs.writeFileSync(baseHtmlPath, homeHtml);
  console.log('✅ Updated: /index.html');
  
  console.log('🎉 Prerender complete! All routes have static HTML.');
}

prerender().catch(console.error);