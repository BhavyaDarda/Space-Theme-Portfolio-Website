import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-gradient-to-r from-[#03001417] via-[#1f0e61] to-[#03001417] backdrop-blur-md z-50 px-10 transition-all duration-300">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
          aria-label="Go to About Me section"
        >
          <Image
            src="/logo6.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Portfolio Website
          </span>
        </a>

        <div className="hidden md:flex w-auto h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 transition-transform duration-300 hover:scale-105">
            <a href="#about-me" className="cursor-pointer hover:text-white transition-colors duration-300">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-white transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-white transition-colors duration-300">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.href} key={social.name} aria-label={`Follow me on ${social.name}`} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
