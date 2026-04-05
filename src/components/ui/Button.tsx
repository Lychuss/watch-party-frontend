"use client";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-black font-semibold 
      text-black animate-[fadeUp_1.5s_ease-out_forwards]
      focus:ring-yellow-300 focus:outline-0 text-sm w-full
      ${className}`}
      type="submit"
    >
      {children}
    </button>
  );
}