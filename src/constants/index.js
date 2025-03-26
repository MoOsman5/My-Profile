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
  abs
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
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Intern",
    company_name: "National Telecommunication Institute NTI",
    icon: nti,
    iconBg: "#E6DEDD",
    date: "September 2021 - April 2022",
    points: [
      "Completed a frontend development internship as part of an initiative by the National Telecommunication Institute.",
      "Developed responsive web applications using HTML, CSS, Bootstrap, and React.js.",
      "Gained hands-on experience in web development and web design principles.",
      "Worked on real-world projects, implementing modern UI/UX best practices.",
      "Enhanced knowledge of frontend frameworks and component-based development in React.js."
    ]
  },
  {
    title: "Full-Stack Intern",
    company_name: "Information Technology Institute (ITI)",
    icon: iti,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2022",
    points: [
      "Selected for an intensive Full-Stack internship initiative by the Information Technology Institute (ITI).",
      "Developed web applications using HTML, CSS, Bootstrap, and React.js for frontend development.",
      "Built and optimized backend services using Node.js, Express, and MongoDB, following the MERN stack.",
      "Designed and implemented RESTful APIs for seamless communication between frontend and backend.",
      "Gained hands-on experience in web development and web design, focusing on responsive UI/UX.",
      "Collaborated with a team of developers on real-world projects, following Agile methodologies.",
      "Enhanced problem-solving skills by working on debugging and optimizing application performance.",
      "Learned industry best practices and modern web development workflows through mentorship and guidance."
    ]
    
  },
  {
    title: "Full-Stack Developer",
    company_name: "TEQNEIA ICT",
    icon: teqneia,
    iconBg: "#E6DEDD",
    date: "June 2022 - June 2023",
    points: [
      "Developed and maintained responsive web applications using React.js, Redux, and Redux Toolkit.",
      "Designed and implemented UI components with Material-UI (MUI) and styled applications using Tailwind CSS.",
      "Built RESTful APIs with Node.js and Express.js, integrating MongoDB for efficient data storage and retrieval.",
      "Collaborated with cross-functional teams to deliver scalable and user-friendly web solutions.",
      "Optimized frontend performance and ensured high accessibility standards for web applications.",
      "Implemented authentication and authorization mechanisms using JWT and middleware in Express.js.",
      "Developed interactive UI/UX experiences, focusing on web design principles and best practices.",
      "Integrated third-party APIs and services to enhance application functionality."
  ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "NasNav",
    icon: nasnav,
    iconBg: "#E6DEDD",
    date: "June 2023 - May 2024",
    points: [
      "Developed and maintained responsive web applications using React.js (both function and class components), Redux, and Redux Toolkit.",
      "Implemented dynamic UI components with Material UI (MUI), ensuring a modern and accessible user experience.",
      "Styled applications using Sass and CSS, optimizing for performance and maintainability.",
      "Designed and developed RESTful APIs using Node.js and Express.js to handle business logic and data processing.",
      "Integrated MongoDB for efficient data storage and retrieval, optimizing database queries for performance.",
      "Collaborated with UI/UX designers to enhance web design and improve user experience.",
      "Worked on state management using Redux and Redux Toolkit to manage complex application states efficiently.",
      "Developed and deployed full-stack applications, ensuring seamless front-end and back-end communication.",
      "Optimized website performance by implementing best practices in web development and design."
    ]
    
  },
  {
    title: "Instructor",
    company_name: "Digital Egypt Cubs Initiative (DECI)",
    icon: deci,
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Develop and deliver engaging lessons on digital literacy, coding, and robotics for young learners.",
      "Create structured lesson plans to simplify complex technical concepts for students.",
      "Mentor and guide students through hands-on projects, fostering problem-solving and critical-thinking skills.",
      "Assess student progress and provide personalized feedback to enhance their learning experience.",
      "Incorporate interactive teaching methods to maintain high engagement and retention levels.",
      "Encourage innovation and creativity through real-world applications of technology.",
      "Collaborate with fellow instructors to improve curriculum design and delivery."
  ]
  },
  {
    title: "Full-Stack Developer",
    company_name: "ABS Courier",
    icon: abs,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developed and maintained full-stack applications using NestJS, Express, and SQL Server.",
      "Implemented authentication and authorization using JWT, ensuring secure access control.",
      "Built responsive and dynamic front-end interfaces with Next.js, Tailwind CSS, and ShadCN components.",
      "Managed state efficiently with Redux for seamless user experience.",
      "Designed and optimized database queries, including stored procedures, for performance improvement.",
      "Developed reusable backend services and middleware to enhance code maintainability.",
      "Integrated third-party APIs and external services to extend application functionality.",
      "Followed clean code principles, best practices, and scalable architecture patterns.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions."
    ]    
  },
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
    name: "Car Rent",
    description:
      "A dynamic bilingual e-commerce website for automotive control systems and accessories, offering a seamless shopping experience with advanced product search, Alot of Car Services,secure payments, and personalized user accounts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://world-of-control.vercel.app/en",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };