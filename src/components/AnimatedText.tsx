import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: boolean;
}

export function AnimatedText({ text, className = "", gradient = false }: AnimatedTextProps) {
  const { theme } = useTheme();
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 400,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
    },
  };

  return (
    <motion.h1
      className={`${className} ${gradient ? 'animated-gradient-text' : ''}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block ${letter === " " ? "w-3" : ""} hover-lift`}
          whileHover={{
            y: -6,
            scale: 1.1,
            color: theme === "dark" ? "#22d3ee" : "#0891b2",
            transition: { duration: 0.1, type: "spring", stiffness: 500, damping: 15 },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}

      <style>{`
        .animated-gradient-text {
          background: ${theme === "dark" 
            ? "linear-gradient(90deg, #22d3ee 0%, #6366f1 50%, #22d3ee 100%)" 
            : "linear-gradient(90deg, #0891b2 0%, #4f46e5 50%, #0891b2 100%)"};
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }

        .hover-lift {
          cursor: default;
        }
      `}</style>
    </motion.h1>
  );
}
