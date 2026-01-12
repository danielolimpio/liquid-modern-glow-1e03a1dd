import { Droplets } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="icon-aqua w-10 h-10 rounded-xl">
        <Droplets className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="font-heading font-bold text-xl gradient-text">
        AcquaFlux
      </span>
    </div>
  );
};

export default Logo;
