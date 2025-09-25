import React from 'react';
import ChevDown from 'public/static/logos/ChevDown';

interface Props {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function CollapsibleHeader({ title, isOpen, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className={`group w-full flex items-center justify-between gap-4 p-3
        bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white
        rounded-sm
        border-b border-primary/30
        hover:bg-gray-100 dark:hover:bg-gray-800
        transition-all duration-200 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/10
        ${isOpen ? 'shadow-md bg-white dark:bg-gray-800 scale-[1.01]' : ''}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center text-white">
          <ChevDown/>
        </div>
        <span className="text-left">
          <p className="text-lg text-white">{title}</p>
        </span>
      </div>
    </button>
  );
};
