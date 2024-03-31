import {
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
  mobilestyx,
  neoscript,
  paytm,
  rode,
  shopify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  {
    title: "HTML5",
    icon: html,
  },
  {
    title: "CSS3",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React.js",
    icon: reactjs,
  },
  {
    title: "Redux.js",
    icon: redux,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "Node.js",
    icon: nodejs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
];

export const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "A satija co-operation pvt. ltd.",
    icon: neoscript,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Building reusable code that is scalable and optimized for performance.",
      "Testing, debugging, and optimizing web applications with various tools and techniques (e.g., Chrome DevTools).",
      "Utilizing industry best practices for mobile-first and responsive web application.",
      "Creating appropriate integration strategies with components and APIs.",
    ],
  },
  {
    title: "React Native Developer - Intern",
    company_name: "Mobilestyx Consulting and Solution",
    icon: mobilestyx,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - March 2022",
    points: [
      "Developing and maintaining mobile applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-mobile compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const projects = [
  {
    name: "Paytm Clone",
    description:
      "Creating a Paytm clone using HTML, CSS, and Tailwind CSS involves building a responsive user interface that mimics Paytm's design.Implement key features like transaction cards and a payment form for a visually appealing.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: paytm,
    source_code_link: "https://github.com/robinmahto/Paytm-Clone",
    live_link: "https://paytm-clone-tailwindcss-16.netlify.app/"
  },
  {
    name: "Rode Clone",
    description:
      "Creating a Rode microphone clone with HTML, CSS, and Tailwind CSS for a polished user interface that mirrors Rode's design. Leverage Tailwind CSS for streamlined styling and HTML for structuring the responsive website.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: rode,
    source_code_link: "https://github.com/robinmahto/Rode-Clone",
    live_link: "https://rode-clone-tailwindcss-17.netlify.app/"
  },
  {
    name: "Shopify Clone",
    description:
      "Crafting a Shopify clone with HTML, CSS, and Tailwind CSS for a responsive and visually appealing online store interface. Utilize Tailwind CSS utility classes for rapid styling, and HTML for organizing product listings and cart functionalities.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: shopify,
    source_code_link: "https://github.com/robinmahto/Shopify-Clone",
    live_link: "https://shopify-clone-tailwindcss-18.netlify.app/"
  },
];
