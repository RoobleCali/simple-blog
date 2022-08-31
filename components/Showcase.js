import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import me from "./shakuur/me.png";
import Link from "next/link";
function Showcase() {
  return (
    <div className="flex flex-col-reverse items-center justify-between md:flex-row">
      <div className="space-y-6 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-800 ">Personal Blog</h1>
        <p className="text-xl text-gray-400 ">
          i am front-end developer with couple of experiance <br /> i design
          websites convert into funtion web page
        </p>
        {/* social links */}
        <div className="flex justify-center space-x-4 text-2xl text-center transition-all cursor-pointer sm:justify-start ">
          <a href="https://github.com/Shakuurally">
            <BsGithub />
          </a>
          <a href="https://instagram.com/abdishakuurally">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/Shakuurally">
            <BsTwitter />
          </a>
        </div>
        {/* download button */}
        <button className="p-2 text-white duration-100 bg-blue-600 rounded-lg hover:-translate-y-1 ">
          <Link href="/Blog" download={true}>
            Browse all Blogs
          </Link>
        </button>
      </div>
      {/* right */}
      <div className="mb-10 w-80 sm:m-0">
        <Image src={me} alt="" className="object-cover rounded-full " />
      </div>
    </div>
  );
}

export default Showcase;
