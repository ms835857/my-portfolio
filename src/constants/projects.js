export const projects = [
  {
    title: 'Z-Tour',
    category: 'personal projects',
    img: './assets/images/project-9.png',
    media: [
      './assets/images/project-9.png'
    ],
    featured: true,
    badge: 'Ongoing',
    role: 'Solo Developer',
    timeline: 'April 2025 — Present',
    description: 'Personal Project - Interactive 3D Tourism Explorer for Pakistan',
    challenge: {
      paragraphs: [
        'Rendering 80+ destination nodes clustered under 6 hubs in 3D space without overlap or visual clutter was non-trivial. The D3 force simulation needed careful tuning of link distances, charge strengths, and alpha decay.'
      ],
      bullets: [
        'Custom-tuned D3 force parameters — hub-to-center distance scales dynamically with viewport',
        'Multi-dimensional filter system with 5+ axes (category, province, budget, duration, group size)',
        '3D-to-2D screen projection for floating UI cards tracking 3D node position in real-time',
        'Mobile responsiveness for a 3D-heavy app with separate mobile layouts'
      ]
    },
    solution: {
      paragraphs: [
        'Built an immersive, galaxy-themed 3D web application using React 19, Three.js, and react-force-graph-3d featuring over 80 tourism destinations across Pakistan organized into 6 tourism hubs.'
      ],
      bullets: [
        'Custom-tuned D3 force parameters for balanced 3D layout of 80+ nodes',
        'Centralized isNodeVisible callback evaluating all filter axes with .some() logic',
        'graph2ScreenCoords() in requestAnimationFrame loop for real-time 3D-to-2D projection',
        'Separate mobile layouts with bottom sheet drawers and swipeable carousels'
      ]
    },
    keyFeatures: [
      '3D Force Graph: 6 galactic hub octagons + 80+ destination hexagons with neon glow effects',
      'Real-Time Search: Auto-fly camera to matching destination as user types (min 3 chars)',
      'Multi-Axis Filtering: Province, budget, trip duration, group size',
      'Floating Package Cards: Fan-layout cards around selected node with spring animations',
      'Package Detail Modal: Full breakdown with highlights, inclusions, difficulty level',
      'Responsive Design: Separate mobile layouts with bottom sheets and swipeable carousels',
      'Frosted Glass UI: Consistent glass-panel design system with blur/saturation backdrops',
      '6 Tourism Hubs: Nature, City Tours, Heritage, Adventure, Luxury, Budget',
      '80+ Destinations across Punjab, Sindh, KP, Balochistan, GB, and Azad Kashmir'
    ],
    techStack: ['React 19', 'Three.js', 'D3 Force Graph', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    links: { live: 'https://ms835857.github.io/z-tour/', github: 'https://github.com/ms835857/z-tour' }
  },
  {
    title: 'Anime & Movie Streaming',
    category: 'university projects',
    img: './assets/images/animethumbnail.png',
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
    challenge: {
      paragraphs: ['Trading XAUUSD (Gold) requires navigating a complex landscape where global macroeconomic shifts and sudden geopolitical tensions trigger intense liquidity spikes and sharp reversals. For many traders, the challenge is twofold: managing the inherent risk of golds high-leverage movements and maintaining a neutral perspective when market sentiment becomes erratic, which often leads to over-trading or holding losing positions for too long.']
    },
    solution: {
      paragraphs: ['This bot overcomes these obstacles by implementing a data-driven strategy that prioritizes capital preservation and precision. Using Python-based automation, it monitors key price levels and volume indicators to capitalize on specific intraday trends without the interference of human emotion. By automating the entry and exit process, the bot ensures that every trade is backed by backtested logic and protected by rigorous, automated risk-management layers designed to handle Golds unique volatility.']
    },
    keyFeatures: [
      'MetaTrader 5 Native Integration',
      'Dynamic Stop-Loss and Take-Profit Adjustments',
      'Machine Learning enhanced entry signals',
      'Comprehensive Risk Management protocols'
    ],
    techStack: ['Python', 'MetaTrader 5', 'Pandas', 'NumPy'],
    links: { live: '', github: '' }
  },
  {
    title: 'USTEC Trading Bot',
    category: 'personal projects',
    img: './assets/images/project-4.png',
    media: [
      './assets/images/project-4.png'
    ],
    badge: 'Ongoing',
    role: 'Quantitative Developer',
    timeline: '8+ Months',
    description: 'Personal Project - Python trading bot for USTEC',
    challenge: {
      paragraphs: ['Navigating the high volatility and rapid price fluctuations of the Nasdaq 100 (USTEC) presents a significant hurdle for manual traders, often leading to emotional decision-making and delayed execution. The primary difficulty lies in filtering market noise to identify high-probability trend reversals and momentum shifts within a fast-paced environment where traditional indicators often lag.']
    },
    solution: {
      paragraphs: ['To address these inefficiencies, this bot utilizes a systematic approach built on Python, integrating real-time data analysis with disciplined risk management protocols. By executing trades based on objective algorithmic triggers, the solution eliminates psychological bias and ensures lightning-fast execution, allowing for consistent participation in market moves while strictly adhering to predefined stop-loss and take-profit parameters.']
    },
    keyFeatures: [
      'Historical Data Backtesting Engine',
      'Statistical Arbitrage Identification',
      'MQL5 Bridge integration for rapid execution'
    ],
    techStack: ['Python', 'MQL5', 'Data Science', 'Automation'],
    links: { live: '', github: 'https://github.com/ms835857/ustec-bot' }
  },
];
