import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageLoader } from "@/components/ui/LoadingSpinner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/animations/PageTransition";

const Index = lazy(() => import("./pages/Index"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const Sedi = lazy(() => import("./pages/Sedi"));
const Listini = lazy(() => import("./pages/Listini"));
const HairSpa = lazy(() => import("./pages/HairSpa"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Cookie = lazy(() => import("./pages/Cookie"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

