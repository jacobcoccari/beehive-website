// StandardButton.tsx
import React from 'react';

interface StandardButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
  className?: string;
}

const StandardButton = ({ 
  children, 
  variant = 'solid', 
  onClick, 
  className = '' 
}: StandardButtonProps) => {
  const baseStyles = 'font-medium py-3 px-6 rounded-lg transition-all duration-200';
  const variantStyles = {
    solid: 'bg-yellow-400 hover:bg-yellow-500 text-black',
    outline: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default StandardButton;