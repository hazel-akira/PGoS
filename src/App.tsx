import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import VisitUsPage from "./pages/VisitUs";
import Admissions from "./pages/Admissions.tsx";
import ContactPage from "./pages/ContactPage";
import JoinUsPage from "./pages/JoinUsPage";
import EnrollmentProcess from "./components/Enrollment.tsx";
import Academics from "./pages/Academics";
import Navigation2 from "./components/Navigation2";
import ChatIcon from "./components/ChatIcon";



const queryClient = new QueryClient();


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation2 setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/visit-us" element={<VisitUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/join" element={<JoinUsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatIcon isMenuOpen={isMenuOpen} />
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
