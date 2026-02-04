import logo from "../assets/logo.png";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="px-5 md:px-12.5 lg:px-25 2xl:px-35 py-3 md:py-4 lg:py-5 2xl:py-6 flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 2xl:gap-5 bg-gray-100">
      <Link to={"/"}>
        <img className="h-10 md:h-11 lg:h-13 2xl:h-15" src={logo} alt="logo" />
      </Link>
      <div className="flex items-center gap-3">
        <div className="h-8 lg:h-10 w-8 lg:w-10 bg-green-600 hover:bg-white hover:text-green-600 duration-500 flex items-center justify-center rounded-full text-white text-[20px]">
          <FaFacebookF />
        </div>
        <div className="h-8 lg:h-10 w-8 lg:w-10 bg-green-600 hover:bg-white hover:text-green-600 duration-500 flex items-center justify-center rounded-full text-white text-[20px]">
          <FaTwitter />
        </div>
        <div className="h-8 lg:h-10 w-8 lg:w-10 bg-green-600 hover:bg-white hover:text-green-600 duration-500 flex items-center justify-center rounded-full text-white text-[20px]">
          <RiYoutubeFill />
        </div>
      </div>
      <div className="h-0.5 w-full bg-white"></div>
      <p className="text-center">
        &copy; 2025 Md Shohag Ali. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
