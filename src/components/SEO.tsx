import { Helmet } from "react-helmet-async";

type PictureImport = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
  structuredData?: object;
  keywords?: string;
  /** Imagem LCP a ser pré-carregada (aceita objeto do vite-imagetools ou URL). */
  preloadImage?: PictureImport | string;
}


const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  image = "/favicon.png",
  noindex = false,
  structuredData,
  keywords,
  preloadImage,
}: SEOProps) => {
  const siteUrl = "https://acquaflux.com";
  const fullTitle = title.includes("AcquaFlux") ? title : `${title} | AcquaFlux`;

  // Determina a melhor variante para preload (AVIF > WebP > src)
  const preload =
    typeof preloadImage === "string"
      ? { href: preloadImage, type: undefined as string | undefined, srcset: undefined as string | undefined }
      : preloadImage
        ? (() => {
            const s = preloadImage.sources;
            if (s.avif) return { href: preloadImage.img.src, type: "image/avif", srcset: s.avif };
            if (s.webp) return { href: preloadImage.img.src, type: "image/webp", srcset: s.webp };
            return { href: preloadImage.img.src, type: undefined, srcset: undefined };
          })()
        : null;


  const normalizeCanonical = (p: string) => {
    // garante formato /rota/ (exceto raiz)
    const path = p.startsWith("/") ? p : `/${p}`;
    if (path === "/") return "/";
    // evita quebrar URLs com query/hash e arquivos (ex: /arquivo.pdf)
    const [base, rest] = path.split(/(?=[?#])/);
    if (base.includes(".")) return path;
    return `${base.replace(/\/+$/, "")}/` + (rest || "");
  };

  const canonicalUrl = canonical ? `${siteUrl}${normalizeCanonical(canonical)}` : undefined;
  
  const defaultKeywords = "gestão hídrica, economia de água, sustentabilidade empresarial, monitoramento IoT, consultoria ESG, eficiência hídrica, sistema SEA, água para empresas";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      {!noindex && <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />}
      
      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* LCP image preload */}
      {preload && (
        <link
          rel="preload"
          as="image"
          href={preload.href}
          {...(preload.srcset ? { imagesrcset: preload.srcset } : {})}
          {...(preload.type ? { imagetype: preload.type } : {})}
          fetchpriority="high"
        />
      )}


      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="AcquaFlux" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:site" content="@AcquaFlux" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
