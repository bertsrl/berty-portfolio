import { projects, technologies } from "../atoms";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { useAtom } from "jotai";

export default function ProjectSections() {
  const itemsRef = useRef<HTMLElement[]>([]);
  const [projectsRef] = useAtom(projects);
  const [techRef, setTech] = useAtom(technologies);

  const [filteredProjects, setFilteredProjects] = useState(projectsRef);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 1, // Adjust this value based on when you want the scaling to start
      }
    );

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (itemsRef.current) {
        itemsRef.current.forEach((item) => {
          if (item) {
            observer.unobserve(item);
          }
        });
      }
    };
  }, []);

  const filterSelectedTechs = () => {
    const selectedTechs = techRef
      .filter((tech) => tech.isSelected == true)
      .map((tech) => tech.name);

    if (selectedTechs.length) {
      setFilteredProjects(
        projectsRef.filter((proj) =>
          proj.languages.some((t) => {
            return selectedTechs.includes(t.name);
          })
        )
      );

      console.log("filteredProjects: ", filteredProjects);
    } else setFilteredProjects(projectsRef);
  };

  const selectTech = (tech: {
    name: string;
    occur: number;
    isSelected: boolean;
  }) => {
    // Filter out the ingredient to move
    const filteredTechs = techRef.filter((t) => t.name !== tech.name);

    // Return a new array with the ingredient at the front
    return [tech, ...filteredTechs];
  };

  return (
    <div className="projects-section container flex flex-col justify-start gap-5 mb-5 self-start mx-[10vw] h-[100vh]">
      <div className="flex gap-3">
        <div className="text-23xl">Hand-crafted projects I’ve mastered</div>
        <span className="text-21xl self-center">
          ({projectsRef.length} projects)
        </span>
      </div>
      <div className="flex flex-col project-row w-full h-[63%] overflow-auto flex flex gap-3">
        <div className="flex gap-3 flex-wrap">
          {techRef.map((tech) => {
            return (
              <span
                key={tech.name}
                className={`${
                  !tech.isSelected ? "bg-blue-300" : "bg-blue-500"
                }  px-5 rounded-xl cursor-pointer`}
                onClick={() => {
                  tech.isSelected = tech.isSelected ? false : true;

                  setTech(selectTech(tech));

                  filterSelectedTechs();
                }}
              >
                {tech.name}{" "}
                <span className="rounded-xl bg-blue-400 px-2">
                  {tech.occur}
                </span>
              </span>
            );
          })}
        </div>
        {filteredProjects.map((project) => {
          return (
            <div key={project.name} className="flex gap-3">
              <div className="flex justify-center rounded-9xl bg-white grid grid-col-1 w-[30%] h-[26vh] overflow-hidden text-left text-sm text-black font-inter border-[1px] border-solid border-gray-500">
                {project.imagePath !== "" && (
                  <span className="bg-white">
                    <Image
                      className="bg-contain"
                      alt=""
                      src={project.imagePath}
                      width={300}
                      height={100}
                    />
                  </span>
                )}
                {project.imagePath === "" && (
                  <span className="bg-white w-[100vw] h-[100vh] text-black text-center text-[2vw] py-[5%]">
                    {project.name}
                  </span>
                )}
              </div>
              <div className="card__polyblue flex flex-col justify-evenly rounded-9xl w-full h-[26vh] p-5 bg-cover bg-no-repeat bg-[top] text-left text-black font-inter border-[1px] border-solid border-gray-500">
                <span className="text-[2vw] text-white">{project.name}</span>
                <span className="text-[1.5vw] text-white">
                  {project.description}
                </span>
                <div className="flex justify-between">
                  <div className="flex gap-5 flex-wrap">
                    {project.languages.map((lang) => {
                      return (
                        <div
                          key={lang.name}
                          className="flex flex-col gap-3 flex"
                        >
                          <span className="text-white" key={lang.name}>
                            {lang.name}
                          </span>
                          <div className="progress-loader">
                            <div
                              className="progress w-[100px]"
                              style={{ width: lang.percent }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="h-[5vh] self-end transform transition-transform duration-300 hover:scale-110 w-[10vw] rounded-11xl [background:linear-gradient(180deg, _rgb(0, 78, 152),_rgba(58, 110, 165))] shadow-[-20px_58px_66px_rgba(0,_0,_0,_0),_-3px_37px_55px_rgba(0,_0,_0,_0.01),_-10px_21px_12px_rgba(0,_0,_0,_0.05),_-1px_9px_9px_rgba(0,_0,_0,_0.09),_0px_2px_5px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-center py-[9px] px-[27px] "
                  >
                    <span className="relative border-0 rounded-full text-white">
                      See Project
                    </span>
                  </button>
                </div>
              </div>
              {project.review && (
                <div
                  id="project-review"
                  className="rounded-9xl w-[60%] border border-black border-0"
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
