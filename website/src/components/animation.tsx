// src/components/AnimatedBackground.tsx
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div id="bg-wrap" className="w-full h-full absolute top-0 left-0">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stop-color="rgba(255, 0, 255, 1)" />
            <stop offset="100%" stop-color="rgba(255, 0, 255, 0)" />
          </radialGradient>
          {/* Define more gradients as needed */}
        </defs>
        {/* Rectangles with animation */}
        <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
          <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite" />
        </rect>
        {/* Add more animated elements as needed */}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
