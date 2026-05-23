import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

// Explicitly import beautiful react-icons for pixel-perfect presentation
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaSass, FaMobileAlt, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaUsers, FaRobot, FaRocket 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss, SiThreedotjs, SiNestjs, SiExpress, SiMongodb, SiPostgresql, SiPostman, SiVite 
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";

// Icon mapping for structured rendering
const iconMapping = {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaSass, FaMobileAlt, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaUsers, FaRobot, FaRocket,
  SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss, SiThreedotjs, SiNestjs, SiExpress, SiMongodb, SiPostgresql, SiPostman, SiVite,
  DiMsqlServer, AiOutlineApi
};

const SkillCard = ({ index, tech }) => {
  const IconComponent = iconMapping[tech.iconName];

  // Dynamic glow color based on category
  const getGlowColor = (category) => {
    switch (category) {
      case "Frontend": return "group-hover:shadow-[0_0_20px_rgba(0,206,168,0.25)] border-[#00cea8]/20 group-hover:border-[#00cea8]/50";
      case "Backend": return "group-hover:shadow-[0_0_20px_rgba(145,94,255,0.25)] border-[#915eff]/20 group-hover:border-[#915eff]/50";
      case "Tools": return "group-hover:shadow-[0_0_20px_rgba(255,100,100,0.20)] border-orange-500/20 group-hover:border-orange-500/50";
      default: return "group-hover:shadow-[0_0_20px_rgba(255,215,0,0.20)] border-yellow-500/20 group-hover:border-yellow-500/50";
    }
  };

  const getTextColor = (category) => {
    switch (category) {
      case "Frontend": return "text-[#00cea8]";
      case "Backend": return "text-[#915eff]";
      case "Tools": return "text-orange-400";
      default: return "text-yellow-400";
    }
  };

  const getBadgeStyle = (level) => {
    if (level === "Expert") return "bg-[#00cea8]/10 text-[#00cea8] border-[#00cea8]/20";
    if (level === "Advanced") return "bg-[#915eff]/10 text-[#915eff] border-[#915eff]/20";
    return "bg-secondary/10 text-secondary border-secondary/20";
  };

  return (
    <Tilt
      options={{
        max: 15,
        scale: 1.02,
        speed: 450,
      }}
      className="w-full sm:w-[280px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.03
        }}
        className={`premium-skill-card rounded-2xl p-6 flex flex-col justify-between h-[175px] cursor-pointer relative overflow-hidden group border transition-all duration-300 ${getGlowColor(tech.category)}`}
      >
        {/* Soft background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Top bar with Icon & Badge */}
        <div className="flex justify-between items-center">
          <div className={`p-2.5 rounded-xl bg-tertiary border border-white/5 group-hover:border-white/10 transition-all duration-300 ${getTextColor(tech.category)} shadow-inner`}>
            {IconComponent ? (
              <IconComponent size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <div className="w-6 h-6 bg-secondary/20 rounded-full" />
            )}
          </div>
          <span className={`px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full border ${getBadgeStyle(tech.level)} shadow-sm`}>
            {tech.level}
          </span>
        </div>

        {/* Skill Title */}
        <div className="mt-2.5">
          <h3 className="text-white-100 font-extrabold text-[18px] leading-tight tracking-wide group-hover:text-white transition-colors duration-300">
            {tech.name}
          </h3>
        </div>

        {/* Dynamic Glowing Skill Meter */}
        <div className="mt-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[12px] text-secondary font-medium tracking-wide uppercase">Proficiency</span>
            <span className="text-[12px] text-white-100 font-bold">{tech.percentage}%</span>
          </div>
          <div className="skill-progress-track">
            <motion.div
              className="skill-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${tech.percentage}%` }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.05 }}
            />
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [is3DMode, setIs3DMode] = useState(false);
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

  // Filter skills based on tab selection
  const filteredTechnologies = activeTab === "All"
    ? technologies
    : technologies.filter(tech => tech.category === activeTab);

  console.log("activeTab Selected:", activeTab);
  console.log("filteredTechnologies List:", filteredTechnologies);

  // Filter subset of skills that have 3D local icons
  const threeDTechs = technologies.filter(tech => tech.icon !== null);

  const categories = ["All", "Frontend", "Backend", "Tools", "Leadership"];

  return (
    <div className="flex flex-col w-full relative">
      {/* Headings */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical stack & expertise</p>
        <h2 className={styles.sectionHeadText}>Skills & Tech.</h2>
      </motion.div>

      {/* Control Panel: Category Tabs & 3D Toggle Switch */}
      <div className="mt-10 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
        {/* Sleek Glassmorphic Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 bg-black-200/40 backdrop-blur-md border border-white/5 p-1.5 rounded-2xl max-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`skills-tab-button px-4 py-2 text-[14px] font-semibold rounded-xl uppercase tracking-wider ${activeTab === cat ? "active" : ""}`}
            >
              {cat === "Tools" ? "DevOps & Tools" : cat === "Leadership" ? "Leadership & Teaching" : cat}
            </button>
          ))}
        </div>

        {/* 3D WebGL Playground Switcher (hidden on mobile) */}
        {!isMobile && (
          <div className="flex items-center gap-4">
            <span className="text-[14px] text-secondary font-semibold uppercase tracking-wider">
              {is3DMode ? "✨ 3D Ball Canvas Active" : "📊 Interactive Dashboard Active"}
            </span>
            <div
              onClick={() => setIs3DMode(!is3DMode)}
              className={`playground-switch w-[220px] h-[44px] ${is3DMode ? "active" : ""}`}
            >
              <div className="playground-switch-thumb" />
              <span className="z-10 w-1/2 text-center text-[12px] font-bold uppercase tracking-wider text-white transition-all duration-300">
                Dashboard
              </span>
              <span className="z-10 w-1/2 text-center text-[12px] font-bold uppercase tracking-wider text-white transition-all duration-300">
                3D Sandbox
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Main Dynamic Tech Render Space */}
      <div className="w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          {!is3DMode || isMobile ? (
            /* Tabbed Skill Grid Dashboard (Highly Performant) */
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center sm:justify-items-start"
            >
              {filteredTechnologies.map((tech, index) => (
                <SkillCard key={tech.name} index={index} tech={tech} />
              ))}
            </motion.div>
          ) : (
            /* 3D WebGL Interactive Sphere Canvas Playground (Optimized for performance) */
            <motion.div
              key="threeD"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-6 bg-black-200/30 border border-white/5 rounded-3xl backdrop-blur-sm"
            >
              <p className="text-secondary text-[14px] font-medium mb-6 text-center max-w-xl leading-relaxed">
                Hold, drag, and spin the high-performance 3D galaxy of your skills. Switch category tabs above to morph the 3D constellation!
              </p>
              
              {/* Single high-performance interactive 3D viewport */}
              <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center rounded-2xl overflow-hidden bg-primary/40 border border-white/5 shadow-inner">
                <BallCanvas techs={filteredTechnologies} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");