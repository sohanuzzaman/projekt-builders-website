import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export default function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    full: 'max-w-full'
  };

  const classes = `${sizes[size]} mx-auto px-6 md:px-12 ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}