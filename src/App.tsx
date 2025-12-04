import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FloatingHearts from "./components/FloatingHearts";
import IntroPage from "./pages/IntroPage";
import TimelinePage from "./pages/TimelinePage";
import TheBeginningPage from "./pages/TheBeginningPage";
import FirstMoviePage from "./pages/FirstMoviePage";
import BestDayPage from "./pages/BestDayPage";
import SecondMoviePage from "./pages/SecondMoviePage";
import SecretMessagesPage from "./pages/SecretMessagesPage";
import PickupLinesPage from "./pages/PickupLinesPage";
import LoveLetterPage from "./pages/LoveLetterPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingHearts />
        <Navigation />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/the-beginning" element={<TheBeginningPage />} />
          <Route path="/first-movie" element={<FirstMoviePage />} />
          <Route path="/best-day" element={<BestDayPage />} />
          <Route path="/second-movie" element={<SecondMoviePage />} />
          <Route path="/secrets" element={<SecretMessagesPage />} />
          <Route path="/pickup-lines" element={<PickupLinesPage />} />
          <Route path="/love-letter" element={<LoveLetterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;