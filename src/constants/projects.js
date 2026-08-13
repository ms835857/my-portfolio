export const projects = [
  {
    title: 'USTEC Algorithmic Trading Bot',
    domainCategory: 'dev',
    projectType: 'personal projects',
    category: 'personal projects',
    img: './assets/images/project-4.png',
    media: [
      './assets/images/project-4.png'
    ],
    featured: true,
    badge: 'Flagship Case Study',
    role: 'Full Stack & Algo Engineer',
    timeline: '8+ Months',
    description: 'Real-time automated trading system & live analytics dashboard for Nasdaq 100 (USTEC)',
    problemGoal: 'Manual trading on USTEC (Nasdaq 100) is vulnerable to millisecond latency, market noise, and emotional execution errors during high-volatility liquidity spikes.',
    whatIBuilt: 'Engineered an end-to-end automated trading infrastructure combining a Python desktop data processing engine, microsecond MQL5 bridge, and real-time React web dashboard.',
    challenge: {
      paragraphs: [
        'Navigating the extreme intraday volatility of USTEC requires sub-second price processing and strict automated risk limits. Traditional manual strategies lag behind high-frequency shifts, causing slippage and emotional drawdowns.'
      ],
      bullets: [
        'Microsecond order execution via custom MQL5 to Python IPC bridge',
        'Filtering market noise with real-time statistical momentum indicators',
        'Synchronizing local desktop execution with web dashboard state'
      ]
    },
    solution: {
      paragraphs: [
        'Built a dual Web + Desktop system: Python handles real-time tick analysis and automated signal generation, while a sleek web interface provides remote monitoring and strategy parameter overrides.'
      ],
      bullets: [
        'Real-time data streaming & live metric processing',
        'Automated trailing stop-loss & risk management rules',
        'Cross-platform desktop runner + React web monitoring portal'
      ]
    },
    keyFeatures: [
      '⚡ Real-Time Tick Processing: Sub-second price ingestion and instant signal evaluation',
      '🤖 Full Execution Automation: Hands-free order placement with dynamic trailing stops',
      '💻 Web + Desktop Architecture: Lightweight Python runner paired with React web management UI',
      '🛡️ Hardcoded Risk Management: Auto-close on max daily drawdown to protect trading capital',
      '📊 Historical Backtesting Engine: Tested across 5+ years of USTEC tick data'
    ],
    techStack: ['Python', 'React', 'MQL5 / .NET', 'WebSockets', 'Pandas'],
    links: { live: '', github: 'https://github.com/ms835857/ustec-bot' }
  },
  {
    title: 'Z-Tour 3D Tourism Platform',
    domainCategory: 'dev',
    projectType: 'personal projects',
    category: 'personal projects',
    img: './assets/images/project-9.png',
    media: [
      './assets/images/project-9.png'
    ],
    featured: true,
    badge: 'Interactive Web App',
    role: 'Full Stack Developer',
    timeline: 'April 2025 — Present',
    description: 'Immersive 3D tourism explorer & booking engine for 80+ destinations across Pakistan',
    problemGoal: 'Traditional travel booking directories present destination data in static text lists, leading to low user engagement and poor visual exploration.',
    whatIBuilt: 'Built an interactive galaxy-themed 3D web application with force-directed cluster graphs, 3D-to-2D UI tracking cards, and real-time multi-axis search.',
    challenge: {
      paragraphs: [
        'Clustering 80+ destinations into 6 tourism hubs in 3D space without visual overlap required custom D3 force physics tuning and real-time 3D camera projection.'
      ],
      bullets: [
        'Dynamic camera flying to destination nodes on search input',
        'Real-time 3D-to-2D screen coordinate projection for floating package cards',
        'Multi-axis filtering (province, budget, trip duration, group size)'
      ]
    },
    solution: {
      paragraphs: [
        'Combined React 19, Three.js, and D3 force physics to deliver a futuristic frosted-glass travel discovery portal with instant filtering and responsive mobile drawer UI.'
      ],
      bullets: [
        'Custom D3 force-directed 3D hub network',
        'Floating card overlays tracking 3D node movement',
        'Frosted glass design system with responsive mobile carousels'
      ]
    },
    keyFeatures: [
      '🌌 Interactive 3D Force Graph: 6 galactic hubs & 80+ destination nodes with glow shaders',
      '🔍 Auto-Fly Search Engine: Camera smoothly transitions to matching destination as user types',
      '🎯 Multi-Axis Filter Matrix: Real-time filtering by budget bracket, duration, and trip category',
      '📱 Mobile-First Responsive UI: Bottom sheet filter drawer & gesture carousel for mobile screens'
    ],
    techStack: ['React 19', 'Three.js', 'R3F / Drei', 'D3 Force', 'Tailwind CSS', 'Vite'],
    links: { live: 'https://ms835857.github.io/z-tour/', github: 'https://github.com/ms835857/z-tour' }
  },
  {
    title: 'GOLD Algorithmic Trading Bot',
    domainCategory: 'dev',
    projectType: 'personal projects',
    category: 'personal projects',
    img: './assets/images/project-3.jpg',
    media: [
      './assets/images/project-3.jpg'
    ],
    badge: 'Ongoing',
    role: 'Algorithm Engineer',
    timeline: '6+ Months',
    description: 'Python automated trading system for XAUUSD (Gold) with automated risk management',
    problemGoal: 'Trading Gold (XAUUSD) involves intense macroeconomic news spikes and extreme leverage risks that trigger frequent capital losses for manual traders.',
    whatIBuilt: 'Developed an automated Python trading engine integrated with MetaTrader 5 that executes data-backed momentum strategies with automated stop-loss protection.',
    challenge: {
      paragraphs: [
        'Gold prices experience sudden liquidity spikes around market opens and news events. Managing risk required strict automated execution.'
      ]
    },
    solution: {
      paragraphs: [
        'Automated trade entry and position sizing using quantitative indicators, eliminating human emotional interference and ensuring strict stop-loss adherence.'
      ]
    },
    keyFeatures: [
      '📈 Automated Strategy Execution: Objective algorithm monitors volume & key breakout levels',
      '🛡️ Dynamic Stop-Loss & Take-Profit: Real-time risk adjustments based on ATR volatility',
      '🔗 MetaTrader 5 Native Integration: Direct API connection for lightning-fast execution'
    ],
    techStack: ['Python', 'MetaTrader 5 API', 'Pandas', 'NumPy'],
    links: { live: '', github: '' }
  },
  {
    title: 'Anime & Cinema Streaming Platform',
    domainCategory: 'dev',
    projectType: 'university projects',
    category: 'university projects',
    img: './assets/images/animethumbnail.png',
    media: [
      './assets/images/animeverse1.png',
      './assets/images/animeverse2.png'
    ],
    role: 'Frontend Developer',
    timeline: '2 Months',
    description: 'Modern SPA streaming dashboard with real-time TMDB integration & user watchlists',
    problemGoal: 'Legacy multi-page movie directory PHP applications suffer from slow page reloads and outdated visual presentation.',
    whatIBuilt: 'Migrated static PHP infrastructure into a high-performance React Single-Page Application (SPA) with live API metadata & Firebase watchlist sync.',
    challenge: {
      paragraphs: [
        'Overhauling server-side PHP pages into a dynamic client-side SPA required clean state management and fast asset delivery.'
      ]
    },
    solution: {
      paragraphs: [
        'Engineered a glassmorphic streaming UI integrating TMDB API endpoints for real-time trending titles, detailed cast info, and instant video previews.'
      ]
    },
    keyFeatures: [
      '🎬 Live TMDB Metadata Integration: Real-time search, movie trailers, and detailed cast breakdown',
      '🔥 Firebase Watchlist Sync: User account watchlists synced seamlessly across devices',
      '✨ Glassmorphic UI/UX: Modern dark aesthetic with smooth category transitions'
    ],
    techStack: ['React', 'Firebase', 'TMDB REST API', 'Tailwind CSS'],
    links: { live: 'https://ms835857.github.io/streaming-site/', github: 'https://github.com/ms835857/streaming-site' }
  }
];
