// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "ABOUT",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "PUBLICATIONS",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "TEACHING",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-grants",
          title: "GRANTS",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/funding/";
          },
        },{id: "nav-service",
          title: "SERVICE",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-lab",
          title: "LAB",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/ua-cvml.github.io/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ting-yu-tsai",
          title: 'Ting Yu Tsai',
          description: "PhD student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-an-yu",
          title: 'An Yu',
          description: "PhD student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-abhineet-pandey",
          title: 'Abhineet Pandey',
          description: "PhD student",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-rui-wang",
          title: 'Rui Wang',
          description: "PhD candidate, Computer Science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-yuwei-chen",
          title: 'Yuwei Chen',
          description: "PhD candidate, Computer Science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-zhenfei-zhang",
          title: 'Zhenfei Zhang',
          description: "PhD candidate, Computer Science",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-dr-chuanbo-hu",
          title: 'Dr. Chuanbo Hu',
          description: "Postdoctoral Associate",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-ming-ching-chang",
          title: 'Ming-Ching Chang',
          description: "Associate Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mingching_project/";
            },},{id: "projects-ming-ching-chang",
          title: 'Ming-Ching Chang',
          description: "Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xinli_project/";
            },},];
