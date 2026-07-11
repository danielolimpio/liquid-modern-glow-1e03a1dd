import { ImgHTMLAttributes } from "react";

type PictureSource = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

interface PictureProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> {
  image: PictureSource | string;
  alt: string;
  fetchPriority?: "high" | "low" | "auto";
}

/**
 * <picture> wrapper que serve AVIF → WebP → JPG.
 * Aceita objetos gerados pelo vite-imagetools (`?picture`) ou uma string simples.
 */
const Picture = ({ image, alt, className, width, height, ...rest }: PictureProps) => {
  if (typeof image === "string") {
    return <img src={image} alt={alt} className={className} width={width} height={height} {...rest} />;
  }
  const { sources, img } = image;
  return (
    <picture>
      {Object.entries(sources).map(([type, srcSet]) => (
        <source key={type} type={`image/${type === "jpg" ? "jpeg" : type}`} srcSet={srcSet} />
      ))}
      <img
        src={img.src}
        width={width ?? img.w}
        height={height ?? img.h}
        alt={alt}
        className={className}
        {...rest}
      />
    </picture>
  );
};

export default Picture;
