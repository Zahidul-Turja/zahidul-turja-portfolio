import {
  FaCss3Alt,
  FaFigma,
  FaGoogle,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDjango,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiReactquery,
  SiSupabase,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BsStripe } from "react-icons/bs";

export const BlogItems = [
  {
    id: "react-hooks",
    title: "Popular Hooks in React",
    tags: ["Hooks", "React.js", "Next.js", "Frontend"],
    image: "/blog-images/react-hooks/cover-react-hooks.jpg",
    imageHover: "/blog-images/react-hooks/hover-react-hooks.png",
  },
  {
    id: "blog-2",
    title: "Example of A Closure Error in React",
    tags: ["useState", "React.js", "Closure"],
    image: "wild-oasis-client.png",
    imageHover: "wild-oasis-client.png",
  },
  // {
  //   id: "blog-3",
  //   title: "React Query",
  //   tags: ["React.js", "Next.js", "Tenstack"],
  //   image: "avatar-03.jpg",
  //   imageHover: "avatar-03.jpg",
  // },
  // {
  //   id: "blog-4",
  //   title: "Hooks in React",
  //   tags: ["React.js", "Next.js", "Hooks"],
  //   image: "avatar-01.jpeg",
  //   imageHover: "avatar-01.jpeg",
  // },
];

