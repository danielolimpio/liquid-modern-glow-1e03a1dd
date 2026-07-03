import logoImage from "@/assets/logo.png";

const Logo = () => {
  return (
    <img 
      src={logoImage} 
      alt="AcquaFlux — Gestão Hídrica Inteligente"
      width={200}
      height={56}
      loading="eager"
      decoding="async"
      className="h-14 w-auto"
    />
  );
};

export default Logo;
