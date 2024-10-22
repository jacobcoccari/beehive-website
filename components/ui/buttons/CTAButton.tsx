// CTAButton.tsx
import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton = ({ children, href, onClick, className = '' }: CTAButtonProps) => {
  const baseStyles = 'bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-between';
  
  const content = (
    <>
      {children}
      <svg 
        className="ml-2 w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {content}
    </button>
  );
};

export default CTAButton;

