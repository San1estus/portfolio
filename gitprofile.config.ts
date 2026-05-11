// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'san1estus', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['San1estus/Cuarto-Semestre'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['San1estus/Motion-Planning-Homework', 'San1estus/Motion-Planning-Final-Project', 'San1estus/SVD-MND', 'San1estus/VehiculosApp'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Extreme Value Theory for Financial Risk Analysis',
          description:
            'Analyzed multi-year historical stock market time series to model market behavior. Implemented Generalized Extreme Value (GEV) models using NumPy and SciPy, validating results against empirical tail distributions. Built end-to-end data pipelines for preprocessing, statistical validation, and visualization of financial time series.',
          imageUrl:
            'https://cdn-icons-png.flaticon.com/512/3008/3008138.png',
          link: '',
        },
        {
          title: 'Autonomous Vehicle Navigation Agent',
          description:
            'Developing a PPO-based reinforcement learning agent for lane-following navigation under progressively complex conditions, with the goal of generalizing to dynamic obstacle avoidance.',
          imageUrl:
            'https://cdn-icons-png.flaticon.com/512/1817/1817409.png',
          link: '',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Julián Rodríguez', description: '', imageURL: '' },
  social: {
    linkedin: 'julian-rodriguez-isiordia',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'j.rodriguezisiordia@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'Python',
    'SQL',
    'Git',
    'OpenGL'
  ],
  experiences: [
    {
      company: 'Universidad de Guanajuato',
      position: 'Teacher Assistant at Data Structures and Algorithms',
      from: 'January 2025',
      to: 'August 2025',
    },
    {
      company: 'Universidad de Gunajuato',
      position: 'Teacher Assistant at Linear Algebra',
      from: 'August 2024',
      to: 'December 2024',
    },
  ],
  certifications: [
    {
      name: 'Google Data Analytics',
      body: 'Learned to collect, visualize, analyze and tell a story based on data.',
      year: 'December 2022',
      link: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    },
  ],
  educations: [
    {
      institution: 'Mathematical Computing',
      degree: 'Bachelor in Sciences',
      from: '2022',
      to: 'Present',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
