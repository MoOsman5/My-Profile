import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");
  const words = [
    "Senior Software Engineer",
    "Backend Team Leader",
    "NestJS & Next.js Expert",
    "Problem Solver"
  ];

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-[#915eff]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#00e5ff]/5 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700" />

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="z-10 w-full">
          <h1 className={`${styles.heroHeadText} text-white-100`}>
            {`Hi, I'm `}
            <span className="text-[#915eff]">Mohamed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 h-[40px] flex items-center`}>
            {`I'm a `}&nbsp;<span className="text-[#915eff] font-semibold">{text}</span>
            <span className="animate-pulse text-[#915eff] font-light">|</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#work"
              className="bg-[#915eff] py-3 px-6 rounded-xl text-white font-bold hover:bg-[#7a4ee6] transition-all duration-300 transform hover:scale-105 shadow-md shadow-[#915eff]/30 flex items-center gap-2"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <a
              href="#contact"
              className="border border-[#915eff]/40 py-3 px-6 rounded-xl text-white-100 font-bold hover:bg-[#915eff]/10 hover:border-[#915eff] transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-0 bottom-2 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
