import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
          {isMobile ? (
            <div className='w-24 h-24 rounded-full bg-tertiary shadow-card flex items-center justify-center border border-[#915eff]/30 hover:border-[#915eff] transition-all duration-300 transform hover:scale-110 shadow-[0_0_15px_rgba(145,94,255,0.15)] cursor-pointer'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-12 h-12 object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]'
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");