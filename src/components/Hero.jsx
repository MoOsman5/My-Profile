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
            <div className="flex gap-4 ml-2 mt-2 sm:mt-0">
              <a
                href="https://github.com/MoOsman5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-tertiary flex justify-center items-center hover:bg-[#915eff] transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[#915eff] shadow-lg shadow-[#915eff]/5"
                title="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-white-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/mohamedosmanm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-tertiary flex justify-center items-center hover:bg-[#915eff] transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[#915eff] shadow-lg shadow-[#915eff]/5"
                title="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-white-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
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
