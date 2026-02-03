import { motion } from "motion/react";
import { ReactNode } from "react";
import { useTheme } from "./ThemeContext";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function GlassCard({ children, className = "", delay = 0, hover = true }: GlassCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`glass-card ${className}`}
      style={{
        position: "relative",
        backdropFilter: "blur(18px) saturate(165%)",
        backgroundColor: theme === "dark" 
          ? "rgba(18, 18, 26, 0.88)" 
          : "rgba(255, 255, 255, 0.75)",
        borderRadius: "24px",
        border: `1px solid ${theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
        boxShadow: theme === "dark"
          ? "0 10px 48px rgba(0, 0, 0, 0.4)"
          : "0 10px 48px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: theme === "dark"
            ? "radial-gradient(160% 140% at 100% 0%, rgba(118, 123, 255, 0.32), rgba(118, 123, 255, 0) 55%)"
            : "radial-gradient(160% 140% at 100% 0%, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0) 55%)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {children}
    </motion.div>
  );
}
