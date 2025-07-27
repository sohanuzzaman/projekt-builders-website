import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseClasses = 'p-6';
  
  const variants = {
    default: 'bg-white',
    light: 'bg-gray-50'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}