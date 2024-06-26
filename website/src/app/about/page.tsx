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
        <h1 className="text-3xl text-center font-bold text-teal-400">
          About Me
        </h1>
        <p className="text-xl text-center">
          [Insert Text]
        </p>
      </div>
    </div>
  );
}
