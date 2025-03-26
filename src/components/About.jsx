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
        As a junior full stack developer, I am passionate about web development
        and problem-solving. I have a strong technical skill set, including
        HTML5, CSS3, Bootstrap, SASS, Tailwind, JavaScript, TypeScript, Reactjs,
        React Native, Redux, Nodejs, Express, MongoDB, Java, Git, Github,
        Firebase, and APIs. I have experience working with design patterns and I
        am a self-motivated team player. I have gained valuable experience
        through internships at Teqneia ICT and comprehensive training programs
        at ITI and NTI. I have participated in various projects, including the
        development of Movie Max, Car Care, Muscles Hub, Your Furniture, and
        Date Reminder, using various technologies such as Reactjs, CSS3, HTML5,
        React Bootstrap, React Native, and Firebase. My interests lie in
        problem-solving, and I participate in problem-solving competitions like
        ECPC. I am fluent in Arabic and English, and I am committed to
        continuous learning and growth in the tech industry.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
