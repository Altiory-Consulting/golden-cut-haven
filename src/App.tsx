import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/animations/PageTransition";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Sedi from "./pages/Sedi";
import Listini from "./pages/Listini";
import HairSpa from "./pages/HairSpa";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/sedi" element={<Sedi />} />
              <Route path="/listini" element={<Listini />} />
              <Route path="/hair-spa" element={<HairSpa />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookie" element={<Cookie />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
