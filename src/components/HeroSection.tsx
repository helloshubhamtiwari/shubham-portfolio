import { motion } from "motion/react";
import { ArrowRight, Linkedin, Mail, Instagram, Github, Download } from "lucide-react";
import profileImage from "figma:asset/b5e0fb96ab7ea9468a56acdfb45740b35b3b7cc5.png";
import { useTheme } from "./ThemeContext";
import { AnimatedText } from "./AnimatedText";
import { TypewriterText } from "./TypewriterText";
import ShinyText from "./ShinyText";
import TextType from "./TextType";

// Custom Behance icon component
function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.5 4.5h4.5c1.5 0 2.7.3 3.6 1 .9.6 1.4 1.6 1.4 2.9 0 .8-.2 1.5-.7 2-.4.6-1 .9-1.7 1.1v.1c1 .1 1.8.5 2.3 1.2.5.6.8 1.4.8 2.4 0 1-.2 1.8-.7 2.4-.4.7-1 1.1-1.8 1.4-.7.3-1.6.4-2.5.4H6.5V4.5zm3 5.3h2.3c.7 0 1.2-.2 1.6-.5.4-.3.5-.8.5-1.4 0-.7-.2-1.1-.6-1.4-.4-.3-.9-.4-1.6-.4H9.5v3.7zm0 2.4v4.2h2.6c.7 0 1.3-.2 1.7-.5.4-.4.6-.9.6-1.6 0-1.4-.8-2.1-2.3-2.1H9.5zM15.5 7h5v1.5h-5V7zm3.5 5c-1.5 0-2.7.4-3.5 1.3-.8.9-1.2 2-1.2 3.5v.4c0 1.5.4 2.7 1.1 3.6.8.9 1.9 1.4 3.3 1.4 1.2 0 2.2-.3 3-.9.7-.6 1.1-1.4 1.3-2.4h-2.6c-.1.4-.3.7-.6.9-.3.2-.7.3-1.1.3-.6 0-1.1-.2-1.5-.6-.3-.4-.5-1-.5-1.7h6.2v-.8c0-1.5-.4-2.7-1.2-3.6-.8-.9-1.9-1.4-3.3-1.4zm-1.5 3.5c0-.6.2-1.1.5-1.5.3-.4.8-.6 1.4-.6.6 0 1 .2 1.3.5.3.4.5.9.5 1.6h-3.7z" />
    </svg>
  );
}

