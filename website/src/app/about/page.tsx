import React from "react";
import { Avatar } from "@nextui-org/react";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-primary min-h-screen items-center">
      <div className="flex justify-center items-center">
        <Avatar src="/images/tashfeen.jpeg" className="w-40 h-40 md:w-100 md:h-100 text-large" />
      </div>
      <div className="flex flex-col justify-center text-white space-y-4 p-4 sm:flex-col">
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