export const BlogDetails = {
  "react-hooks": {
    title: "Popular Hooks in React",
    date: "2022-01-01",
    tags: ["Hooks", "React.js", "Next.js", "Frontend"],
    image: "/blog-images/react-hooks/cover-react-hooks.jpg",
    description:
      "Hooks let you use state and other React features without writing a class. They are a great way to share state between components. Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. Here we'll look at some of the most popular built-in Hooks in React.",
    subs: [
      {
        title: "useState Hook",
        image: "/blog-images/react-hooks/react-hooks-useState.png",
        para: "useState hook is one of the State Hooks in react which allows the user to add state to functional components. State lets a component remember information it needs to know and that it should re-render when certain values change. This example shows a simple counter where the state (count) starts at 0 and increments when the button is clicked. setCount is the function to update the state.",
      },
      {
        title: "useEffect Hook",
        image: "/blog-images/react-hooks/react-hooks-useEffect.png",
        para: "Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code. This example uses useEffect to create a timer that updates every second. The useEffect hook is responsible for starting the timer when the component mounts and cleaning up when it unmounts.",
      },
      {
        title: "useContext Hook",
        image: "/blog-images/react-hooks/react-hooks-useContext.png",
        para: "Context lets a component receive information from distant parents without passing it as props. For example, your app's top-level component can pass the current UI theme to all components below, no matter how deep. This removes the 'Pop Drilling' problem which can be extrimely annoying. The useContext hook is responsible for passing the theme to the top-level component and works as a Global Provider.Here, in the provided code snippet, useContext provides a user object to deeply nested components (ComponentC) without passing it as a prop through every layer of the component tree.",
      },
      {
        title: "useReducer Hook",
        image: "/blog-images/react-hooks/react-hooks-useReducer.png",
        para: "This is another one of the State Hooks in React. useReducer is like useState, but for more complex state logic. It is often used when state transitions depend on more complex actions. useReducer returns an array with exactly two items: the current state which provides as the name suggests, the current value of the state and the dispatch function that lets you change it in response to interections with your application. It is used in combination with the reducer hook. This example uses useReducer to implement a counter. The reducer function manages different actions (increment, decrement) that alter the state.",
      },
      {
        title: "useRef Hook",
        image: "/blog-images/react-hooks/react-hooks-useRef.png",
        para: "Refs let a component hold some information that isn't used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs, creating animations etc. In this example, useRef is used to access a DOM element (input) directly, allowing the button to programmatically focus the input field without causing a re-render.",
      },
      {
        title: "useOptimistic Hook",
        image: "/blog-images/react-hooks/react-hooks-useOptimistic.png",
        para: "useOptimistic is a React Hook that lets you show a different state while an async action is underway. It accepts some state as an argument and returns a copy of that state that can be different during the duration of an async action such as a network request. You provide a function that takes the current state and the input to the action, and returns the optimistic state to be used while the action is pending. This state is called the “optimistic” state because it is usually used to immediately present the user with the result of performing an action, even though the action actually takes time to complete. Here, useOptimistic is used to update the UI as if an operation has succeeded (e.g., submission), even before the real result from the backend is received.",
      },
    ],
  },
  "blog-2": {
    title: "Example of A Closure Error in React",
    tags: ["React.js", "Next.js", "Frontend"],
    image: "/1-csr-ssr.png",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem? lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
    date: "2022-01-01",
    subs: [
      {
        title: "Creating the error",
        image: "/avatar-01.jpeg",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
      {
        title: "Para 2",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
      {
        title: "Para 3",
        image: "/avatar-01.jpeg",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
    ],
  },
  "blog-3": {
    title: "React Query",
    tags: ["React.js", "Next.js", "Frontend"],
    image: "/avatar-01.jpeg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
    date: "2022-01-01",
    subs: [
      {
        title: "Para 1",
        image: "/avatar-01.jpeg",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
      {
        title: "Para 2",
        image: "/avatar-01.jpeg",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
      {
        title: "Para 3",
        image: "/avatar-01.jpeg",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
    ],
  },
  "blog-4": {
    title: "Hooks in React",
    tags: ["React.js", "Next.js", "Frontend"],
    image: "/avatar-01.jpeg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
    date: "2022-01-01",
    subs: [
      {
        title: "Para 1",
        image: "/avatar-01.jpeg",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
      {
        title: "Para 2",
        image: "/avatar-01.jpeg",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
      {
        title: "Para 3",
        image: "/avatar-01.jpeg",
        para: "lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque modi laudantium dignissimos hic quas quos? Nesciunt eius eos nisi quis a omnis tenetur sunt enim, ut itaque! A, voluptatem?",
      },
    ],
  },
};

export const ProjectItems = [
  {
    id: "dev-edu",
    title: "DevEdu - an educational platform for developers",
    image: "/project-images/devedu.png",
    imageHover: "/project-images/devedu.png",
    description:
      "DevEdu is an e-learning platform designed specifically for the Computer Science domain. This project was developed as part of a Software Engineering course during my Computer Science degree. The project requirements were provided by the course instructor, and the development was completed within a two-month deadline.",
    links: {
      youtube: "https://www.youtube.com/watch?v=yI3u-uOfC3w&t=3s",
      github: "https://github.com/Zahidul-Turja/devedu-an-e-learnig-platform",
      // live: "https://dev-edu.vercel.app/",
    },
    techStack: ["Python", "Javascript", "Django", "Stripe"],
    tags: ["Python", "Javascript", "Django", "Stripe"],
  },
  {
    id: "clothzy",
    title: "Clothzy - a clothing store",
    image: "/project-images/clothzy.png",
    imageHover: "/project-images/clothzy.png",
    description:
      "Clothzy is a dummy e-commerce application developed as a learning project with guidance from YouTube tutorials. Built using React for the frontend and Node.js for the backend, the application allows users to create and manage their own clothing collections. The project was deployed on Render for hosting.",
    links: {
      youtube: "https://www.youtube.com/watch?v=0HRVl44h4do",
      github: "https://github.com/Zahidul-Turja/mern-e-comm",
      live: "https://mern-e-comm-i0h0.onrender.com/",
    },
    techStack: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
      "Stripe",
      "Tailwind",
    ],
    tags: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
      "Stripe",
      "Tailwind",
    ],
  },
  {
    id: "wild-oasis-admin",
    title: "Wild Oasis - admin panel of a hotel",
    image: "/project-images/wild-oasis-admin.png",
    imageHover: "/project-images/hover-wild-oasis-admin.png",
    description:
      "Wild Oasis is a hotel management system, designed to streamline administrative tasks for hotel staff. This web application serves as the admin interface, allowing the receptionist to efficiently add, edit, and delete rooms for customers upon arrival. The system simplifies operations by not requiring online payments, providing a convenient solution for managing bookings. It features multiple filters and sorting options, enabling staff to view room availability over various time periods, such as the last 7 or 90 days.The project was built using React.js for the frontend, React Query for data management, GraphQL, Styled Components for styling, and Supabase for the backend. It was deployed on Vercel, with the backend utilizing the free tier of Supabase. This guided project was developed with the help of online tutorials.",
    links: {
      youtube: "https://youtu.be/QokF-RoPCpQ?si=Tze1EIIWny-DcHLk",
      github: "https://github.com/Zahidul-Turja/wild-oasis-hotel-management",
      live: "https://wild-oasis-hotel-management.vercel.app/dashboard",
    },
    techStack: ["React", "ReactQuery", "GraphQL", "Supabase"],
    tags: ["React", "ReactQuery", "GraphQL", "Supabase"],
  },
  {
    id: "wild-oasis-customer",
    title: "Wild Oasis - customer part of a hotel",
    image: "/project-images/wild-oasis-customer.png",
    imageHover: "/project-images/hover-wild-oasis-customer.png",
    description:
      "Wild Oasis is a hotel management system, specifically designed as the customer-facing web application for a hotel. It enables users to browse available rooms, check real-time availability, and make bookings without conflicts. Customers can also log in seamlessly using their Google accounts. The project was built using Next.js for the framework, Auth.js for authentication, TailwindCSS for styling, and Supabase for database management. This guided project was developed with the help of online tutorials.",
    links: {
      youtube: "https://youtu.be/OSnr-s6iF4s?si=80g4dCNrf9dGKRyW",
      github: "https://github.com/Zahidul-Turja/wild-oasis-customer-side",
      live: "https://wild-oasis-for-guest.vercel.app/",
    },
    techStack: ["Next", "Auth", "Tailwind", "Supabase"],
    tags: ["Next", "Auth", "Tailwind", "Supabase"],
  },
];

export const Projects = {
  "dev-edu": {
    title: "DevEdu",
    subtitle: "an educational platform for developers",
    date: "2022-01-01",
    tags: ["Fullstack", "Django", "Python", "Javascript"],
    image: "/project-images/devedu.png",
    video: "https://www.youtube.com/watch?v=yI3u-uOfC3w&t=3s",
    description:
      "DevEdu is an e-learning platform designed specifically for the Computer Science domain. This project was developed as part of a Software Engineering course during my Computer Science degree. The project requirements were provided by the course instructor, and the development was completed within a two-month deadline.",
    features: [
      "User Authentication and Role-based Authorization (Student, Instructor, Admin)",
      "Full CRUD Functionality (Create, Read, Update, Delete)",
      "Enroll in or Gift Courses",
      "Secure Payment Integration using Stripe API",
      "Advanced Search, Filter, and Sort",
      "Course Reviews and Ratings",
      "Certificate Generation upon Course Completion",
      "Instructor Application Process",
      "Session Management for User Experience",
      "Fully Responsive Design for Seamless Experience across Devices",
    ],
    technologies: ["React.js", "Next.js", "Frontend"],
    links: {
      youtube: "https://www.youtube.com/watch?v=yI3u-uOfC3w&t=3s",
      github: "https://github.com/Zahidul-Turja/devedu-an-e-learnig-platform",
      // live: "https://dev-edu.vercel.app/",
    },
  },

  clothzy: {
    title: "Clothzy",
    subtitle: "a clothing store",
    date: "2022-01-01",
    tags: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
      "Stripe",
      "Tailwind",
    ],
    image: "/project-images/clothzy.png",
    video: "https://www.youtube.com/watch?v=0HRVl44h4do",
    description:
      "Clothzy is a dummy e-commerce application developed as a learning project with guidance from YouTube tutorials. Built using React for the frontend and Node.js for the backend, the application allows users to create and manage their own clothing collections. The project was deployed on Render for hosting.",
    features: [
      "User Authentication and Role-based Authorization (Admin & Buyer)",
      "Secure Access with Tokens for Protected Routes",
      "Full CRUD Functionality (Create, Read, Update, Delete)",
      "Coupons for spending over $200",
      "Secure Payment Integration using Stripe API",
      "Revenue Graph for Admins",
      "Featured Products Display",
    ],
    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
      "Stripe",
      "Tailwind",
    ],
    links: {
      youtube: "https://www.youtube.com/watch?v=0HRVl44h4do",
      github: "https://github.com/Zahidul-Turja/mern-e-comm",
      live: "https://mern-e-comm-i0h0.onrender.com/",
    },
  },

  "wild-oasis-admin": {
    title: "Wild Oasis",
    subtitle: "admin panel of a hotel",
    date: "2022-01-01",
    tags: ["React", "ReactQuery", "GraphQL", "Supabase"],
    image: "/project-images/wild-oasis-admin.png",
    video: "https://youtu.be/QokF-RoPCpQ?si=Tze1EIIWny-DcHLk",
    description:
      "Wild Oasis is a hotel management system, designed to streamline administrative tasks for hotel staff. This web application serves as the admin interface, allowing the receptionist to efficiently add, edit, and delete rooms for customers upon arrival. The system simplifies operations by not requiring online payments, providing a convenient solution for managing bookings. It features multiple filters and sorting options, enabling staff to view room availability over various time periods, such as the last 7 or 90 days.The project was built using React.js for the frontend, React ReactQuery for data management, GraphQL, Styled Components for styling, and Supabase for the backend. It was deployed on Vercel, with the backend utilizing the free tier of Supabase. This guided project was developed with the help of online tutorials.",
    features: [
      "Supabase authentication for secure admin login.",
      "Full CRUD functionality for managing rooms.",
      "Reservation status tracking to avoid booking conflicts.",
      "Visual transaction graphs for insights into hotel operations.",
      "Pagination for easy navigation through data.",
      "Multiple options for sorting and filtering, such as checking room availability over the last 7 or 90 days.",
    ],
    technologies: ["React", "ReactQuery", "GraphQL", "Supabase"],
    links: {
      youtube: "https://youtu.be/QokF-RoPCpQ?si=Tze1EIIWny-DcHLk",
      github: "https://github.com/Zahidul-Turja/wild-oasis-hotel-management",
      live: "https://wild-oasis-hotel-management.vercel.app/dashboard",
    },
  },

  "wild-oasis-customer": {
    title: "Wild Oasis",
    subtitle: "customer part of a hotel",
    date: "2022-01-01",
    tags: ["Next", "Auth", "Tailwind", "Supabase"],
    image: "/project-images/wild-oasis-customer.png",
    video: "https://youtu.be/OSnr-s6iF4s?si=80g4dCNrf9dGKRyW",
    description:
      "Wild Oasis is a hotel management system, specifically designed as the customer-facing web application for a hotel. It enables users to browse available rooms, check real-time availability, and make bookings without conflicts. Customers can also log in seamlessly using their Google accounts. The project was built using Next.js for the framework, Auth.js for authentication, TailwindCSS for styling, and Supabase for database management. This guided project was developed with the help of online tutorials.",
    features: [
      "Google Sign-in with Auth.js for secure and convenient admin access.",
      "Ability to search through cabins quickly.",
      "Filter rooms using various parameters, such as availability over the last 7 or 90 days.",
      "Option to book or reserve rooms for available dates only, preventing double bookings.",
      "Detailed information on all reservations, providing full visibility for staff.",
      "Ability to add additional services, such as breakfast, during the reservation process.",
    ],
    technologies: ["Next", "Auth", "Tailwind", "Supabase"],
    links: {
      youtube: "https://youtu.be/OSnr-s6iF4s?si=80g4dCNrf9dGKRyW",
      github: "https://github.com/Zahidul-Turja/wild-oasis-customer-side",
      live: "https://wild-oasis-for-guest.vercel.app/",
    },
  },
};

export const TechIconsBlackWhite = {
  Next: <RiNextjsLine className="text-slate-50" />,
  React: <FaReact className="text-slate-50" />,
  ReactQuery: <SiReactquery className="text-slate-50" />,
  Redux: <TbBrandRedux className="text-slate-50" />,
  Express: <SiExpress className="text-slate-50" />,
  Auth: <FaGoogle className="text-slate-50" />,
  GraphQL: <SiGraphql className="text-slate-50" />,
  Node: <IoLogoNodejs className="text-slate-50" />,
  Mongodb: <SiMongodb className="text-slate-50" />,
  Tailwind: <RiTailwindCssFill className="text-slate-50" />,
  Chakra: <SiChakraui className="text-slate-50" />,
  Supabase: <SiSupabase className="text-slate-50" />,
  MySQL: <SiMysql className="text-slate-50" />,
  Figma: <FaFigma className="text-slate-50" />,
  Django: <SiDjango className="text-slate-50" />,
  Python: <FaPython className="text-slate-50" />,
  Javascript: <IoLogoJavascript className="text-slate-50" />,
  Stripe: <BsStripe className="text-slate-50" />,
  HTML: <FaHtml5 className="text-slate-50" />,
  CSS: <FaCss3Alt className="text-slate-50" />,
};

export const TechIcons = {
  Next: <RiNextjsLine className="rounded-full bg-slate-50 text-primary-900" />,
  React: <FaReact className="text-[#5ED3F3]" />,
  ReactQuery: <SiReactquery className="text-[#FF4154]" />,
  Redux: <TbBrandRedux className="text-[#7248B6]" />,
  Express: <SiExpress className="text-primary-50" />,
  Auth: <FaGoogle className="rounded-full bg-slate-50 text-primary-900" />,
  GraphQL: <SiGraphql className="text-[#E535AB]" />,
  Node: <IoLogoNodejs className="text-[#428A3C]" />,
  MongoDB: <SiMongodb className="text-[#428A3C]" />,
  Tailwind: <RiTailwindCssFill className="text-[#13B9B3]" />,
  Chakra: <SiChakraui className="text-[#4FD1C5]" />,
  Supabase: <SiSupabase className="text-[#2D7555]" />,
  MySQL: <SiMysql className="text-[#00718B]" />,
  Figma: <FaFigma className="text-secondary-800" />,
  Django: <SiDjango className="bg-slate-50 text-[#092D1F]" />,
  Python: <FaPython className="text-[#366C9C]" />,
  Javascript: <IoLogoJavascript className="text-[#F7E025]" />,
  Stripe: <BsStripe className="text-[#685FFF]" />,
  HTML: <FaHtml5 className="text-[#FF5722]" />,
  CSS: <FaCss3Alt className="text-[#1C76B8]" />,
};
