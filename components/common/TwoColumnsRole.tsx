import React from 'react';

interface TwoColumnLayoutProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
}

export default function TwoColumnsRole({ imageSrc, imageAlt, text }: TwoColumnLayoutProps) {
  return (
    <div className="w-full max-w-responsive mx-auto grid lg:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col justify-center items-center text-center px-6">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{text}</p>
      </div>
      <div className="relative w-full h-64 md:h-96 lg:h-auto">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}