export const projects = [
  {
    title: 'USTEC Algorithmic Trading Ecosystem',
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
    description: 'Real-Time Automated Trading & Live Analytics Engine for Nasdaq 100 (USTEC)',
    problemGoal: 'In high-volatility financial markets like USTEC (Nasdaq 100), a 500-millisecond latency delay or emotional execution error can destroy thousands of dollars in capital.',
    whatIBuilt: 'Engineered a high-speed Python processing engine connected via microsecond MQL5 bridge directly to MetaTrader 5 brokers, paired with a 24/7 React web monitoring dashboard.',
    challenge: {
      paragraphs: [
        'Why It Matters: Manual traders suffer from execution latency and emotional drawdowns during sharp intraday volatility spikes. Replaced manual latency with zero-delay automated execution.'
      ],
      bullets: [
        'Microsecond order execution via custom MQL5 to Python IPC bridge',
        'Real-time statistical momentum filtering to eliminate market noise',
        'Real-time WebSocket tick ingestion & live risk control boundary enforcement'
      ]
    },
    solution: {
      paragraphs: [
        'The Solution Engineered: A lightweight local execution engine synchronized in real-time with a remote React dashboard for live telemetry, automated trailing stops, and remote risk overrides.'
      ],
      bullets: [
        'Real-time tick processing & sub-second price evaluation',
        'Automated trailing stop-loss & daily drawdown boundary auto-close',
        'Cross-platform Python engine + React web telemetry portal'
      ]
    },
    keyFeatures: [
      '⚡ Sub-Second Tick Processing: Ingests live market ticks and evaluates technical triggers in microseconds',
      '🤖 Zero-Emotion Execution: Hands-free order placement with dynamic trailing stops and risk protection',
      '💻 Dual Web + Desktop Architecture: Python backend engine paired with a responsive React dashboard',
      '🛡️ Hardcoded Capital Protection: Automatically closes positions upon reaching pre-set daily risk limits',
      '📊 5+ Year Backtesting Engine: Quantitative backtesting across multi-year historical tick data'
    ],
    techStack: ['Python', 'React', 'MQL5 / .NET', 'WebSockets', 'Pandas'],
    links: { live: '', github: 'https://github.com/ms835857/ustec-bot' }
  },
  {
    title: 'Z-Tour 3D Tourism Discovery Platform',
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
    description: 'Interactive 3D Tourism Explorer & Booking Engine for 80+ destinations across Pakistan',
    problemGoal: 'Flat, static travel directories suffer from high drop-off rates because visitors cannot visualize experiences before booking.',
    whatIBuilt: 'Built an interactive galaxy-themed 3D force-directed node graph replacing static text lists with engaging visual exploration.',
    challenge: {
      paragraphs: [
        'Why It Matters: Increasing user engagement and session duration required custom 3D force physics and real-time screen coordinate projection.'
      ],
      bullets: [
        'Dynamic camera auto-flying to destination nodes on search input',
        'Real-time 3D-to-2D screen coordinate projection for floating package cards',
        'Multi-axis filter matrix (province, budget bracket, trip duration, group size)'
      ]
    },
    solution: {
      paragraphs: [
        'The Solution Engineered: Combined React 19, Three.js, and D3 force physics to deliver a frosted-glass travel discovery portal with responsive mobile bottom-sheet drawers.'
      ],
      bullets: [
        'Custom D3 force-directed 3D hub graph network',
        'Floating card overlays tracking 3D node movement in real-time',
        'Frosted glass design system with responsive mobile carousels'
      ]
    },
    keyFeatures: [
      '🌌 Interactive 3D Force Graph: 6 galactic hubs & 80+ destination nodes with glow shaders',
      '🔍 Auto-Fly Search Engine: Smooth camera flying transitions to matching destination as user types',
      '🎯 Multi-Axis Filter Matrix: Real-time filtering by budget bracket, duration, and trip category',
      '📱 Mobile-First Responsive UI: Bottom sheet filter drawer & gesture carousel for mobile screens'
    ],
    techStack: ['React 19', 'Three.js', 'R3F / Drei', 'D3 Force', 'Tailwind CSS', 'Vite'],
    links: { live: 'https://ms835857.github.io/z-tour/', github: 'https://github.com/ms835857/z-tour' }
  },
  {
    title: 'GOLD Algorithmic Execution Engine',
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
    description: 'Automated Quantitative Execution System for XAUUSD (Gold) with dynamic risk controls',
    problemGoal: 'Gold markets experience extreme news-driven price spikes that routinely liquidate unmanaged trading accounts.',
    whatIBuilt: 'Developed a data-driven Python trading bot integrated with MetaTrader 5 API to capture intraday momentum breakouts.',
    challenge: {
      paragraphs: [
        'Why It Matters: Eliminates panic trading and protects capital through algorithmic momentum tracking and hardcoded risk rules.'
      ]
    },
    solution: {
      paragraphs: [
        'The Solution Engineered: Automated position sizing and ATR-based dynamic stop-loss adjustments to shield capital against unexpected market slippage.'
      ]
    },
    keyFeatures: [
      '📈 Quantitative Breakout Strategy: Objective algorithm monitors volume & breakout levels',
      '🛡️ Dynamic Stop-Loss & Take-Profit: Real-time risk adjustments based on ATR volatility',
      '🔗 MetaTrader 5 Native Integration: Direct API connection for lightning-fast execution'
    ],
    techStack: ['Python', 'MetaTrader 5 API', 'Pandas', 'NumPy'],
    links: { live: '', github: '' }
  },
  {
    title: 'Anime & Cinema Streaming Dashboard',
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
    description: 'High-Throughput Media SPA & Watchlist Manager with live TMDB integration',
    problemGoal: 'Legacy multi-page media sites frustrate users with constant page reloads and clunky interfaces.',
    whatIBuilt: 'Migrated static PHP server infrastructure into a responsive, high-speed Single-Page Application (SPA) with Firebase watchlist sync.',
    challenge: {
      paragraphs: [
        'Why It Matters: Transforming server-side page reloads into an instant client-side SPA improves user retention and session length.'
      ]
    },
    solution: {
      paragraphs: [
        'The Solution Engineered: Built a glassmorphic dashboard consuming live TMDB API metadata for real-time trending titles and Firebase cross-device watchlist sync.'
      ]
    },
    keyFeatures: [
      '🎬 Live TMDB Metadata Integration: Real-time search, movie trailers, and cast breakdowns',
      '🔥 Firebase Watchlist Sync: User account watchlists synced seamlessly across devices',
      '✨ Glassmorphic UI/UX: Modern dark aesthetic with smooth category transitions'
    ],
    techStack: ['React', 'Firebase', 'TMDB REST API', 'Tailwind CSS'],
    links: { live: 'https://ms835857.github.io/streaming-site/', github: 'https://github.com/ms835857/streaming-site' }
  }
];
