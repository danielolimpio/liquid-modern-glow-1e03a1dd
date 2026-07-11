/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

declare module "*.jpg?picture" {
  const value: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default value;
}
declare module "*.png?picture" {
  const value: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default value;
}
