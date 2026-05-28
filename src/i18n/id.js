export default {
  nav: {
    home: 'Beranda',
    about: 'Tentang',
    experience: 'Pengalaman',
    projects: 'Proyek',
    contact: 'Kontak',
  },
  hero: {
    greeting: 'Halo, saya',
    name: 'Septian Dwi Fuady',
    title: 'Software Engineer',
    tagline: 'Membangun solusi digital yang andal sejak 2015',
    cta: 'Hubungi saya',
  },
  about: {
    heading: 'Tentang Saya',
    bio: 'Saya adalah seorang Software Engineer dengan pengalaman lebih dari 9 tahun di pengembangan web, khususnya ekosistem C#/.NET. Saya fokus pada pembuatan aplikasi yang scalable, maintainable, dan user-friendly yang menyelesaikan masalah nyata.',
    highlights: [
      '9+ tahun pengalaman web',
      'Spesialis ekosistem C# / .NET',
      'Full-stack capable',
      'Advokat clean architecture',
    ],
  },
  experience: {
    heading: 'Pengalaman & Keahlian',
    skills: 'Keahlian Teknis',
    skillList: ['C# / .NET', 'ASP.NET Core', 'SQL Server', 'Entity Framework', 'JavaScript / TypeScript', 'Vue.js', 'REST API', 'Azure / AWS'],
    timeline: [
      { year: '2023 \u2014 Sekarang', role: 'Senior Software Engineer', company: 'Perusahaan Teknologi', desc: 'Memimpin tim frontend dalam mengembangkan platform SaaS.' },
      { year: '2021 \u2014 2023', role: 'Software Engineer', company: 'Startup Digital', desc: 'Mengembangkan aplikasi full-stack dengan React, Node.js, dan PostgreSQL.' },
      { year: '2019 \u2014 2021', role: 'Frontend Developer', company: 'Agensi Kreatif', desc: 'Membangun website interaktif untuk berbagai klien. Spesialisasi Vue.js.' },
      { year: '2015 \u2014 2019', role: 'Junior Developer', company: 'Perusahaan IT', desc: 'Memulai karir di pengembangan web dengan HTML, CSS, JavaScript, dan PHP.' },
    ],
  },
  projects: {
    heading: 'Proyek',
    empty: 'Proyek lainnya segera hadir.',
    items: [
      {
        title: 'Dashboard SaaS',
        desc: 'Dashboard analitik real-time dibangun dengan Vue 3 dan .NET Core. Fitur grafik interaktif, akses berbasis peran, dan live update via WebSocket.',
        tags: ['Vue 3', '.NET Core', 'PostgreSQL', 'SignalR'],
      },
      {
        title: 'API E-Commerce',
        desc: 'RESTful API performa tinggi untuk platform e-commerce. Menangani 10rb+ pengguna bersamaan dengan Redis caching dan deployment Azure.',
        tags: ['ASP.NET Core', 'Redis', 'Azure', 'SQL Server'],
      },
      {
        title: 'Suite Alat Internal',
        desc: 'Kumpulan alat produktivitas internal termasuk manajer tugas, generator dokumen, dan dashboard tim.',
        tags: ['Vue.js', 'C#', 'Entity Framework', 'REST API'],
      },
    ],
  },
  contact: {
    title: 'Mari Terhubung',
    subtitle: 'Saya selalu terbuka untuk peluang baru dan percakapan menarik.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  footer: {
    copyright: '\u00a9 2026 Septian Dwi Fuady',
    tagline: 'Dibangun dengan Vue & TailwindCSS',
  },
}
