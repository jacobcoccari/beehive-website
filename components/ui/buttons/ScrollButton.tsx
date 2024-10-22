'use client';
// ScrollButton.tsx
import React from 'react';

interface ScrollButtonProps {
  children: React.ReactNode;
  targetId: string;
  className?: string;
}

const ScrollButton = ({ children, targetId, className = '' }: ScrollButtonProps) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
