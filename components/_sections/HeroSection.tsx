import { switcher, useScreenSize } from "../atoms";

import Image from "next/image";
import { useAtom } from "jotai";

export default function HeroSection() {
  const [page, setPage] = useAtom(switcher);

  const { width, height } = useScreenSize();
  return (
    <>
      <div className="container flex flex-col lg:flex-row items-center lg:items-start mx-5 my-[2%] px-[5vw] max-h-[64vh]">
        <div className="w-[100%] h-[60vh] items-center lg:items-start flex flex-col justify-center gap-[5vh] order-2 lg:order-1">
          <span className="text-[2rem] lg:text-[4rem]">
            Bertalan Andrei (Berty)
          </span>
          <div className="flex items-center gap-5 text-center lg:text-left">
            <span className="text-[1.2rem] lg:text-[2rem] w-[25vw]">
              I produce code driven solution for digital ambitions
            </span>
          </div>
          <div className="flex gap-5 w-[20rem] lg:w-[20vw] flex items-center">
            <button
              onClick={() => setPage(3)}
              className=" border rounded-full py-3 px-6 bg-black hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
            >
              Buzz me!
            </button>
            <button
              onClick={() => setPage(2)}
              className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-200 from-10% via-sky-500 via-30% to-fuchsia-200 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-300 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
            >
              <span className="border-0 rounded-full text-white bg-transparent relative h-[100%]">
                See my work
              </span>
            </button>
          </div>
        </div>
        <Image
          alt=""
          className="order-1 lg:order-2"
          src="/images/profile.png"
          width={width <= 1200 ? 200 : 500}
          height={width <= 768 ? 5 : 10}
        ></Image>
      </div>
    </>
  );
}
