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
  '/economia-de-agua'
];

// SEO metadata for each route
const seoData = {
  '/': {
    title: 'AcquaFlux - Gestão Hídrica Inteligente | Economia de Água para Empresas',
    description: 'Soluções completas de gestão hídrica para empresas. Reduza até 70% no consumo de água com tecnologia IoT, monitoramento em tempo real e consultoria ESG especializada.',
    keywords: 'gestão hídrica empresarial, economia de água empresas, sistema SEA, monitoramento IoT água, consultoria ESG hídrica',
    h1: 'Gestão Hídrica para Empresas: Reduza Custos e Aumente sua Eficiência',
    h2: ['Nossas Soluções', 'Impacto AcquaFlux', 'Sobre a AcquaFlux']
  },
  '/sobre': {
    title: 'Sobre a AcquaFlux | Pioneira em Gestão Hídrica Sustentável',
    description: 'Conheça a AcquaFlux, empresa brasileira com mais de 10 anos de experiência em soluções sustentáveis para gestão de recursos hídricos. Presença em 15 estados.',
    keywords: 'sobre AcquaFlux, história AcquaFlux, empresa gestão hídrica, pioneira sustentabilidade água',
    h1: 'Quem Somos',
    h2: ['Nossa História', 'Missão e Valores', 'Nossa Equipe']
  },
  '/solucoes': {
    title: 'Soluções de Gestão Hídrica | Sistema SEA e IoT',
    description: 'Conheça as soluções AcquaFlux: Sistema SEA, monitoramento IoT, Analytics BI e consultoria ESG. Economia de até 70% no consumo de água.',
    keywords: 'sistema SEA, soluções gestão água, monitoramento IoT hídrico, economia água empresas, TDRR monitoramento',
    h1: 'Nossas Soluções',
    h2: ['Sistema SEA', 'Monitoramento TDRR', 'GCI Individualização']
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