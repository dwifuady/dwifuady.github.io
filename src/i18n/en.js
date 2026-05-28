export default {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    name: 'Septian Dwi Fuady',
    title: 'Software Engineer',
    tagline: 'Building reliable digital solutions since 2015',
    cta: 'Get in touch',
  },
  about: {
    heading: 'About Me',
    bio: 'I am a Software Engineer with over 9 years of experience in web development, specializing in the C#/.NET ecosystem. I focus on building scalable, maintainable, and user-friendly applications that solve real problems.',
    highlights: [
      '9+ years in web development',
      'C# / .NET ecosystem specialist',
      'Full-stack capable',
      'Clean architecture advocate',
    ],
  },
  experience: {
    heading: 'Experience & Skills',
    skills: 'Technical Skills',
    skillList: ['C# / .NET', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'JavaScript / TypeScript', 'Vue.js', 'REST API', 'Azure / AWS'],
    timeline: [
      { year: '2023 \u2014 Present', role: 'Senior Software Engineer', company: 'Tech Company', desc: 'Leading the frontend team in developing a SaaS platform.' },
      { year: '2021 \u2014 2023', role: 'Software Engineer', company: 'Digital Startup', desc: 'Developed full-stack applications with React, Node.js, and PostgreSQL.' },
      { year: '2019 \u2014 2021', role: 'Frontend Developer', company: 'Creative Agency', desc: 'Built interactive websites for various clients. Specialized in Vue.js.' },
      { year: '2015 \u2014 2019', role: 'Junior Developer', company: 'IT Company', desc: 'Started web development career with HTML, CSS, JavaScript, and PHP.' },
    ],
  },
  projects: {
    heading: 'Projects',
    empty: 'More projects coming soon.',
    items: [
      {
        title: 'SaaS Dashboard',
        desc: 'Real-time analytics dashboard built with Vue 3 and .NET Core. Features interactive charts, role-based access, and WebSocket live updates.',
        tags: ['Vue 3', '.NET Core', 'PostgreSQL', 'SignalR'],
      },
      {
        title: 'E-Commerce API',
        desc: 'High-performance RESTful API for an e-commerce platform. Handles 10k+ concurrent users with Redis caching and Azure deployment.',
        tags: ['ASP.NET Core', 'Redis', 'Azure', 'SQL Server'],
      },
      {
        title: 'Internal Tools Suite',
        desc: 'Collection of internal productivity tools including a task manager, document generator, and team dashboard.',
        tags: ['Vue.js', 'C#', 'Entity Framework', 'REST API'],
      },
    ],
  },
  contact: {
    title: 'Let\'s Connect',
    subtitle: 'I\'m always open to new opportunities and interesting conversations.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  footer: {
    copyright: '\u00a9 2026 Septian Dwi Fuady',
    tagline: 'Built with Vue & TailwindCSS',
  },
}
