import React, { useState, useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotlightRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const trailRef = useRef({ x: -999, y: -999 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
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

  // Smooth lag-trail calculation using direct DOM style transformations for flawless 120+ FPS performance
  useEffect(() => {
    if (isHidden) return;

    let requestRef;
    const animate = () => {
      // Initialize trail position if offscreen to prevent massive spring leaps on entry
      if (trailRef.current.x === -999) {
        trailRef.current.x = mouseRef.current.x;
        trailRef.current.y = mouseRef.current.y;
      }

      // Interpolate trail position with easing factor
      const dx = mouseRef.current.x - trailRef.current.x;
      const dy = mouseRef.current.y - trailRef.current.y;
      
      // If distance is extremely small (static state), snap completely to prevent subpixel drifting
      if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) {
        trailRef.current.x = mouseRef.current.x;
        trailRef.current.y = mouseRef.current.y;
      } else {
        trailRef.current.x += dx * 0.18;
        trailRef.current.y += dy * 0.18;
      }

      // Round coordinates to pixel grid integers to prevent subpixel rounding rendering offset in different elements!
      const posX = Math.round(mouseRef.current.x);
      const posY = Math.round(mouseRef.current.y);
      const trailX = Math.round(trailRef.current.x);
      const trailY = Math.round(trailRef.current.y);

      // Update positions using direct left/top positioning to bypass parent-transform spec issues!
      if (dotRef.current) {
        dotRef.current.style.left = `${posX}px`;
        dotRef.current.style.top = `${posY}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${trailX}px`;
        ringRef.current.style.top = `${trailY}px`;
      }

      // Update cursor spotlight glow
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(400px at ${posX}px ${posY}px, rgba(145, 94, 255, 0.08), transparent 80%)`;
      }

      requestRef = requestAnimationFrame(animate);
    };

    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, [isHidden]);

  // Track hover state on interactive clickable elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

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
      {/* Cursor Spotlight Glow - GPU Hardware Accelerated */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 opacity-40 mix-blend-screen"
      />

      {/* Sci-Fi Targeting HUD Outer Ring - Centered via -translate-x-1/2 -translate-y-1/2 */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed z-50 rounded-full border border-dashed border-[#915eff]/70 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color] duration-200 ease-out ${
          isHovered 
            ? "w-14 h-14 bg-[#915eff]/10 border-[#915eff] animate-[spin_3s_linear_infinite]" 
            : "w-8 h-8 animate-[spin_12s_linear_infinite]"
        }`}
        style={{
          left: "-999px",
          top: "-999px",
        }}
      >
        {/* Cardinal Target Brackets (spin together with the outer ring!) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[4px] bg-[#915eff] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[4px] bg-[#915eff] pointer-events-none" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[2px] bg-[#915eff] pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[2px] bg-[#915eff] pointer-events-none" />
      </div>

      {/* Precise Inner Tracking Dot - Centered via -translate-x-1/2 -translate-y-1/2 */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed z-50 rounded-full bg-[#915eff] shadow-[0_0_10px_#915eff] -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-200 ${
          isHovered ? "w-1.5 h-1.5 opacity-80" : "w-2.5 h-2.5"
        }`}
        style={{
          left: "-999px",
          top: "-999px",
        }}
      />
    </>
  );
};

export default CustomCursor;
