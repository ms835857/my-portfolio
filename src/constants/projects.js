export const projects = [
  {
    title: 'Anime & Movie Streaming',
    category: 'university projects',
    img: './assets/images/project-2.png',
    media: [
      './assets/images/animeverse1.png',
      './assets/images/animeverse2.png'
    ],
    role: 'Frontend Developer',
    timeline: '2 Months',
    description: 'University Project - React-based streaming website',
    challenge: {
      paragraphs: [
        'The core objective of this project was the complete architectural overhaul of a traditional media tracking platform. Originally developed as a multi-page application using HTML, CSS, and PHP, the site served as a basic directory for Western cinema and Anime. The challenge lay in migrating this static infrastructure into a high-performance, Single-Page Application (SPA) using React.'
      ],
      bullets: [
        'From Static to Dynamic: Transitioned from PHP-rendered server-side pages to a component-based architecture',
        'Modernizing the UI/UX: Implemented "3D-first" user experience using React-Three-Fiber',
        'Data Handling: Utilized React hooks for real-time search and category toggling',
        'The Deployment Pivot: Adapted for modern hosting environments like GitHub Pages/Vercel'
      ]
    },
    solution: {
      paragraphs: [
        'Developed a unified streaming dashboard that aggregates data from multiple APIs.',
        'Features a clean, Glassmorphism UI, allowing users to effortlessly search, track, and curate their personal watchlists.'
      ],
      bullets: [
        'TMDB API Integration for real-time metadata',
        'Personalized Watchlist synced via Firebase',
        'Responsive, Glassmorphic UI Design',
        'Advanced Search and Genre Filtering'
      ]
    },
    keyFeatures: [
      'TMDB API Integration for real-time metadata',
      'Personalized Watchlist synced via Firebase',
      'Responsive, Glassmorphic UI Design',
      'Advanced Search and Genre Filtering'
    ],
    techStack: ['React', 'Firebase', 'TMDB API', 'Tailwind'],
    links: { live: 'https://ms835857.github.io/streaming-site/', github: 'https://github.com/ms835857/streaming-site' }
  },
  {
    title: 'GOLD Trading Bot',
    category: 'personal projects',
    img: './assets/images/project-3.jpg',
    media: [
      './assets/images/project-3.jpg'
    ],
    badge: 'Ongoing',
    role: 'Algorithm Developer',
    timeline: '6+ Months',
    description: 'Personal Project - Python trading bot for GOLD',
    challenge: 'The XAUUSD (Gold) market is highly volatile, requiring split-second decision-making and strict emotional discipline—factors that human traders frequently struggle to maintain.',
    solution: 'Engineered an automated quantitative trading solution optimized specifically for XAUUSD. The bot utilizes complex trend-following algorithms and technical indicators to execute trades autonomously.',
    keyFeatures: [
      'MetaTrader 5 Native Integration',
      'Dynamic Stop-Loss and Take-Profit Adjustments',
      'Machine Learning enhanced entry signals',
      'Comprehensive Risk Management protocols'
    ],
    techStack: ['Python', 'MetaTrader 5', 'Pandas', 'NumPy'],
    links: { live: '#', github: '#' }
  },
  {
    title: 'Forex Trading Bot',
    category: 'personal projects',
    img: './assets/images/project-4.png',
    media: [
      './assets/images/project-4.png'
    ],
    badge: 'Ongoing',
    role: 'Quantitative Developer',
    timeline: '8+ Months',
    description: 'Personal Project - Python trading bot for Forex',
    challenge: 'Managing positions across multiple currency pairs simultaneously is mathematically intensive and practically impossible for manual retail traders.',
    solution: 'Built a highly versatile, multi-currency Forex Bot with a modular architecture. It supports rapid backtesting of strategies and executes concurrent trades across varying assets based on statistical weighting.',
    keyFeatures: [
      'Multi-currency processing concurrently',
      'Historical Data Backtesting Engine',
      'Statistical Arbitrage Identification',
      'MQL5 Bridge integration for rapid execution'
    ],
    techStack: ['Python', 'MQL5', 'Data Science', 'Automation'],
    links: { live: '#', github: '#' }
  }
];
