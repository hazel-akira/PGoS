import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuProvider } from "./components/MenuContext.tsx";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

import ScrollToTop from "./components/ScrollToTop.tsx";
import NotFound from "./pages/NotFound";
import ChatIcon from "./components/ChatIcon";
import Navigation2 from "./components/Navigation2";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import VisitUsPage from "./pages/VisitUs";
import ProspectusPage from "./pages/ProspectusPage";

import About from "./pages/About";
import MissionVission from "./components/MissionVission.tsx";
import History from "./components/History.tsx";
import Leadership from "./components/Leadership.tsx";
import WhyChoosePioneer from "./components/WhyChoosePioneer.tsx";

import Index from "./pages/Index";
import AboutSection from "./components/AboutSection.tsx";
import AtGlanceSection from "./components/AtGlanceSection.tsx"
import StudentsLifeSection from "./components/StudentsLifeSection.tsx";
import TestimonialCarousel from "./components/TestimonialCarousel.tsx";
import SchoolsSection from "./components/SchoolsSection.tsx"; 

import Admissions from "./pages/Admissions.tsx";
import EnrollmentProcess from "./components/Enrollment.tsx";
import AdmRequirements from "./components/AdmRequirements.tsx";

import Academics from "./pages/Academics";
import Curriculum from "./components/Curriculum.tsx";
import UniquePrograms from "./components/UniquePrograms.tsx";
import AcademicAchievements from "./components/AcademicAchievements.tsx";
import AcademicJourney from "./components/AcademicJourney.tsx";

import AdmProcessPage from './components/AdmProcessPage.tsx';
import GoogleMapEmbed from "./components/googleMapEmbed.tsx";
import SchoolLocationTabs from '@/components/schoolsLocation.tsx';


const queryClient = new QueryClient();


const App = () => {
 

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MenuProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop/>
              <Navigation2 />
              <Routes>
                {/* home page routes */}
                <Route path="/" element={<Index />} />
                <Route path="/home-about" element={<AboutSection/>}/>
                <Route path="/at-glance" element={<AtGlanceSection/>}/>
                <Route path="/student-life" element={<StudentsLifeSection/>}/>
                <Route path="/testimonials" element={<TestimonialCarousel/>}/>
                <Route path="/schools" element={<SchoolsSection/>}/>

                {/* About Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/about/mission" element={<MissionVission />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/about/leadership" element={<Leadership />} />
                <Route path="/about/why-choose" element={<WhyChoosePioneer />} />

                {/* Academics Routes */}
                <Route path="/academics" element={<Academics />} />
                <Route path="/academics/curriculum" element={<Curriculum />} />
                <Route path="/academics/learning-paths" element={<UniquePrograms />} />
                <Route path="/academics/highlights" element={<AcademicAchievements />} />
                <Route path="/academics/where-story-goes" element={<AcademicJourney />} />

                {/* Admissions Routes */}
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/admissions/enrollment" element={<EnrollmentProcess />} />
                <Route path="/admissions/requirements" element={<AdmRequirements />} />

                {/* Other Pages */}
                <Route path="/visit-us" element={<VisitUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/join" element={<Admissions />} />
                <Route path="/location" element={<GoogleMapEmbed locationUrl="YOUR_GOOGLE_MAPS_EMBED_URL" />} />
                <Route path="/maps" element={<SchoolLocationTabs/>}/>

                {/* Adm Process */}
                <Route path="/adm-process" element={<AdmProcessPage />} />

                {/* Prospectus Page */}
                <Route path="/prospectus" element={<ProspectusPage />} />

          
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ChatIcon />
              <Footer />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default App;
