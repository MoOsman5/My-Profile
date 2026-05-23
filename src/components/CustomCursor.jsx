import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth lag-trail calculation using requestAnimationFrame for 60/120 FPS performance
  useEffect(() => {
    let requestRef;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef = requestAnimationFrame(updateTrail);
    };
    requestRef = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef);
  }, [position]);

  // Track hover state on interactive clickable elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer");
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Cursor Spotlight Glow - GPU Hardware Accelerated via CSS Variables */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-40 mix-blend-screen"
        style={{
          background: `radial-gradient(400px at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(145, 94, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* Sci-Fi Targeting HUD Outer Ring - Rotating with Micro Brackets */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full border border-dashed border-[#915eff]/70 transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ${
          isHovered 
            ? "w-14 h-14 bg-[#915eff]/10 border-[#915eff] animate-[spin_3s_linear_infinite]" 
            : "w-8 h-8 animate-[spin_12s_linear_infinite]"
        }`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      >
        {/* Cardinal Target Brackets (spin together with the outer ring!) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[4px] bg-[#915eff] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[4px] bg-[#915eff] pointer-events-none" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[2px] bg-[#915eff] pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[2px] bg-[#915eff] pointer-events-none" />
      </div>

      {/* Precise Inner Tracking Dot - Glowing Neon Core */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full bg-[#915eff] shadow-[0_0_10px_#915eff] transition-transform duration-200 -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? "scale-50 opacity-80" : "w-2.5 h-2.5"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
