import {
  backend,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  ai,
  idsfintech,
  flight,
  reactrest,
  clothesshop,
  threejs,
  asp,
  python,
  spring,
  laravel,
  block,
  movie,
  solidity,
  php,
  ubuntu,
  kali,
  csharp,
  mssql,
  jquery,
  asm,
  tensor,
  api,
  c,
  facedetect,
  java,
  mysql,} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Ai Developer",
    icon: backend,
  },
  {
    title: "WebAPI Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "C++ Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name:"Laravel",
    icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "python",
    icon: python,
  },
  {
    name: "AI",
    icon: ai,
  },
  {
    name: "tensorflow",
    icon: tensor,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Java",
    icon:java,
  }, 
  {
    name: "SpringBoot",
    icon: spring,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "ASP.NETCore",
    icon: asp,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "mssql",
    icon: mssql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "blockchain",
    icon: block,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "assembly",
    icon: asm,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "Kali",
    icon: kali,
  },
];

const experiences = [
  {
    title: "WebAPI Developer Intern",
    company_name: "IDS Fintech",
    icon: idsfintech,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      " Designed and implemented RESTful APIs using ASP.NET Core framework, including handling HTTP requests and responses, creating data models, and implementing CRUD operations using Entity Framework Core. ",
      " Microsoft SQL Database ",
      " Worked with popular tools and technologies commonly used in the development of ASP.NET Core web APIs, such as Visual Studio, Git, and Postman" ,
      " Gained hands-on experience working on real-world projects and collaborating with other developers.",
      " Successfully deployed a fully functional ASP.NET Core Web API to a cloud-based platform." ,
       "Participated in team meetings, code reviews, and discussions to ensure the project's success.",
    ],
  },
];


const projects = [
  {
    name: "Flight Management System",
    description:
      "Java Application System that allows users to search, book,delete and manage tickets from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: flight,
    source_code_link: "https://github.com/mustafakataya00/FlightManagementSystem",
  },
  {
    name: "Restaurant App",
    description:
      "The React Restaurant App is a front-end application developed using the React JavaScript library. It provides a user-friendly interface for customers to browse a restaurant's menu, place orders, and make reservations. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactrest,
    source_code_link: "https://github.com/mustafakataya00/restaurantApp",
  },
  {
    name: "E-Commerce Website",
    description:
      "An e-commerce website for a clothes shop is an online platform designed to sell clothing and related products over the internet. It provides customers with an interactive and convenient shopping experience. The website typically includes features such as product listings with detailed descriptions, images, and pricing information. It may offer search and filtering options to help customers find specific items. Additionally, it usually includes a shopping cart .",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: clothesshop,
    source_code_link: "https://github.com/mustafakataya00/ClothesShop",
  },
  {
    name: "Facial Expression Detection",
    description:
      "Facial expression detection is a technology that aims to identify and analyze human emotions by analyzing facial expressions. It utilizes computer vision techniques and machine learning algorithms to detect and classify various facial expressions such as happiness, sadness, anger, surprise, and more",
    tags: [
      {
        name: "Ai",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: facedetect,
    source_code_link: "https://github.com/mustafakataya00/Facial_Expression_Detection",
  },  {
    name: "Movie App",
    description:
      "A Movie React App is a web application built using the React JavaScript library that allows users to browse and search for movies.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/mustafakataya00/ReactMovieApp",
  },
  {
    name: "AdventureWorks API",
    description:
      "The AdventureWorks API project is a web application that serves as an API (Application Programming Interface) for accessing and managing data from the AdventureWorks database.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "green-text-gradient",
      },
      {
        name: "Web API",
        color: "pink-text-gradient",
      },
    ],
    image: api,
    source_code_link: "https://github.com/mustafakataya00/AdventureWorks2012WebAPI",
  },
];

export { services, technologies, experiences, projects };
