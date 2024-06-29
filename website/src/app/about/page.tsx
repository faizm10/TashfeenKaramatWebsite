import React from "react";
import MacWCard from "@/components/MacWCard";
export default function About() {
  return (
    // <div className="grid grid-cols-2 gap-4 p-4 bg-slate-600 min-h-screen items-center">
    <div className="grid grid-cols-2 gap-4 p-4 bg-primary min-h-screen items-center">

<div className="flex justify-center items-center">

        <MacWCard />
      </div>
      <div className="flex flex-col justify-center text-white space-y-4 p-4">
        <h1 className="text-3xl text-center font-bold text-teal-400">About Me</h1>
        <p className="text-xl text-center">
          Welcome to my professional portfolio. I am Dr. Tashfeen B. Karamat, an
          Instructor II at Carleton University's Department of Electronics. With
          over two decades of experience in academia and industry, my work
          focuses on navigation and sensor fusion technologies. I hold a Ph.D.
          in Electrical Engineering from Queen’s University, specializing in GPS
          and inertial sensors. My research has significantly advanced land
          vehicle navigation and GPS integer ambiguity resolution. I have
          authored a book and numerous papers on these topics. At Carleton, I
          teach courses in circuits, avionics systems, and satellite-based
          navigation, while also supervising capstone design projects. My role
          involves developing course materials, managing large classes, and
          mentoring students. I am also an adjunct professor at the Royal
          Military College, collaborating on research in navigation
          technologies. My industry experience includes serving as a Senior Test
          Engineer at WiTEST Inc., where I designed and verified test solutions
          for semiconductor devices. Outside of my professional life, I am
          passionate about photography, reading, and traveling. I also volunteer
          to promote engineering and climate activism among young students.
          Thank you for visiting my portfolio. I invite you to explore my work
          and contributions to Electrical and Computer Engineering.
        </p>
      </div>
    </div>
  );
}
