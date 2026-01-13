import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Solucoes from "./pages/Solucoes";
import Impacto from "./pages/Impacto";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import GestaoOperacional from "./pages/GestaoOperacional";
import AnalyticsBI from "./pages/AnalyticsBI";
import ConsultoriaESG from "./pages/ConsultoriaESG";
import GestaoFinanceira from "./pages/GestaoFinanceira";
import MonitoramentoIoT from "./pages/MonitoramentoIoT";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/impacto" element={<Impacto />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gestao-operacional" element={<GestaoOperacional />} />
          <Route path="/analytics-bi" element={<AnalyticsBI />} />
          <Route path="/consultoria-esg" element={<ConsultoriaESG />} />
          <Route path="/gestao-financeira" element={<GestaoFinanceira />} />
          <Route path="/monitoramento-iot" element={<MonitoramentoIoT />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
