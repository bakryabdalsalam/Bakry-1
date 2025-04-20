export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "متجر سعودى لبيع العبايات",
    description: "A full-featured e-commerce platform with dynamic product listings, cart functionality, user authentication, and payment processing.",
    image: "/images/p1.svg",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Interactive Dashboard",
    description: "A responsive admin dashboard with real-time data visualization, customizable widgets, and dark/light theme switch.",
    image: "/images/dashboard.jpg",
    tags: ["React", "TypeScript", "D3.js", "Redux", "Styled Components"],
    githubUrl: "https://github.com/username/interactive-dashboard",
    liveUrl: "https://interactive-dashboard.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A social networking application with real-time chat, post creation, user profiles, and notification system.",
    image: "/images/social.jpg",
    tags: ["React", "Firebase", "Socket.io", "Express", "Node.js"],
    githubUrl: "https://github.com/username/social-media-app",
    liveUrl: "https://social-media-app.vercel.app",
    featured: true
  },
  {
    id: 4,
    title: "Task Management Tool",
    description: "A Kanban-style project management tool with drag-and-drop functionality, task assignments, and progress tracking.",
    image: "/images/task-management.jpg",
    tags: ["React", "TypeScript", "Redux", "React DnD", "Firebase"],
    githubUrl: "https://github.com/username/task-management",
    featured: false
  },
  {
    id: 5,
    title: "Weather Application",
    description: "A weather forecast application with location detection, 7-day forecast, and animated weather conditions.",
    image: "/images/weather.jpg",
    tags: ["React", "OpenWeather API", "Geolocation", "CSS Animations"],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://weather-app.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
    image: "/images/portfolio.jpg",
    tags: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.vercel.app",
    featured: false
  }
];

export const skills: Skill[] = [
  { name: "HTML5", icon: "html5", level: 5, category: "frontend" },
  { name: "CSS3", icon: "css3", level: 5, category: "frontend" },
  { name: "JavaScript", icon: "javascript", level: 5, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 4, category: "frontend" },
  { name: "React", icon: "react", level: 5, category: "frontend" },
  { name: "Next.js", icon: "nextjs", level: 4, category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", level: 5, category: "frontend" },
  { name: "Redux", icon: "redux", level: 4, category: "frontend" },
  { name: "SASS/SCSS", icon: "sass", level: 4, category: "frontend" },
  { name: "Styled Components", icon: "styled-components", level: 4, category: "frontend" },
  { name: "Framer Motion", icon: "framer", level: 4, category: "frontend" },
  { name: "Node.js", icon: "nodejs", level: 3, category: "backend" },
  { name: "Express.js", icon: "express", level: 3, category: "backend" },
  { name: "MongoDB", icon: "mongodb", level: 3, category: "backend" },
  { name: "Firebase", icon: "firebase", level: 4, category: "backend" },
  { name: "REST API", icon: "api", level: 4, category: "backend" },
  { name: "GraphQL", icon: "graphql", level: 3, category: "backend" },
  { name: "Figma", icon: "figma", level: 4, category: "design" },
  { name: "Adobe XD", icon: "adobexd", level: 3, category: "design" },
  { name: "Photoshop", icon: "photoshop", level: 3, category: "design" },
  { name: "Git", icon: "git", level: 4, category: "other" },
  { name: "GitHub", icon: "github", level: 4, category: "other" },
  { name: "Webpack", icon: "webpack", level: 3, category: "other" },
  { name: "Jest", icon: "jest", level: 3, category: "other" },
  { name: "Cypress", icon: "cypress", level: 3, category: "other" }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    duration: "Jan 2022 - Present",
    description: [
      "Led the development of a high-traffic e-commerce platform using React and Next.js, resulting in a 40% increase in conversion rates",
      "Implemented responsive designs and optimized performance, improving page load speed by 60%",
      "Mentored junior developers and conducted code reviews to ensure high code quality"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Frontend Developer",
    duration: "Jun 2020 - Dec 2021",
    description: [
      "Developed and maintained multiple client websites using modern JavaScript frameworks",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
      "Built reusable component libraries that improved development efficiency by 30%"
    ],
    technologies: ["React", "JavaScript", "SASS", "Styled Components", "RESTful APIs"]
  },
  {
    id: 3,
    company: "Creative Web Agency",
    position: "Junior Web Developer",
    duration: "Feb 2019 - May 2020",
    description: [
      "Created responsive landing pages and interactive web applications",
      "Worked closely with the design team to translate mockups into functional interfaces",
      "Participated in agile development processes and sprint planning"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "Tech Innovations Inc.",
    text: "One of the most talented frontend developers I've worked with. Their ability to create beautiful, functional interfaces while maintaining clean code is exceptional.",
    image: "/images/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "Digital Solutions Ltd.",
    text: "Their technical skills combined with an eye for design and user experience make them a rare find. They consistently delivered beyond our expectations.",
    image: "/images/testimonial2.jpg"
  },
  {
    id: 3,
    name: "Emma Williams",
    position: "Creative Director",
    company: "Creative Web Agency",
    text: "A true professional who brings both technical expertise and creative thinking to every project. Their frontend work helped us win several industry awards.",
    image: "/images/testimonial3.jpg"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/username",
    icon: "twitter"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/username",
    icon: "dribbble"
  }
];

export const personalInfo = {
  name: "Bakry Abdelsalam",
  title: "Frontend Developer",
  location: "Cairo, Egypt",
  email: "bakryabdalsalam6@gmail.com",
  phone: "+201018745573",
  bio: "Passionate frontend developer with 5+ years of experience creating modern, responsive web applications. Specializing in React ecosystem and UI/UX implementation. Committed to writing clean, maintainable code and creating exceptional user experiences.",
  resumeUrl: "/resume.pdf"
}; 