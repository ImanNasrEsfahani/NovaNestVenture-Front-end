import React from 'react';
import Image from 'next/image';

interface TwoColumnLayoutProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
  activities: string[];
}

export default function TwoColumnsRole({ imageSrc, imageAlt, text, activities }: TwoColumnLayoutProps) {
  return (
    <div className="w-full max-w-responsive mx-auto grid lg:grid-cols-5 gap-8 items-center">

      <div className="col-span-3 flex flex-col justify-center items-center px-6">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify mb-4">{text}</p>
        <ul className="w-full ml-6">
          {activities.map((activity, index) => (
            <li key={index} className="mt-2 text-lg list-disc list-inside">
              {activity}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-2 relative w-full lg:h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="size-full object-cover rounded-lg shadow-md"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}