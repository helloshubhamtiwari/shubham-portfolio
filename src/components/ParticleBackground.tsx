import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles - very low density
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 25000);
    
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // 0.5-2.5px
          speedY: Math.random() * 0.3 + 0.1, // Very slow fall 0.1-0.4
          speedX: (Math.random() - 0.5) * 0.2, // Slight horizontal drift
          opacity: Math.random() * 0.2 + 0.1, // Very low opacity 0.1-0.3
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.y += particle.speedY;
        particle.x += particle.speedX;

        // Reset particle when it goes off screen
        if (particle.y > canvas.height) {
          particle.y = -5;
          particle.x = Math.random() * canvas.width;
        }

        if (particle.x > canvas.width) {
          particle.x = 0;
        } else if (particle.x < 0) {
          particle.x = canvas.width;
        }

        // Draw particle - white for dark mode, dark gray for light mode
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        if (theme === "dark") {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        } else {
          ctx.fillStyle = `rgba(50, 50, 50, ${particle.opacity * 0.5})`; // Darker and more subtle for light mode
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
