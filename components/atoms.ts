import { useEffect, useState } from "react";

import { atom } from "jotai"

export const switcher = atom(0);

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener("resize", handleResize);
  
      // Initial check
      handleResize();
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return screenSize;
  };

const projectsArray = [
    {
        name: "debateX",
        imagePath: "/images/dX_logo.jpg",
        description: "Actively working for assuring the best business flow accuracy ever",
        review: "",
        link: "https://www.debatex.ro",
        languages: [
            {
                name: "Python",
                percent: 50,
            },
            {
                name: "Node.js",
                percent: 50
            },
            {
                name: "Google Cloud",
                percent: 100
            }
        ]
    },
    {
        name: "Edukon",
    imagePath: "",
        description: "Pixel perfect design conversion to Wordpress website ",
        review: "",
        link: "https://www.edukon.ro",
        languages: [
            {
                name: "Wordpress CMS",
                percent: 60,
            },
            {
                name: "PHP",
                percent: 20
            },
            {
                name: "Builders and custom integrations",
                percent: 50
            }
        ]
    },
    {
        name: "Cambridge Success",
        imagePath: "/images/cambridgesuccess.png",
        description: "Actively working for assuring the best business flow accuracy ever",
        review: "",
        link: "https://www.cambridgesuccess.ro",
        languages: [
            {
                name: "Python",
                percent: 30,
            },
            {
                name: "Node.js",
                percent: 20
            },
            {
                name: "Google Cloud",
                percent: 50
            }
        ]
    },
    {
        name: "Megacook",
        imagePath: "/images/megacook.png",
        description: "Online app to search for recipes based on your favorite ingredients",
        review: "",
        link: "https://www.megacook.vercel.app",
        languages: [
            {
                name: "Vue3.js",
                percent: 100,
            },
            {
                name: "Typescript",
                percent: 100
            },
            {
                name: "Tailwind",
                percent: 50
            }
        ]
    },
    {
        name: "Bertddit",
        imagePath: "/images/bertddit_logo.png",
        description: "Reddit clone that uses the public reddit JSON API endpoints",
        review: "",
        link: "https://bertddit.netlify.app/",
        languages: [
            {
                name: "React",
                percent: 100,
            },
            {
                name: "REST API",
                percent: 30
            },
            {
                name: "Tailwind",
                percent: 70
            }
        ]
    },
    {
        name: "Bertodo",
        imagePath: "",
        description: "Basic Todo app that implements IndexDB and Vuetify UI",
        review: "",
        link: "https://bertodo.netlify.app",
        languages: [
            {
                name: "Vue3.js",
                percent: 100,
            },
            {
                name: "Vuetify",
                percent: 80
            },
            {
                name: "HTML5",
                percent: 60
            }
        ]
    },
    {
        name: "Universal Chat App",
        imagePath: "/images/ChatApp.png",
        description: "A chat app with a multitude of rooms similar to Discord",
        review: "",
        link: "https://chathut.netlify.app",
        languages: [
            {
                name: "Vue3.js",
                percent: 100,
            },
            {
                name: "Firebase",
                percent: 80
            },
            {
                name: "Tailwind",
                percent: 60
            },
            {
                name: "Node.js",
                percent: 60
            },
            {
                name: "Javascript",
                percent: 80
            },
        ]
    },
]
export const projects = atom(projectsArray);

const technologyCount = new Map();
// Iterate over each project
projectsArray.forEach(project => {
    // Iterate over each language in the project's languages array
    project.languages.forEach(language => {
      // If the language is already in the Map, increment its count
      if (technologyCount.get(language.name)) {
        technologyCount.set(language.name, technologyCount.get(language.name) + 1);
      } else {
        // If the language is not in the Map, add it with a count of 1
        technologyCount.set(language.name, 1);
      }
    });
  });

  // Convert the Map to an array of objects in the desired format
const technologiesArray = Array.from(technologyCount, ([name, occur]) => ({
    name,
    occur,
    isSelected: false
  }));

export const technologies = atom(technologiesArray)