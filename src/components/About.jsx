import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card max-w-[230px]"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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
        I am a mid-senior full-stack developer with a strong background in web
        development, backend architecture, and scalable application design. My
        expertise spans both frontend and backend technologies, including
        React.js, Next.js, Tailwind CSS, ShadCN, Node.js (NestJS, Express), and
        SQL Server. I specialize in building secure and efficient systems,
        implementing authentication with JWT, and optimizing API performance.
        <br />
        <br />
        With hands-on experience in software engineering, I have developed
        dynamic, high-performance applications while following clean code
        principles, SOLID design patterns, and best practices. I am proficient
        in state management with Redux and have a strong understanding of
        relational and NoSQL databases. Additionally, I actively participate in
        problem-solving challenges to enhance my analytical skills.
        <br />
        <br />
        I am passionate about continuous learning, collaboration, and
        delivering high-quality software solutions that drive business growth.
        As a self-motivated team player, I thrive in fast-paced environments and
        am always eager to embrace new technologies.
      </motion.p>

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
