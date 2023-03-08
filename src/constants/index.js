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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  cplusplus,
  ecommerceLibrary,
  googleClone,
  self,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
];

const experiences = [
  {
    title: "Website Freelancer",
    company_name: "Self Employed",
    icon: self,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Deliver high quality websites to clients in a fashionable deadline.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Communicate with clients to better understand the needs and desires of their website.",
    ],
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
    name: "Ecommerce Library Platform",
    description:
      "Online Library that had a selection of books to be purchased by the user, with full functionality. Users can browse their favorite books, view descriptions, and add to cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "loading-state",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceLibrary,
    source_code_link: "https://github.com/zeeshanm02/eccomerce-library-react.git",
    webPage_code_link: "https://eccomerce-library-react-in2e.vercel.app/",
  },
  {
    name: "Google Clone",
    description:
      "A Google Clone that integrates Google's API with the end goal to produce a very similar output. Successfully getting input from the Google API, the website displays the information through images, links, titles, and descriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: googleClone,
    source_code_link: "https://github.com/zeeshanm02/google-react-clone.git",
    webPage_code_link: "https://google-react-clone-seven.vercel.app/",
  },
 
];

export { services, technologies, experiences, testimonials, projects };