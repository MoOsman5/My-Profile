import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { websiteOn } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:border-[#915eff]/30 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#915eff]/5"
      >
        <div 
          onClick={() => window.open(source_code_link, "_blank")}
          className="relative w-full h-[200px] cursor-pointer overflow-hidden rounded-2xl group"
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
            <div
              className="bg-primary/95 text-white font-bold py-2.5 px-5 rounded-xl border border-[#915eff]/40 shadow-md shadow-[#915eff]/20 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              Visit Live Site
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white-100 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed min-h-[80px]">{description}</p>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap justify-between items-center gap-3">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[12px] font-medium px-2 py-0.5 rounded bg-black/30 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
          
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="text-[13px] font-bold text-[#915eff] hover:text-white hover:bg-[#915eff] border border-[#915eff] hover:border-transparent py-1.5 px-4 rounded-xl transition-all duration-300 transform active:scale-95 cursor-pointer shadow-sm hover:shadow-[#915eff]/20 flex items-center gap-1.5"
          >
            Live Link
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to the website and live demos in it. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
