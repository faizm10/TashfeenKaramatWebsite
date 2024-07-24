"use client";
import React from "react";

interface Photo {
  src: string;
  title: string;
}

const initialPhotos: Photo[] = [
  { src: "https://via.placeholder.com/400", title: "Photo 1" },
  { src: "https://via.placeholder.com/400", title: "Photo 2" },
  { src: "https://via.placeholder.com/400", title: "Photo 3" },
  { src: "https://via.placeholder.com/400", title: "Photo 4" },
  { src: "https://via.placeholder.com/400", title: "Photo 5" },
  { src: "https://via.placeholder.com/400", title: "Photo 6" },
  // Add more initial photos if needed
];

export default function Photography() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="bg-primary flex justify-center items-center min-h-screen relative">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mt-4">Photography</h1>
          <p className="text-xl mt-4">
            Capturing moments from today, creating memories for a lifetime.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Photography Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative group border-4 border-white rounded-lg overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xl">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
