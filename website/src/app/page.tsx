// app/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import About from "./about/page";
import Education from "./education/page";
import Photography from "./sneakPhotography/page";
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
export default function Home() {
  return (
    <div>
      <div className=" bg-primary flex justify-center items-center min-h-screen relative">
        <div className="text-center z-10">
          
          <img
            src="/images/tashfeen.jpeg"
            alt="Profile Picture"
            className="w-62 h-62 rounded-full mx-auto border-4 border-gray-300"
          />
          <h1 className="text-4xl font-bold mt-4">Tashfeen Karamat</h1>
          <p className="text-xl text-white">
            Associate Professor @ Carleton University
          </p>
          <div className="flex align-middle justify-center gap-5 mt-8">
            <a
              href="https://twitter.com/basilysf1709"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter
                size={40}
                className="icon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/basilysf1709/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={40}
                className="icon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/basilysf1709/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram
                size={40}
                className="icon transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </a>
          </div>
        </div>
      </div>
      <About />
      <Education />
      <Photography />
    </div>
  );
}