export function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 transition-colors duration-300 transparent"
    >

      <div className="relative max-w-6xl w-full mx-auto py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-sm font-medium tracking-wide uppercase ${
                  theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                Hello, I'm
              </motion.p>

              {/* Name with Advanced Animation - Two Lines */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight block">
                  <ShinyText 
                    text="Shubham" 
                    disabled={false} 
                    speed={3} 
                    className="custom-class" 
                    color={theme === "dark" ? "#22d3ee" : "#0891b2"} // Cyan colors
                    shineColor={theme === "dark" ? "#ffffff" : "#e0f2fe"} 
                  />
                </div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight block">
                  <ShinyText 
                    text="Tiwari" 
                    disabled={false} 
                    speed={3} 
                    className="custom-class" 
                    color={theme === "dark" ? "#22d3ee" : "#0891b2"}
                    shineColor={theme === "dark" ? "#ffffff" : "#e0f2fe"} 
                  />
                </div>
              </motion.div>

              {/* Title with Typewriter Animation */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                }}
                transition={{ delay: 0.4 }}
                className={`text-2xl sm:text-3xl lg:text-4xl font-semibold min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] ${
                  theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                <TextType
                  text={[
                    "Frontend Developer",
                    "UI/UX Designer",
                    "Professional Video Editor",
                  ]}
                  typingSpeed={75}
                  deletingSpeed={50}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`text-lg max-w-2xl leading-relaxed ${
                  theme === "dark" ? "text-zinc-500" : "text-zinc-600"
                }`}
              >
                I'm a BCA student specializing in UI/UX from Chandigarh University, passionate about building modern web experiences, intuitive interfaces, and visually engaging digital products.
              </motion.p>
            </motion.div>

            {/* CTA Buttons with Advanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: theme === "dark" ? "0 10px 40px rgba(34, 211, 238, 0.3)" : "0 10px 40px rgba(8, 145, 178, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className={`group relative inline-flex items-center gap-2 px-8 py-4 font-medium rounded-lg overflow-hidden transition-all duration-300 ${
                  theme === "dark" 
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-zinc-900" 
                    : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                }`}
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 ${theme === "dark" ? "bg-cyan-300" : "bg-cyan-500"}`}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1zYk0FZu-yD-9gUl-gQFBFz2L8A9NOUUt/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: theme === "dark" ? "#22d3ee" : "#0891b2",
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative inline-flex items-center gap-2 px-8 py-4 border-2 font-medium rounded-lg overflow-hidden transition-all duration-300 ${
                  theme === "dark"
                    ? "border-zinc-700 text-zinc-300"
                    : "border-zinc-300 text-zinc-700"
                }`}
              >
                <span className={`relative z-10 transition-colors duration-300 group-hover:${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}>
                  Resume
                </span>
                <motion.div
                  className="relative z-10"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download className={`w-5 h-5 transition-colors duration-300 group-hover:${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`} />
                </motion.div>
                
                {/* Hover effect */}
                <motion.div
                  className={`absolute inset-0 ${theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-600/10"}`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Social Links with Idle Animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-8"
            >
              <motion.a
                href="https://www.behance.net/shubhamtiwari78"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: 0,
                    ease: "easeInOut",
                  },
                  opacity: { delay: 0.8, duration: 0.3 }
                }}
                whileHover={{ y: -8, scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 transition-colors ${
                  theme === "dark" ? "text-zinc-500 hover:text-cyan-400" : "text-zinc-600 hover:text-cyan-600"
                }`}
                aria-label="Behance"
              >
                <BehanceIcon className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/shubamtiwari-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.3,
                    ease: "easeInOut",
                  },
                  opacity: { delay: 0.9, duration: 0.3 }
                }}
                whileHover={{ y: -8, scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 transition-colors ${
                  theme === "dark" ? "text-zinc-500 hover:text-cyan-400" : "text-zinc-600 hover:text-cyan-600"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://github.com/helloshubhamtiwari"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.6,
                    ease: "easeInOut",
                  },
                  opacity: { delay: 1.0, duration: 0.3 }
                }}
                whileHover={{ y: -8, scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 transition-colors ${
                  theme === "dark" ? "text-zinc-500 hover:text-cyan-400" : "text-zinc-600 hover:text-cyan-600"
                }`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="mailto:Shubhxtiwari@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.9,
                    ease: "easeInOut",
                  },
                  opacity: { delay: 1.1, duration: 0.3 }
                }}
                whileHover={{ y: -8, scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 transition-colors ${
                  theme === "dark" ? "text-zinc-500 hover:text-cyan-400" : "text-zinc-600 hover:text-cyan-600"
                }`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/shubhamtiwari.in"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.2,
                    ease: "easeInOut",
                  },
                  opacity: { delay: 1.2, duration: 0.3 }
                }}
                whileHover={{ y: -8, scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 transition-colors ${
                  theme === "dark" ? "text-zinc-500 hover:text-cyan-400" : "text-zinc-600 hover:text-cyan-600"
                }`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glow effect */}
              <motion.div 
                className={`absolute inset-0 blur-3xl rounded-full ${
                  theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-600/10"
                }`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Image container with idle floating */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="relative"
              >
                <img
                  src={profileImage}
                  alt="Shubham Tiwari"
                  className={`w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border ${
                    theme === "dark" ? "border-zinc-800/50" : "border-zinc-200"
                  }`}
                />
                
                {/* Animated border accent */}
                <motion.div 
                  className={`absolute inset-0 rounded-2xl border ${
                    theme === "dark" ? "border-cyan-400/20" : "border-cyan-600/20"
                  }`}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-5 h-8 border-2 rounded-full p-1 ${
            theme === "dark" ? "border-zinc-700" : "border-zinc-300"
          }`}
        >
          <motion.div 
            className={`w-1 h-2 rounded-full mx-auto ${
              theme === "dark" ? "bg-zinc-600" : "bg-zinc-400"
            }`}
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
