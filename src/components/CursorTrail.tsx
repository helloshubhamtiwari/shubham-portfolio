import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import "./CursorTrail.css";

export const CursorTrail = () => {
  const { theme } = useTheme();
  const [isMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches;
  });

  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = "auto";
      return;
    }
    document.body.style.cursor = "none";

    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll<HTMLElement & { x: number; y: number }>('.circle');

    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const links = document.querySelectorAll('a');
    const fields = [...textarea, ...inputs, ...buttons, ...links];

    const handleMouseOver = () => {
      circles.forEach((circle) => {
        circle.classList.add('circle-thin');
      });
    };

    const handleMouseOut = () => {
      circles.forEach((circle) => {
        circle.classList.remove('circle-thin');
      });
    };

    fields.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e: MouseEvent) => {
      circles.forEach((circle) => {
        circle.classList.remove('circle-hidden');
      });
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        circle.style.scale = ((circles.length - index) / circles.length) as unknown as string;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.35;
        y += (nextCircle.y - y) * 0.35;
      });

      requestAnimationFrame(animateCircles);
    }

    const animationId = requestAnimationFrame(animateCircles);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      fields.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
      document.body.style.cursor = "auto";
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className={`circle circle-hidden ${theme === "dark" ? "theme-dark" : ""}`}
        ></div>
      ))}
    </>
  );
};
