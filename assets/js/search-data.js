// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-radar-ad",
          title: 'RADAR-AD',
          description: "Remote Assessment of Disease and Relapse - Alzheimer&#39;s Disease",
          section: "Projects",handler: () => {
              window.location.href = "/project/radar-ad/";
            },},{id: "projects-unique",
          title: 'UNIQUE',
          description: "A Python framework for Uncertainty Quantification benchmarking in ML",
          section: "Projects",handler: () => {
              window.location.href = "/project/unique/";
            },},{id: "projects-vitalcam",
          title: 'VitalCam',
          description: "Multisensory Camera for Health Monitoring",
          section: "Projects",handler: () => {
              window.location.href = "/project/vitalcam/";
            },},{id: "projects-wou",
          title: 'WOU',
          description: "An intelligent decision support system for wound healing",
          section: "Projects",handler: () => {
              window.location.href = "/project/wou/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
