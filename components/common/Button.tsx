'use client';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';

// Define the ButtonProps type
type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text?: string;
  size?: string;
  type?: 'button' | 'reset' | 'submit';
  bgColor?: 'Primary' | 'Yellow';
  goto?: string;
  disabled?: boolean;
  addedClass?: string;
};

export default function Button({
  text,
  size,
  type = 'button',
  bgColor,
  goto,
  disabled = false,
  addedClass = ''
}: ButtonProps) {
  const router = useRouter();

  const { send } = useSubmit()
  
  const lang = useLang().lang

  return (
    <button
      onClick={() => {
        if (disabled) return;
        if (goto) router.push(goto || '/');
      }}
      disabled={disabled}
      aria-disabled={disabled}
      className={`${bgColor === 'Primary' ? 'bg-black' : ''} 
        btn btn-wide px-10 text-center text-base text-white hover:bg-gray-800
        ${disabled ? 'opacity-75 cursor-not-allowed pointer-events-none' : ''} ${addedClass}`}
      type={type}
    >
      {text}
    </button>
  );
}