import React from 'react';
import ChevDown from 'public/static/logos/ChevDown';

interface CollapsibleHeaderProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const CollapsibleHeader: React.FC<CollapsibleHeaderProps> = ({
  title,
  isOpen,
  onToggle
}) => {
  return (
    <button 
      className="w-full md:max-w-lg xl:max-w-xl mx-auto cursor-pointer py-6 bg-grayDark border-none outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onToggle}
      type="button"
    >
      <div className='w-full h-auto flex justify-center items-center gap-2'>
        <p className="font-barlow text-white text-3xl select-none">{title}</p>
        <div className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
          <ChevDown />
        </div>
      </div>
    </button>
  );
};

export default CollapsibleHeader;