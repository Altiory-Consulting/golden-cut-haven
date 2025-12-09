import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Sedi from "./pages/Sedi";
import Listini from "./pages/Listini";
import HairSpa from "./pages/HairSpa";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/sedi" element={<Sedi />} />
            <Route path="/listini" element={<Listini />} />
            <Route path="/hair-spa" element={<HairSpa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
