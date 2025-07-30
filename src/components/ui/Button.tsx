import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'outline', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-block font-normal uppercase tracking-widest transition-all duration-300';
  
  const variants = {
    outline: 'border border-coastal-text text-coastal-text hover:bg-coastal-gold hover:border-coastal-gold',
    filled: 'bg-coastal-gold border border-coastal-gold text-coastal-text hover:bg-coastal-taupe hover:border-coastal-taupe'
  };
  
  const sizes = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3 text-sm', 
    lg: 'px-12 py-4 text-base'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}