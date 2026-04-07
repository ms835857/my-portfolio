export const projects = [
  { 
    title: 'Naqsha Bazaar', 
    category: 'university projects', 
    img: './assets/images/project-1.jpg', // Preview thumbnail
    media: [
      './assets/images/project-1.jpg',
      './assets/images/project-2.png' // Mock additional media for carousel
    ],
    role: 'Full Stack Developer',
    timeline: '4 Months',
    description: 'University Project - A marketplace platform',
    challenge: 'Architects and engineers lacked a centralized, secure platform to showcase their designs and sell blueprints directly to interested buyers or construction firms without heavy intermediary fees.',
    solution: 'Designed and built Naqsha Bazaar, a specialized marketplace connecting designers with potential buyers. It streamlines the discovery process, offers secure payments, and provides professional presentation tools for structural plans.',
    keyFeatures: [
      'Secure User Authentication & Profiles',
      'Advanced Product Filtering (Property Type, Dimensions)',
      'Integrated Payment Gateway',
      'Real-time Chat between Buyers and Sellers'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'CSS'],
    links: { live: '#', github: '#' }
  },
  { 
    title: 'Anime & Movie Streaming', 
    category: 'university projects', 
    img: './assets/images/project-2.png', 
    media: [
      './assets/images/project-2.png',
      './assets/images/project-1.jpg' 
    ],
    role: 'Frontend Developer',
    timeline: '2 Months',
    description: 'University Project - React-based streaming website',
    challenge: 'Streaming platforms often have cluttered interfaces and poor recommendation systems, making it difficult for users to track overlapping interests in both Western movies and Anime.',
    solution: 'Developed a unified streaming dashboard that aggregates data from multiple APIs. It features a clean, Glassmorphism UI, allowing users to effortlessly search, track, and curate their personal watchlists.',
    keyFeatures: [
      'TMDB API Integration for real-time metadata',
      'Personalized Watchlist synced via Firebase',
      'Responsive, Glassmorphic UI Design',
      'Advanced Search and Genre Filtering'
    ],
    techStack: ['React', 'Firebase', 'TMDB API', 'Tailwind'],
    links: { live: '#', github: '#' }
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
