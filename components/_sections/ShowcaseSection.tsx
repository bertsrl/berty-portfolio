import Image from "next/image";
import { useScreenSize } from "../atoms";

export default function ShowcaseSection() {
  const { width, height } = useScreenSize();

  return (
    <div className="grid grid-cols-1 gap-3 my-5 showcase-section max-w-screen max-h-full place-items-center">
      <div className="place-items-center text-[5vw] lg:text-23xl">
        FEATURES OF WORKING WITH ME
      </div>
      <div
        className={`featured-cards grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[175px,175px,175px] gap-3 lg:w-[1300px]`}
      >
        <div
          id="top-left"
          className="card__polyblue feature-card lg:col-span-2 rounded-8xl box-border w-auto h-full overflow-auto box-border text-black font-aeonik-trial border-[1px] border-solid border-gray-300"
        >
          {/* <Image
              width={10}
              height={10}
              src="/projects_image.png"
              alt=""
              className="w-[50vw] mt-[-11vh] ml-[2vw]"
            /> */}
          <div className="ml-10 mt-10 mb-10 lg:mb-0 flex flex-col gap-3">
            <span className="text-white text-[3vw] lg:text-[1.2vw]">
              <b>Workflow Guru</b>
            </span>
            <div className="text-dimgray-100 max-w-[90%]">
              <p className="m-0 text-white">
                Experience the expertise of a Workflow Guru who understands your
                processes and implements best practices to optimize efficiency
              </p>
            </div>
          </div>
        </div>
        <div
          id="top-right"
          className="card__polyblue feature-card lg:row-span-2 z-0 rounded-8xl box-border w-auto h-auto overflow-auto place-items-center box-border text-black font-aeonik-trial border-[1px] border-solid border-gray-300"
        >
          <div className="grid grid-cols-1 lg:place-items-center ml-[6vw] lg:ml-0 mb-[2vh]">
            <Image
              width={150}
              height={150}
              src="/settings_gear_visual.png"
              alt=""
            />
            <div className="grid grid-col-1 gap-4 lg:place-items-center">
              <span className="text-white text-[3vw] lg:text-[1.2vw]">
                <b>Code Maestro</b>
              </span>
              <div className="lg:text-center text-dimgray-100 max-w-full">
                <p className="m-0 text-white lg:px-5">
                  Collaborate with a Code Maestro who navigates complex code
                  systems effortlessly, delivering high-quality and reliable
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bottom-left"
          className="feature-card text-white gap-3 text-center flex flex justify-center items-center lg:row-span-2 z-0 rounded-8xl box-border w-auto h-auto card__polyblue box-border text-black font-aeonik-trial border-[1px] border-solid border-gray-300"
        >
          <Image
            width={width <= 1200 ? 120 : 150}
            height={150}
            src="/images/lights.png"
            alt=""
          ></Image>
          <div className="flex flex-col gap-5">
            <span className="text-[1.2vw]">
              <b>Future-Proofing</b>
            </span>
            <span className="px-5">
              Work with a programmer who not only solves your current coding
              challenges but also future-proofs your systems against potential
              issues.
            </span>
          </div>
        </div>
        <div
          id="center"
          className="card__biceblue feature-card z-0 flex justify-center items-center rounded-8xl box-border w-auto h-auto shadow-[0px_2px_3px_rgba(0,_0,_0,_0.03)] box-border text-black font-aeonik-trial border-[1px] border-solid border-gray-300"
        >
          <span className="text-white text-[2vw]">
            <b>BERTY.</b>
          </span>
        </div>
        <div
          id="bottom-right"
          className="card__polyblue feature-card lg:col-span-2 flex gap-5 justify-center items-center z-0 rounded-8xl box-border w-auto h-full bg-cover bg-fluid-pattern shadow-[0px_2px_3px_rgba(0,_0,_0,_0.03)] box-border text-black font-aeonik-trial border-[1px] border-solid border-gray-300"
        >
          <span className="text-white text-[1.3vw]">
            <b>Expertize</b>
          </span>
          <span className="text-white">Sofware mastery in Motion</span>
        </div>
      </div>
    </div>
  );
}
