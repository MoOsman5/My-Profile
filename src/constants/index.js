import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nasnav,
  carrent,
  jobit,
  tripguide,
  threejs,
  nti,
  iti,
  teqneia,
  deci,
  abs,
  akm
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Instructor",
    icon: creator,
  },
];

const technologies = [
  // --- FRONTEND ---
  {
    name: "React JS",
    icon: reactjs,
    category: "Frontend",
    level: "Expert",
    percentage: 95,
    iconName: "FaReact"
  },
  {
    name: "Next.js",
    icon: null,
    category: "Frontend",
    level: "Expert",
    percentage: 92,
    iconName: "SiNextdotjs"
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend",
    level: "Expert",
    percentage: 90,
    iconName: "SiTypescript"
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Frontend",
    level: "Expert",
    percentage: 94,
    iconName: "FaJs"
  },
  {
    name: "React Native",
    icon: null,
    category: "Frontend",
    level: "Advanced",
    percentage: 85,
    iconName: "FaMobileAlt"
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    category: "Frontend",
    level: "Advanced",
    percentage: 88,
    iconName: "SiRedux"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend",
    level: "Expert",
    percentage: 95,
    iconName: "SiTailwindcss"
  },
  {
    name: "HTML 5",
    icon: html,
    category: "Frontend",
    level: "Expert",
    percentage: 98,
    iconName: "FaHtml5"
  },
  {
    name: "CSS 3",
    icon: css,
    category: "Frontend",
    level: "Expert",
    percentage: 95,
    iconName: "FaCss3Alt"
  },
  {
    name: "Three JS",
    icon: threejs,
    category: "Frontend",
    level: "Advanced",
    percentage: 80,
    iconName: "SiThreedotjs"
  },

  // --- BACKEND & DATABASES ---
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend",
    level: "Expert",
    percentage: 93,
    iconName: "FaNodeJs"
  },
  {
    name: "NestJS",
    icon: null,
    category: "Backend",
    level: "Expert",
    percentage: 92,
    iconName: "SiNestjs"
  },
  {
    name: "Express.js",
    icon: null,
    category: "Backend",
    level: "Expert",
    percentage: 94,
    iconName: "SiExpress"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Backend",
    level: "Expert",
    percentage: 90,
    iconName: "SiMongodb"
  },
  {
    name: "PostgreSQL",
    icon: null,
    category: "Backend",
    level: "Advanced",
    percentage: 85,
    iconName: "SiPostgresql"
  },
  {
    name: "SQL Server",
    icon: null,
    category: "Backend",
    level: "Advanced",
    percentage: 84,
    iconName: "DiMsqlServer"
  },
  {
    name: "REST APIs & GraphQL",
    icon: null,
    category: "Backend",
    level: "Expert",
    percentage: 95,
    iconName: "AiOutlineApi"
  },

  // --- TOOLS & DEVOPS ---
  {
    name: "git",
    icon: git,
    category: "Tools",
    level: "Expert",
    percentage: 92,
    iconName: "FaGitAlt"
  },
  {
    name: "docker",
    icon: docker,
    category: "Tools",
    level: "Advanced",
    percentage: 82,
    iconName: "FaDocker"
  },
  {
    name: "figma",
    icon: figma,
    category: "Tools",
    level: "Advanced",
    percentage: 80,
    iconName: "FaFigma"
  },
  {
    name: "Postman",
    icon: null,
    category: "Tools",
    level: "Expert",
    percentage: 93,
    iconName: "SiPostman"
  },
  {
    name: "Vite",
    icon: null,
    category: "Tools",
    level: "Expert",
    percentage: 90,
    iconName: "SiVite"
  },

  // --- LEADERSHIP & MENTORSHIP ---
  {
    name: "Team Leadership",
    icon: null,
    category: "Leadership",
    level: "Expert",
    percentage: 90,
    iconName: "FaUsers"
  },
  {
    name: "Robotics & Coding",
    icon: null,
    category: "Leadership",
    level: "Expert",
    percentage: 95,
    iconName: "FaRobot"
  },
  {
    name: "Performance Opt.",
    icon: null,
    category: "Leadership",
    level: "Expert",
    percentage: 92,
    iconName: "FaRocket"
  }
];

const experiences = [
  {
    title: "Backend Team leader",
    company_name: "ABS Courier",
    icon: abs,
    iconBg: "#E6DEDD",
    date: "2024/05 - present",
    points: [
      "Develop and maintain scalable web applications using Node.js (nestjs & express), Next.js, and Typescript; manage full project lifecycle, optimize performance, collaborate with cross-functional teams, and mentor junior developers."
    ]    
  },
  {
    title: "Instructor",
    company_name: "Digital Egypt Cubs Initiative \"DECI\"",
    icon: deci,
    iconBg: "#E6DEDD",
    date: "2024/01 - present",
    points: [
      "As an instructor at almentor for the Egypt Digital Cubs Initiative, I develop and deliver engaging digital literacy and tech skills lessons for young learners. My role includes creating lesson plans, teaching coding, and robotics, mentoring students, and assessing their progress to foster a supportive and innovative learning environment."
    ]
  },
  {
    title: "Software Developer",
    company_name: "NasNav",
    icon: nasnav,
    iconBg: "#E6DEDD",
    date: "2023/06 - 2024/05",
    points: [
      "Developed responsive web applications with ReactJS and cross-platform mobile apps using React Native. Styled components using SASS for scalable and modern designs. Collaborated with backend teams to integrate APIs and optimize performance."
    ]
  },
  {
    title: "Software Developer",
    company_name: "Teqneia ICT",
    icon: teqneia,
    iconBg: "#E6DEDD",
    date: "2022/06 - 2023/06",
    points: [
      "Built responsive and interactive web applications using ReactJS. Styled user interfaces with Tailwind CSS and Material UI to deliver modern and visually appealing designs. Worked closely with cross-functional teams to ensure seamless integration and high performance."
    ]
  },
  {
    title: "Software Engineering",
    company_name: "ITI",
    icon: iti,
    iconBg: "#E6DEDD",
    date: "2022/05 - 2022/08",
    points: [
      "I was privileged to participate in a comprehensive Software Engineering training program for a period of three months, generously sponsored by ITI."
    ]
  },
  {
    title: "Web Design",
    company_name: "NTI",
    icon: nti,
    iconBg: "#E6DEDD",
    date: "2022/05 - 2022/08",
    points: [
      "I furthered my technical skills through a three-month Web Design scholarship, under the auspices of NTI."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AKM E-Commerce",
    description:
      "A premium e-commerce clothing storefront & admin dashboard featuring secure state management via Zustand, JWT auth, rich sales reporting using Recharts, Cloudinary optimization pipeline, and robust DTO validations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: akm,
    source_code_link: "https://akm-ecommerce-pnyk.vercel.app/",
  },
  {
    name: "World of Control",
    description:
      "A modern, multilingual e-commerce platform for automotive control systems and auto parts featuring mobile-first responsive design, dark/light shadcn UI theme support, and RTL internationalization (Arabic/English).",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://world-of-control.vercel.app/en",
  },
];

export { services, technologies, experiences, testimonials, projects };