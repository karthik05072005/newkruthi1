import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BabyShoot from "./pages/BabyShoot";
import CandidWedding from "./pages/CandidWedding";
import Engagement from "./pages/Engagement";
import Maternity from "./pages/Maternity";
import PreWedding from "./pages/PreWedding";
import Portraits from "./pages/Portraits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/baby-shoot" element={<BabyShoot />} />
          <Route path="/candid-wedding" element={<CandidWedding />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/maternity" element={<Maternity />} />
          <Route path="/pre-wedding" element={<PreWedding />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;