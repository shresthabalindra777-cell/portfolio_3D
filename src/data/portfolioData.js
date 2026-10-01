/**
 * =========================================================================
 * BALINDRA'S PERSONAL PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Cloned and customized to match https://harshith-portfolio-mu.vercel.app/
 */

export const personalInfo = {
  // Name & Branding
  name: "BALINDRA",
  firstName: "BALINDRA",
  lastName: "",
  fullName: "Balindra",
  initials: "B",

  // Role & Headings
  primaryRole: "Full Stack Developer and Designer",
  rolePrefix: "A Full Stack",
  rolesRotator: [
    "Developer",
    "Designer",
    "Creative Tech"
  ],

  // Short statement for Hero section
  heroSubtitle: "Turning ideas into things people can actually use. Building websites, experimenting with modern technologies, and creating tools that make everyday tasks simpler and more efficient.",

  // Status
  availabilityStatus: "Available for new opportunities",
  availabilityIndicator: true,

  // Location & Contact
  location: "Bangalore, India",
  email: "shrestha.balindra777@gmail.com",
  phone: "+91 7204185067",

  // Character 3D Model
  characterModelPath: "/models/portfolio_character_eye_symmetries.glb",
  characterEnvPath: "/models/char_enviorment.hdr",

  // About Section (exact text specified by Balindra)
  about: {
    heading: "About Me",
    statement: "I’m a web developer who enjoys turning ideas into things people can actually use. I love building websites, experimenting with new technologies, and creating tools that make everyday tasks simpler and more efficient. I’m always curious to learn, improve my skills, and find better ways to bring creative ideas to life.",
    interests: ["Full Stack Development", "Modern Web Design", "Machine Learning & AI", "Performance Optimization", "Creative UI/UX"],
    careerGoals: "Building impactful digital products, mastering cutting-edge full stack technologies, and continuously pushing creative boundaries in web engineering."
  }
};

// Social links
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/shresthabalindra777-cell",
    username: "@shresthabalindra777-cell",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://in.linkedin.com/in/balindra-shrestha-137445250",
    username: "in/balindra-shrestha-137445250",
    icon: "Linkedin"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bailedforgood21?stkn=eGNqbzdnY2V0OWh1&utm_source=qr",
    username: "@bailedforgood21",
    icon: "Instagram"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/balindra_tech",
    username: "@balindra_tech",
    icon: "Twitter"
  }
];

// Key metrics
export const keyMetrics = [
  {
    label: "Core Specialization",
    value: "Full Stack",
    description: "Web development & UI/UX design"
  },
  {
    label: "Location Base",
    value: "Bangalore",
    description: "Silicon Valley of India"
  },
  {
    label: "Problem Solving",
    value: "100%",
    description: "Turning ideas into real-world tools"
  },
  {
    label: "Continuous Learning",
    value: "Always",
    description: "Experimenting with modern tech"
  }
];

// What I Do (matching reference site's WHAT I DO section)
export const whatIDo = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description: "Architecting and engineering responsive, scalable web applications from scratch using modern frameworks and secure APIs.",
    tags: ["React", "Next.js", "Node.js", "Python", "SQL", "HTML/CSS/JS"],
    capabilities: "Interactive Frontends, RESTful APIs, Database Design, Scalable Architecture"
  },
  {
    id: "02",
    title: "UI/UX & Creative Design",
    description: "Designing modern, cinematic, and functional user interfaces with subtle micro-interactions, dark mode aesthetics, and seamless user journeys.",
    tags: ["Figma", "Design Systems", "Motion UI", "Typography", "Responsive Layouts"],
    capabilities: "Visual Identity, Interactive Prototypes, Mobile-First Design, Usability"
  },
  {
    id: "03",
    title: "Machine Learning & Data Models",
    description: "Developing data-driven solutions, regression forecasting pipelines, and intelligent predictive algorithms.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Model Training", "Data Visualization"],
    capabilities: "Price Forecasting, Exploratory Data Analysis, Feature Engineering, Automation"
  },
  {
    id: "04",
    title: "Digital Strategy & Growth Engineering",
    description: "Combining marketing intelligence with technical precision to optimize web platforms for conversions, traffic, and search performance.",
    tags: ["Technical SEO", "Conversion Rate", "Funnel Analytics", "Performance Auditing"],
    capabilities: "Growth Optimization, Search Visibility, User Acquisition, Campaign Strategy"
  }
];

