import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="grid grid-rows-2 about-section flex justify-center max-h-full">
      <div className="quick-description grid grid-cols-2 h-0">
        <div className="mb-10 col-span-2 box-border w-[1066px] h-auto border-t-[1px] border-solid border-white" />

        <div className="left-column">
          <b className="text-base">About Me</b>
        </div>

        <div className="right-column text-23xl">
          <p className="m-0">BRTLN. is a freelance</p>
          <p className="m-0">developer with an adaptive</p>
          <p className="m-0">approach to solve problems.</p>

          <div className="mt-[67px] text-23xl text-dimgray-100">
            <p className="m-0">*besides that I love to binge</p>
            <p className="m-0">watch Netflix Series</p>
          </div>

          <div className="w-[4vw] mt-[42px] rounded-11xl [background:linear-gradient(180deg,_#e1562b,_#d24418)] shadow-[-4px_58px_16px_rgba(0,_0,_0,_0),_-3px_37px_15px_rgba(0,_0,_0,_0.01),_-2px_21px_12px_rgba(0,_0,_0,_0.05),_-1px_9px_9px_rgba(0,_0,_0,_0.09),_0px_2px_5px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-center py-[9px] px-[27px] text-base font-dm-sans border-[1px] border-solid border-lightsalmon">
            <div className="relative">Buzz me!</div>
          </div>
        </div>
      </div>

      <div className="about-visual grid grid-cols-1 gap-[10vh] place-items-center">
        <Image
          width="10"
          height="10"
          className="rounded-11xl w-[930px] h-[504px] object-cover"
          alt=""
          src="/rectangle-11@2x.png"
          width={930}
          height={504}
        />
        <div>
          <div className="text-base font-dm-sans grid place-items-center">
            So far I’ve helped over 20+ startups
          </div>
          <Image
            width="10"
            height="10"
            className="w-[756px] h-[132px]"
            alt=""
            src="/group-4.svg"
            width={756}
            height={132}
          />
        </div>
      </div>
    </div>
  );
}
