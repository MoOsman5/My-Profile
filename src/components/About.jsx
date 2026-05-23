import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{
        max: 25,
        scale: 1.05,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-tertiary/75 transition-all duration-300"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Senior Software Engineer and Backend Team Leader with a strong background in architecting high-performance web systems and leading agile development teams. My technical expertise spans building highly-scalable APIs and robust frontend experiences using Next.js, NestJS, React, TypeScript, Tailwind CSS, Node.js, and secure database layers (MongoDB, SQL Server, PostgreSQL).
        <br />
        <br />
        With deep hands-on experience in software engineering, I specialize in building secure, distributed services, optimizing database indices, and managing automated asset pipelines. I have extensive experience in state management (Zustand, Redux) and implementing secure authentication structures (JWT, OAuth).
        <br />
        <br />
        I focus on delivering clean, highly-performant, and maintainable software architectures that solve complex business requirements and scale efficiently. I am passionate about modern development paradigms, continuous code improvement, and collaborating to build stellar digital products.
      </motion.p>

      {/* Stats Bar */}
      <div className="mt-12 mb-4 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
        {[
          { end: 5, suffix: "+", label: "Years of Experience" },
          { end: 25, suffix: "+", label: "Projects Completed" },
          { end: 15, suffix: "+", label: "Skills Mastered" },
          { end: 10, suffix: "+", label: "Team Members Led" },
        ].map((stat, i) => (
          <div 
            key={i}
            className="bg-tertiary/40 backdrop-blur-sm border border-white/5 rounded-2xl p-5 flex flex-col justify-center shadow-lg hover:border-[#915eff]/30 transition-all duration-300 transform hover:-translate-y-1 shadow-[#915eff]/2"
          >
            <span className="text-[32px] font-extrabold text-[#915eff]">
              <CountUp end={stat.end} duration={3} delay={0.2} />
              {stat.suffix}
            </span>
            <span className="text-[14px] text-secondary font-medium tracking-wide uppercase mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
