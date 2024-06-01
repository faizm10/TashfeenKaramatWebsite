// components/BrowserWindow.tsx
import React from "react";
import Image from "next/image";

const MacWCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative w-full max-w-3xl max-h-screen mx-auto mt-12">
      <div className="bg-gray-200 p-3 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col items-center py-10">
        <img
          src="/images/tashfeen.jpeg"
          alt="Profile Picture"
          //   className="w-62 h-62 rounded-full mx-auto border-4 border-gray-300"
        />
      </div>
    </div>
  );
};

export default MacWCard;
