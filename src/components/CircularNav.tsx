import React from 'react';
import profileImage from '@/assets/profile-photo.jpg';

const CircularNav = () => {
  return (
    <div className="fixed top-8 left-8 z-50 animate-scale-in">
      <div className="relative w-32 h-32 animate-float">
        {/* Circular border with text */}
        <div className="absolute inset-0 rounded-full border-2 border-secondary flex items-center justify-center">
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 128 128"
          >
            <path
              id="circle-path"
              d="M 64, 64 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
              fill="none"
            />
            <text fontSize="10" fontWeight="bold" className="fill-secondary">
              <textPath href="#circle-path" startOffset="0%">
                ✦ UI/UX DESIGNER ✦ DIGITAL DESIGNER ✦ PRODUCT DESIGNER
              </textPath>
            </text>
          </svg>
        </div>
        
        {/* Profile image in center */}
        <div className="absolute inset-4 rounded-full overflow-hidden">
          <img 
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CircularNav;