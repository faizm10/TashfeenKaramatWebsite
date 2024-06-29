// app/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import About from "./about/page";
import Education from "./education/page";
import Photography from "./photography/page";
export default function Home() {
  return (
    <div>
      <div className=" bg-primary flex justify-center items-center min-h-screen relative">
        <div className="text-center z-10">
          {" "}
          <img
            src="/images/tashfeen.jpeg"
            alt="Profile Picture"
            className="w-62 h-62 rounded-full mx-auto border-4 border-gray-300"
          />
          <h1 className="text-4xl font-bold mt-4">Tashfeen Karamat</h1>
          <p className="text-xl text-white">Associate Professor @ Carleton University</p>
        </div>
      </div>
      <About />
      <Education />
      <Photography />
    </div>
  );
}
