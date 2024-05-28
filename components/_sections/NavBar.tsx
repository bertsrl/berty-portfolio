import "react-dropdown/style.css";

import { switcher, useScreenSize } from "../atoms";

import Dropdown from "react-dropdown";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Navbar() {
  const [page, setPage] = useAtom(switcher);
  const { width, height } = useScreenSize();

  const options = ["Presentation", "Skills", "Projects", "Buzz Me!"];
  const defaultOption = options[0];

  useEffect(() => {
    console.log(defaultOption);
  }, [defaultOption]);

  return (
    <div className="pt-5">
      <div className="nav-bar flex justify-center bg-white mx-[10vw] rounded-3xl">
        <div className="flex flex justify-evenly lg:items-center lg:justify-between px-[10px] text-14xl-9 font-archivo-black w-[1066px]">
          <div className="relative">
            <span className="text-black">
              <b>BERTY</b>
            </span>
          </div>
          {width <= 1440 ? (
            <Dropdown
              onChange={(val) => {
                switch (val.label) {
                  case "Presentation":
                    setPage(0);
                    break;
                  case "Skills":
                    setPage(1);
                    break;
                  case "Projects":
                    setPage(2);
                    break;
                  case "Buzz Me!":
                    setPage(3);
                    break;
                }
              }}
              options={options}
              value={defaultOption}
              placeholder="Select an option"
            />
          ) : (
            <div className="flex flex-row items-center justify-start gap-[0px_45px] text-base font-dm-sans">
              <div className="flex flex-row items-start justify-start gap-[0px_37px] text-black">
                <button
                  onClick={() => {
                    setPage(0);
                  }}
                  className="nb-btn relative p-2 px-5 rounded-full "
                >
                  Presentation
                </button>
                <button
                  onClick={() => {
                    setPage(1);
                  }}
                  className="nb-btn relative p-2 px-5 rounded-full"
                >
                  Skills
                </button>
                <button
                  onClick={() => {
                    setPage(2);
                  }}
                  className="nb-btn relative p-2 px-5 rounded-full"
                >
                  Projects
                </button>
              </div>
              <button
                onClick={() => {
                  setPage(3);
                }}
                className="bg-black transform transition-transform duration-300 hover:scale-105 rounded-11xl overflow-hidden flex flex-row items-center justify-center py-[2px] px-[27px]"
              >
                <span className="relative p-2 border-0 rounded-full">
                  Buzz me!
                </span>
              </button>
            </div>
          )}
          ;
        </div>
      </div>
    </div>
  );
}
