import SoundAmbiances from "./components/SoundAmbiances";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// REMPLACE BrowserRouter PAR HashRouter LIGNE CI-DESSOUS
import { HashRouter, Routes, Route } from "react-router-dom"; 
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VideoSession from "./pages/VideoSession";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* REMPLACE BrowserRouter PAR HashRouter LIGNE CI-DESSOUS */}
      <HashRouter> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/VideoSession" element={<VideoSession />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
