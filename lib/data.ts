export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const TECH = [
  { name: "React", icon: "react/react-original" },
  { name: "Next.js", icon: "nextjs/nextjs-original" },
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "Tailwind", icon: "tailwindcss/tailwindcss-original" },
  { name: "Redux", icon: "redux/redux-original" },
  { name: "Node.js", icon: "nodejs/nodejs-original" },
  { name: "Express", icon: "express/express-original" },
  { name: "MongoDB", icon: "mongodb/mongodb-original" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
  { name: "Docker", icon: "docker/docker-original" },
];

export const devicon = (slug: string) =>
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + slug + ".svg";

export const STATS = [
  { value: 2.5, suffix: "+", label: "Years shipping" },
  { value: 30, suffix: "%", label: "Faster page loads" },
  { value: 40, suffix: "%", label: "Fewer network calls" },
];

export const TIMELINE = [
  {
    color: "#0ea5e9",
    period: "Jan 2024 — Aug 2026",
    place: "Noida, India",
    title: "Software Development Engineer I",
    org: "Pantelwar",
    projects: [
      {
        name: "360 One — wealth & data platform",
        bullets: [
          "Shipped a guided Excel upload interface that let non-technical analysts self-serve data operations, cutting upload time ~30%.",
          "Engineered a schema-driven import/export engine in Strapi that auto-generates ingestion logic — removing ~80% of hardcoded mappings.",
          "Designed 6+ REST APIs in Node.js integrated with Next.js for analyst-facing previews, reducing export errors ~20%.",
        ],
      },
      {
        name: "Fingyani — multi-broker trading platform",
        bullets: [
          "Built the trading frontend from scratch in Next.js and MUI v5 — page loads up to 30% faster on a latency-sensitive product.",
          "Cut redundant network requests ~40% with RTK Query caching and tuned request lifecycles.",
          "Standardised API contracts across frontend and backend, decreasing integration bugs ~20%.",
        ],
      },
    ],
  },
  {
    color: "#2ec4b6",
    period: "Aug 2023 — Jan 2024",
    place: "Remote",
    title: "Software Development Intern — Full Stack",
    org: "Zluri",
    bullets: [
      "Automated onboarding and offboarding workflows across 10+ SaaS applications.",
      "Delivered 4+ production features with cross-functional product, design and backend teams.",
      "Lowered UI–backend fetch errors ~15% through improved data synchronisation.",
    ],
  },
  {
    color: "#8ea6c4",
    period: "Aug 2019 — Jul 2023",
    place: "New Delhi",
    title: "B.Tech, Computer Science & Engineering",
    org: "HMR Institute of Technology and Management · GPA 8.5 / 10",
  },
  {
    color: "#c3d3e4",
    period: "May 2005 — Jul 2019",
    place: "",
    title: "CBSE Boards",
    org: "Vidya Jain Public School · GPA 8.6 / 10",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: "layout-dashboard",
    tint: { bg: "#e8f6fe", border: "#d3e9f8", fg: "#1c5a78" },
    skills: [
      { label: "React.js", icon: "react/react-original" },
      { label: "Next.js", icon: "nextjs/nextjs-original" },
      { label: "Redux Toolkit", icon: "redux/redux-original" },
      { label: "RTK Query", icon: "redux/redux-original" },
      { label: "Material UI", icon: "materialui/materialui-original" },
      { label: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
      { label: "Framer Motion", lucide: "wand-sparkles" },
      { label: "Formik", lucide: "text-cursor-input" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    tint: { bg: "#e6f9f6", border: "#cfeeea", fg: "#117f74" },
    skills: [
      { label: "Node.js", icon: "nodejs/nodejs-original" },
      { label: "Express.js", icon: "express/express-original" },
      { label: "REST APIs", lucide: "webhook" },
      { label: "JWT Auth", lucide: "key-round" },
      { label: "Socket.IO", icon: "socketio/socketio-original" },
      { label: "PostgreSQL", icon: "postgresql/postgresql-original" },
      { label: "MongoDB", icon: "mongodb/mongodb-original" },
    ],
  },
  {
    title: "Languages & Tooling",
    icon: "wrench",
    tint: { bg: "#eef3f9", border: "#dde7f1", fg: "#5b7089" },
    skills: [
      { label: "TypeScript", icon: "typescript/typescript-original" },
      { label: "C", icon: "c/c-original" },
      { label: "C++", icon: "cplusplus/cplusplus-original" },
      { label: "Java", icon: "java/java-original" },
      { label: "JavaScript ES6+", icon: "javascript/javascript-original" },
      { label: "HTML5", icon: "html5/html5-original" },
      { label: "CSS3", icon: "css3/css3-original" },
      { label: "Docker", icon: "docker/docker-original" },
      { label: "Git", icon: "git/git-original" },
      { label: "Jira", icon: "jira/jira-original" },
      { label: "GA & GTM", lucide: "chart-line" },
    ],
  },
  {
    title: "Practices",
    icon: "gauge",
    tint: { bg: "#f2f0ff", border: "#e3dffb", fg: "#5b56c4" },
    skills: [
      { label: "Frontend performance" },
      { label: "SSR & caching" },
      { label: "API contract design" },
      { label: "Responsive UI" },
      { label: "Code reviews" },
      { label: "Cross-functional collaboration" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Fingyani — Trading Platform",
    body: "Multi-broker stock trading frontend built from scratch; up to 30% faster page loads and 40% fewer network calls.",
    tags: [
      { label: "Next.js", icon: "nextjs/nextjs-original" },
      { label: "MUI v5", icon: "materialui/materialui-original" },
      { label: "RTK Query", icon: "redux/redux-original" },
    ],
    slot: "PROJECT SHOT — Fingyani trading UI",
    link: "https://fingyani.com/",
    screenshot: "/fingyani-screenshot.png",
  },
  {
    title: "360 One — Data Platform",
    body: "Schema-driven Excel import/export engine with validation previews — ~80% fewer hardcoded mappings, ~30% faster uploads.",
    tags: [
      { label: "Next.js", icon: "nextjs/nextjs-original" },
      { label: "Strapi", simpleIcon: "strapi" },
      { label: "PostgreSQL", icon: "postgresql/postgresql-original" },
    ],
    slot: "PROJECT SHOT — 360 One upload flow",
  },
  {
    title: "Chatify — Realtime Chat",
    body: "MERN chat app with Socket.IO messaging, live presence, JWT auth and modular group/private rooms.",
    tags: [
      { label: "MERN", icon: "mongodb/mongodb-original" },
      { label: "Socket.IO", icon: "socketio/socketio-original" },
      { label: "Chakra UI", simpleIcon: "chakraui" },
    ],
    slot: "PROJECT SHOT — Chatify",
    link: "https://chat-app-lpen.onrender.com/",
    screenshot: "/chatify-screenshot.png",
  },
  {
    title: "Shopping Website Frontend",
    body: "Responsive e-commerce frontend with browsing, cart and wishlist across mobile, tablet and desktop.",
    tags: [
      { label: "HTML5", icon: "html5/html5-original" },
      { label: "CSS3", icon: "css3/css3-original" },
      { label: "JavaScript", icon: "javascript/javascript-original" },
    ],
    slot: "PROJECT SHOT — Shopping website",
    link: "https://github.com/Rohanjain96/Shopping-website",
    screenshot: "/shopping-screenshot.png",
  },
  {
    title: "Tic Tac Toe with AI",
    body: "C++ graphics game with a Minimax-based AI opponent and mouse-clickable moves.",
    tags: [
      { label: "C++", icon: "cplusplus/cplusplus-original" },
      { label: "Minimax AI" },
    ],
    slot: "PROJECT SHOT — Tic Tac Toe",
    link: "https://github.com/Rohanjain96/Tictactoegame",
    screenshot: "/tictactoe-screenshot.png",
  },
  {
    title: "Hangman Game",
    body: "C graphics word-guessing game with three difficulty levels of 3, 4 and 5-letter words.",
    tags: [{ label: "C", icon: "c/c-original" }],
    slot: "PROJECT SHOT — Hangman",
    link: "https://github.com/Rohanjain96/Hangman-Game",
    screenshot: "/hangman-screenshot.png",
  },
  {
    title: "Minesweeper",
    body: "Classic Minesweeper clone with flagging, a mine counter and cascading cell reveals.",
    tags: [
      { label: "JavaScript", icon: "javascript/javascript-original" },
      { label: "HTML5", icon: "html5/html5-original" },
    ],
    slot: "PROJECT SHOT — Minesweeper",
    link: "https://minesweeper-game123.netlify.app/",
    screenshot: "/minesweeper-screenshot.png",
  },
];

export const CONTACT = {
  email: "jain.rohan911@gmail.com",
  phone: "+91 80767 35870",
  phoneHref: "tel:+918076735870",
  location: "New Delhi, India · Open to remote",
  github: "https://github.com/Rohanjain96",
  linkedin: "https://linkedin.com/in/rohanjain2002",
};

export const ENGAGEMENTS = [
  "Full-time role",
  "Contract",
  "Freelance project",
  "Just saying hi",
];
