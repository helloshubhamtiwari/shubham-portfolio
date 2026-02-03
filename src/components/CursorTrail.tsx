import { useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  scale: number;
}

// Reduced from 40 to 12 for much better responsiveness
// Tighter spacing means tail stays close to cursor
const TRAIL_LENGTH = 12;
const MAX_DISTANCE = 28; // Max ~1cm distance in pixels (at 96DPI)

export function CursorTrail() {
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const circlePositions = useRef<Circle[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100, scale: 1 }))
  );
  const animationFrameId = useRef<number>();
  const isInitialized = useRef(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Initialize all circles to current mouse position on first move
      if (!isInitialized.current) {
        circlePositions.current.forEach((circle) => {
          circle.x = e.clientX;
          circle.y = e.clientY;
        });
        isInitialized.current = true;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -100, y: -100 };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Re-initialize on mouse enter to prevent trail from previous position
      if (isInitialized.current) {
        circlePositions.current.forEach((circle) => {
          circle.x = e.clientX;
          circle.y = e.clientY;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Distance calculation helper
    const distance = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Linear interpolation (lerp) function
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      const circles = circlePositions.current;

      // First circle follows mouse directly with aggressive responsiveness
      circles[0].x = lerp(circles[0].x, mouseRef.current.x, 0.4);
      circles[0].y = lerp(circles[0].y, mouseRef.current.y, 0.4);
      circles[0].scale = 1;

      // Each subsequent circle follows the previous with distance constraint
      // This prevents the tail from stretching too far during rapid movements
      for (let i = 1; i < circles.length; i++) {
        const prevCircle = circles[i - 1];
        const currCircle = circles[i];
        
        // Calculate distance to previous circle
        const dist = distance(currCircle.x, currCircle.y, prevCircle.x, prevCircle.y);
        
        // If too far away, snap closer to maintain tight trail
        if (dist > MAX_DISTANCE) {
          const angle = Math.atan2(prevCircle.y - currCircle.y, prevCircle.x - currCircle.x);
          currCircle.x = prevCircle.x - Math.cos(angle) * MAX_DISTANCE;
          currCircle.y = prevCircle.y - Math.sin(angle) * MAX_DISTANCE;
        } else {
          // Normal smooth lerp with strong pull factor
          currCircle.x = lerp(currCircle.x, prevCircle.x, 0.5);
          currCircle.y = lerp(currCircle.y, prevCircle.y, 0.5);
        }
        
        // Progressive scale reduction for smooth trail effect
        circles[i].scale = 1 - (i / circles.length) * 0.95;
      }

      // Update DOM elements for trail
      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          const { x, y, scale } = circles[index];
          circle.style.left = `${x}px`;
          circle.style.top = `${y}px`;
          circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
          
          // Only show circles after initialization with progressive opacity fade
          if (isInitialized.current && x !== -100 && y !== -100) {
            // Smooth opacity fade from 0.9 to 0.1
            const opacity = 0.9 - (index / TRAIL_LENGTH) * 0.8;
            circle.style.opacity = `${opacity}`;
          } else {
            circle.style.opacity = '0';
          }
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Trail Circles - 12 circles for responsive, tight trail */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, index) => {
        const reverseIndex = TRAIL_LENGTH - 1 - index;
        // Base size of 20px, progressively scaling down
        const baseSize = 20;
        const sizeFactor = 1 - (reverseIndex / TRAIL_LENGTH) * 0.95;
        const size = baseSize * sizeFactor;
        
        return (
          <div
            key={index}
            ref={(el) => {
              if (el) circlesRef.current[reverseIndex] = el;
            }}
            className="circle fixed rounded-full pointer-events-none"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 9990 + index,
              willChange: "transform, left, top, opacity",
              opacity: 0,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          />
        );
      })}
    </>
  );
}
