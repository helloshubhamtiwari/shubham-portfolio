import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { UnifiedProjectsSection } from "./components/UnifiedProjectsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { CursorTrail } from "./components/CursorTrail";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { Toaster } from "sonner";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      theme === "dark" ? "bg-[#0a0a0f]" : "bg-white"
    }`}>
      {/* Cursor trail effect */}
      <CursorTrail />
      
      {/* Ambient particle effect */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <UnifiedProjectsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
      <Toaster position="bottom-right" theme={theme === "dark" ? "dark" : "light"} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
