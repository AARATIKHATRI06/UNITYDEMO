import Image from "next/image";
import logoss1 from "../images/logoss1.png";

export default function Header() {
  return (
    <div>
    <div className="flex items-center justify-between py-0 px-6  " >
    <a href="/">
      <Image src={logoss1} className="w-25 h-40 object-contain py-8 " alt="" />
    </a>

    <div className=" lg:flex space-x-10 text-white place-items-center ">
      <a
        href="/Download"
        className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
      >
        Download
      </a>
      <a
        href="/"
        className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
      >
        Nitro
      </a>
      <a
        href="/"
        className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
      >
        Why Discord?
      </a>
      <a
        href="/"
        className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
      >
        Safety
      </a>
      <a
        href="/"
        className="link  hover:text-blue-500 hover:border-spacing-2 transition duration-300 "
      >
        Support
      </a>
    </div>
    <button className="bg-white text-black p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-mediu">
      Open Unity Talk
    </button>
   
  </div>
    </div>
  )
}
