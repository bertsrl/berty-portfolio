"use client";

import { useEffect, useState } from "react";

import AboutSection from "@/components/_sections/AboutSection";
import FooterSection from "@/components/_sections/FooterSection";
import HeroSection from "@/components/_sections/HeroSection";
import Image from "next/image";
import Navbar from "@/components/_sections/NavBar";
import ProjectSections from "@/components/_sections/ProjectSections";
import ShowcaseContainer from "@/components/_sections/ShowcaseSection";
import ShowcaseSection from "@/components/_sections/ShowcaseSection";
import TestimonialSections from "@/components/_sections/TestimonialSections";
import anime from "animejs/lib/anime.es.js";
import { switcher } from "@/components/atoms";
import { useAtom } from "jotai";

export default function Home() {
  const [introLoaded, setIntroLoaded] = useState(true);

  const [page] = useAtom(switcher);

  useEffect(() => {
    if (introLoaded) {
      anime
        .timeline({ loop: false })
        .add({
          targets: ".line-1",
          opacity: [0, 1],
          scaleY: [0.5, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: 1000,
          offset: "-=600",
        })
        .add({
          targets: ".line-2",
          opacity: [0, 1],
          scaleY: [0.5, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: 1000,
          offset: "-=600",
        })
        .add({
          targets: ".line-3",
          opacity: [0, 1],
          scaleY: [0.5, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: 1000,
          offset: "-=600",
        })
        .add({
          targets: ".presentation",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        })
        .add({
          complete: function (anim) {
            setIntroLoaded(true);
          },
        });
    }
  }, []);

  return (
    <div className="w-full relative text-lg text-white bg-blue-200 font-aeonik-trial background-rainbow lg:overflow-hidden">
      {!introLoaded! && (
        <div className="m-10 presentation">
          <span className="leading-none text-left" style={{ fontSize: "8rem" }}>
            <span className="line-1">{"Hi"}</span> <br />
            <span className="line-2">{"I'm Berty"}</span> <br />
            <span className="line-3" style={{ fontSize: "6rem" }}>
              {"And this is my presentation"}
            </span>
          </span>
        </div>
      )}
      <i className="absolute top-[20vh] animation"></i>

      {introLoaded && (
        <div>
          <Navbar />

          <div className="flex flex-col items-center h-full">
            {page == 0 && <HeroSection />}
            {page == 1 && <ShowcaseSection />}
            {page == 2 && <ProjectSections />}
            {page == 3 && <FooterSection />}
          </div>

          <div className="sticky bottom-0 h-[15vh] w-full">
            <div className="line box-border border-t-[1px] border-solid border-dimgray-100" />
            <div className="flex lg:flex-row gap-5 text-center flex-col justify-between items-center px-[10%] h-[100%]">
              <div className="text-[2rem] lg:text-[1.3vw] font-archivo-black">
                BERTY
              </div>
              <div className="flex justify-center gap-5">
                <Image
                  width={40}
                  height={40}
                  className="cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
                  alt=""
                  src="/antdesignlinkedinfilled.svg"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/bertalan-andrei",
                      "_blank"
                    )
                  }
                />
                <Image
                  width={40}
                  height={40}
                  className="invert  cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
                  alt=""
                  src="/bi--github.svg"
                  onClick={() =>
                    window.open("https://github.com/bertsrl/", "_blank")
                  }
                />
                <Image
                  width={40}
                  height={40}
                  className="invert cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
                  alt=""
                  src="/fa6-brands--square-upwork.svg"
                  onClick={() =>
                    window.open(
                      "https://www.upwork.com/freelancers/~01f10a5dbaab95f158?mp_source=share",
                      "_blank"
                    )
                  }
                />
              </div>
              <div className="text-white text-[1.2rem] lg:text-[1.3vw]">
                Copyright © Bertalan Andrei 2024
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
