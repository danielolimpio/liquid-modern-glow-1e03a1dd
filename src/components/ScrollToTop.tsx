import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantâneo para o topo - sem animação
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
