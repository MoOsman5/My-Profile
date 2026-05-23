import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Preloader = ({ finishLoading }) => {
  const progressRef = useRef(0);
  const numberRef = useRef(null);
  const barRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const statusSequence = [
      { limit: 25, text: "CONNECTING TO DATABASE..." },
      { limit: 55, text: "LOADING 3D GRAPHICS WORKSTATION..." },
      { limit: 80, text: "COMPILING SOFTWARE PORTFOLIO..." },
      { limit: 100, text: "ACCESS GRANTED. WELCOME!" },
    ];

    const timer = setInterval(() => {
      // Variable organic increments for authentic tech-loader visual pacing
      const diff = Math.floor(Math.random() * 8) + 2;
      const next = Math.min(progressRef.current + diff, 100);
      progressRef.current = next;

      // Update DOM nodes directly with zero React re-renders!
      if (numberRef.current) {
        numberRef.current.innerText = next;
      }
      if (barRef.current) {
        barRef.current.style.width = `${next}%`;
      }
      
      // Update status text based on current percentage range
      const matchedStatus = statusSequence.find((seq) => next <= seq.limit);
      if (matchedStatus && statusRef.current) {
        statusRef.current.innerText = matchedStatus.text;
      }

      if (next >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          finishLoading();
        }, 600); // Hold briefly at 100% for dramatic impact
      }
    }, 70); // Faster tick rate for a extremely slick loading flow

    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Cinematic Cyberpunk Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-30" />

      {/* Laser Sweep Scanline Overlay */}
      <motion.div 
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#915eff]/60 to-transparent shadow-[0_0_15px_#915eff] pointer-events-none"
      />

      <div className="relative flex flex-col justify-center items-center">
        {/* Futuristic Brand Intro Logo - Cinematic Stagger Reveal */}
        <div className="flex flex-col items-center mb-8 select-none pointer-events-none">
          <h1 className="text-[28px] sm:text-[34px] font-black tracking-[0.2em] text-white uppercase text-center flex flex-wrap justify-center items-center gap-x-4" style={{ textShadow: "0 0 15px rgba(145,94,255,0.45)" }}>
            {/* MOHAMED - Spring popping cascading letters */}
            <motion.span 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
              }}
              initial="hidden"
              animate="visible"
              className="flex"
            >
              {"MOHAMED".split("").map((letter, idx) => (
                <motion.span 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, y: 25, scale: 0.5, rotate: -8 },
                    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 140, damping: 10 } }
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>

            {/* OSMAN - Neon cascading letters */}
            <motion.span 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.45 } }
              }}
              initial="hidden"
              animate="visible"
              className="flex text-[#915eff]"
            >
              {"OSMAN".split("").map((letter, idx) => (
                <motion.span 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, y: 25, scale: 0.5, rotate: 8 },
                    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 140, damping: 10 } }
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* Letter Spacing breathing expansion subtitle */}
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.55em" }}
            transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
            className="text-[9px] text-[#915eff]/80 uppercase mt-3 font-mono block text-center"
          >
            SOFTWARE ENGINEER PORTFOLIO
          </motion.span>
        </div>

        {/* Glowing Vector Dial Dial */}
        <div className="relative w-48 h-48 flex justify-center items-center">
          {/* Outer rotating cybernetic dash ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#915eff]/40"
          />

          {/* Inner counter-rotating solid neon ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2.5 rounded-full border-t border-b border-[#915eff] shadow-[0_0_10px_#915eff]/20"
          />

          {/* Number and Label Container */}
          <div className="flex flex-col justify-center items-center">
            <span 
              ref={numberRef}
              className="text-[64px] font-black text-white font-mono tracking-tighter leading-none"
              style={{ textShadow: "0 0 15px rgba(145,94,255,0.35)" }}
            >
              0
            </span>
            <span className="text-[11px] font-bold text-[#915eff] tracking-[0.4em] uppercase ml-1.5 mt-1">
              PERCENT
            </span>
          </div>
        </div>

        {/* Loading Progress Bars */}
        <div className="mt-12 flex flex-col items-center">
          {/* Glassmorphic progress track */}
          <div className="w-64 h-[5px] bg-white/5 border border-white/10 rounded-full overflow-hidden">
            <div 
              ref={barRef}
              className="h-full bg-gradient-to-r from-[#915eff] to-[#bf61ff] shadow-[0_0_10px_#915eff] transition-[width] duration-150 ease-out"
              style={{ width: `0%` }}
            />
          </div>

          {/* Loading status logging */}
          <div className="h-6 mt-4 flex items-center justify-center">
            <span className="text-[11px] font-mono text-secondary tracking-widest uppercase flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#915eff] animate-ping" />
              <span ref={statusRef}>INITIALIZING SYSTEM...</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