// MY TECH STACK (9 core technologies: Python, SQL, HTML, CSS, JavaScript, Pandas, Node, Next, React)
export const techStackData = [
  { 
    name: "Python", 
    category: "Backend & ML", 
    level: "Advanced", 
    icon: "Code", 
    highlight: true,
    description: "Backend architecture, data pipelines, automation scripting, and ML integration."
  },
  { 
    name: "SQL", 
    category: "Database", 
    level: "Advanced", 
    icon: "Database", 
    highlight: true,
    description: "Relational database schema modeling, indexing, and high-performance querying."
  },
  { 
    name: "HTML", 
    category: "Frontend Core", 
    level: "Expert", 
    icon: "Layers", 
    highlight: false,
    description: "Semantic page structure, SEO accessibility standards, and clean DOM architecture."
  },
  { 
    name: "CSS", 
    category: "Styling & Motion", 
    level: "Expert", 
    icon: "Sparkles", 
    highlight: false,
    description: "Modern responsive grid systems, fluid layouts, and cinematic visual styling."
  },
  { 
    name: "JavaScript", 
    category: "Languages", 
    level: "Advanced", 
    icon: "Code", 
    highlight: true,
    description: "Interactive client-side logic, asynchronous APIs, and dynamic state workflows."
  },
  { 
    name: "Pandas", 
    category: "Data Science", 
    level: "Advanced", 
    icon: "Database", 
    highlight: true,
    description: "Data wrangling, automated transformations, and statistical exploratory analysis."
  },
  { 
    name: "Node", 
    category: "Backend", 
    level: "Advanced", 
    icon: "Terminal", 
    highlight: true,
    description: "Scalable server runtimes, event-driven REST microservices, and backend tooling."
  },
  { 
    name: "Next", 
    category: "Framework", 
    level: "Advanced", 
    icon: "Layers", 
    highlight: true,
    description: "Production SSR/SSG web platforms, server components, and optimized routing."
  },
  { 
    name: "React", 
    category: "Frontend", 
    level: "Advanced", 
    icon: "Layers", 
    highlight: true,
    description: "Component architecture, dynamic hooks state management, and modern UI systems."
  }
];

// Featured Projects (Portfolio website, BLX Website, Price Prediction Model)
export const projectsData = [
  {
    id: "01",
    title: "Personal Portfolio Website",
    category: "Full Stack & 3D Interactive Design",
    year: "2026",
    description: "A cinematic personal developer portfolio featuring an animated 3D Asian character with real-time head tracking, custom Three.js lighting, obsidian dark aesthetics, and React Bits micro-interactions.",
    image: "/assets/project-balin-portfolio.jpg",
    tools: "Three.js • React • GSAP • HTML/CSS/JS • Vite",
    stats: "Interactive 3D model, 60fps animations, 100% responsive",
    liveUrl: "https://shresthabalindra777-cell.github.io/balin-website/",
    githubUrl: "https://github.com/shresthabalindra777-cell",
    featured: true
  },
  {
    id: "02",
    title: "BLX Website",
    category: "Real Estate & Digital Growth Platform",
    year: "2025",
    description: "Production web platform built for BLX Realty integrating digital marketing pipelines, high-converting property showcase interfaces, and streamlined lead capture workflows.",
    image: "/assets/project-blx-realty.jpg",
    tools: "React • Next.js • Node.js • CSS • REST APIs",
    stats: "Increased qualified property leads and page engagement by 45%",
    liveUrl: "https://your-dream-home-finder-ozwtztwnp-shresthabalindra777-3828.vercel.app/",
    githubUrl: "https://github.com/shresthabalindra777-cell",
    featured: true
  },
  {
    id: "03",
    title: "Price Prediction Model",
    category: "Machine Learning & Predictive Analytics",
    year: "2024",
    description: "Data-driven price prediction model leveraging machine learning regression algorithms to forecast real estate and market valuations based on historical multi-variate features.",
    image: "/assets/project-price-prediction.jpg",
    tools: "Python • Pandas • NumPy • Scikit-Learn • SQL",
    stats: "Trained on thousands of historical records with high R² predictive accuracy",
    liveUrl: "https://example.com/price-prediction",
    githubUrl: "https://github.com/shresthabalindra777-cell",
    featured: true
  }
];

// Career / Journey (Full time digital marketing specialist in BLX Realty, Junior developer at computer society of India, Junior accountant in Balaji chemicals)
export const experienceData = [
  {
    id: "exp-1",
    company: "BLX Realty",
    position: "Full Time Digital Marketing Specialist",
    duration: "2024 - PRESENT",
    location: "Bangalore, India",
    description: "Spearheading digital marketing strategy, online presence, web optimization, and customer lead acquisition funnels for premium real estate projects.",
    responsibilities: [
      "Designed and managed full-funnel digital marketing campaigns resulting in significant qualified lead generation.",
      "Optimized website user experience, landing page conversions, and digital analytics tracking.",
      "Collaborated on tech-enabled promotional campaigns across web and social channels."
    ],
    skills: ["Digital Marketing", "Web Analytics", "Lead Funnels", "Campaign Strategy", "UI/UX"]
  },
  {
    id: "exp-2",
    company: "Computer Society of India",
    position: "Junior Developer",
    duration: "2023 - 2024",
    location: "Bangalore, India",
    description: "Contributed to website development, software maintenance, technical workshop coordination, and digital portal features.",
    responsibilities: [
      "Built and maintained responsive web interfaces using HTML, CSS, JavaScript, and React.",
      "Assisted in backend database queries and testing web application features for community members.",
      "Collaborated with senior engineers on coding standards and modular component development."
    ],
    skills: ["JavaScript", "HTML/CSS", "React", "SQL", "Web Development"]
  },
  {
    id: "exp-3",
    company: "Balaji Chemicals",
    position: "Junior Accountant",
    duration: "2022 - 2023",
    location: "Bangalore, India",
    description: "Managed financial records, inventory ledger tracking, transactional reconciliation, and systematic accounting operations.",
    responsibilities: [
      "Maintained accurate ledger bookkeeping, invoicing, and transactional logs using accounting tools.",
      "Streamlined data reporting and financial records using structured spreadsheet workflows.",
      "Ensured rigorous compliance, attention to detail, and timely reconciliation of balances."
    ],
    skills: ["Financial Analysis", "Data Accuracy", "Record Management", "Attention to Detail"]
  }
];

// Navigation menu links
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "What I Do", href: "#services" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
