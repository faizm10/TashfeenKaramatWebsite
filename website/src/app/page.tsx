// app/page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import ParticlesBackground from "@/components/ParticlesBackhground";
export default function Home() {
  return (
    <div className="bg-blue-400 flex justify-center items-center min-h-screen relative">
      <ParticlesBackground />
      <div className="text-center z-10">
        {" "}
        <img
          src="/images/tashfeen.jpeg"
          alt="Profile Picture"
          className="w-62 h-62 rounded-full mx-auto border-4 border-gray-300"
        />
        <h1 className="text-4xl font-bold mt-4">Tashfeen Karamat</h1>
        <p className="text-xl">Associate Professor @ Carleton University</p>
      </div>
    </div>
  );
}
