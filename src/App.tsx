import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { UnifiedProjectsSection } from "./components/UnifiedProjectsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
// import { ParticleBackground } from "./components/ParticleBackground";
import { CursorTrail } from "./components/CursorTrail";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { Toaster } from "sonner";
import DarkVeil from "./components/DarkVeil";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      {/* Cursor trail effect */}
      <CursorTrail />
      
      {/* Dark Veil Background */}
      {/* Dark Veil Background (Dark Mode Only) */}
      {theme === "dark" ? (
        <div className="fixed inset-0 z-0 pointer-events-none bg-black">
          <div className="hidden md:block w-full h-full">
            <DarkVeil
              hueShift={0}
              noiseIntensity={0.5}
              scanlineIntensity={0}
              speed={0.5}
              scanlineFrequency={0}
              warpAmount={0.5}
            />
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-0 pointer-events-none bg-white" />
      )}
      
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
