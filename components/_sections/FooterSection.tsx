import Image from "next/image";

export default function FooterSection() {
  return (
    <div className="footer-section grid grid-cols-1 my-10">
      <div className="rounded-9xl h-[71vh] flex flex-col px-12 justify-evenly card__polyblue box-border w-[1065px] h-[388px] overflow-hidden text-sm text-black font-inter border-[1px] border-solid border-gray-500">
        <div className="text-45xl font-aeonik-trial text-white flex justify-between">
          <span className="m-0">Lets get in touch</span>
          <div className="cursor-pointer flex justify-center items-center rounded-[18px] bg-white w-[154px] h-[94px] overflow-hidden">
            <Image
              width={60}
              height={60}
              alt=""
              src="/pixelarticonsarrowup1@2x.png"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Full Name" className="text-[1.1vw] text-white">
            Full Name:{" "}
          </label>
          <input
            required
            name="Full Name"
            className="placeholder-black placeholder-opacity-25 input rounded-full w-[20vw] text-[1vw] px-8 py-1 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Marc Roger"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="Full Name" className="text-[1.1vw] text-white">
            Email:{" "}
          </label>
          <input
            required
            name="Full Name"
            className="placeholder-black placeholder-opacity-25 input rounded-full text-[1vw] w-[20vw] px-8 py-1 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="marc@google.com"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Your message" className="text-[1.5vw] text-white">
            Your message
          </label>
          <textarea
            required
            name="Full Name"
            className="placeholder-black placeholder-opacity-25 input rounded-[0.5vw] text-[1vw] h-[20vh] px-8 py-1 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Hi Berty, I want to hire you"
          />
        </div>
      </div>
    </div>
  );
}
