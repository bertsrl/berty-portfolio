import Image from "next/image";

export default function TestimonialSections() {
  return (
    <div className="testimonial-section my-10 flex justify-center grid grid-cols-1 place-items-center gap-10">
      <div className="text-[2vw]">
        <span>
          What clients <span className="bg-tomato">say about me?</span>
        </span>
      </div>
      <div className="grid grid-cols-3 place-items-center w-[59vw] gap-y-4">
        <div
          id="testimonial"
          className="grid grid-col-1 px-[2.5vw] gap-[3vh] py-[3.5vh] w-[420px] rounded-9xl p-[1vw] [background:linear-gradient(171.86deg,_#210a04,_#34150c)] shadow-[0px_2px_3px_rgba(0,_0,_0,_0.03)] box-border overflow-hidden text-left text-sm text-black font-inter border-[1px] border-solid border-gray-500"
        >
          <span className="text-white text-[22px] w-[10vw]">
            Amazing results in short time
          </span>
          <div className="flex gap-4">
            <Image
              width="10"
              height="10"
              alt=""
              src="/ellipse-2@2x.png"
              className="rounded-9xl w-[3vw] h-[3vw]"
            />
            <div className="text-white">
              <span className="text-lg">Sonic Smith</span> <br />
              <span className="text-dimgray-100">Marketing Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
