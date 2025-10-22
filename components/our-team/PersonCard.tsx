'use client';

import Image from 'next/image';
import Link from 'next/link';

export type Person = {
  image: string;
  position: string;
  name: string;
  linkedIn: string;
  category: string;
};

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div className="group/card bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#E9DED1] h-full flex flex-col transform hover:scale-105 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover group-hover/card:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 256px, 288px"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Link
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-blue font-semibold py-2 px-4 rounded-lg text-center hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View LinkedIn
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {person.position}
          </span>
          <h3 className="text-xl font-header font-bold text-blue mb-2">
            {person.name}
          </h3>
        </div>

        {/* Category Badge */}
        <div className="pt-4 border-t border-[#E9DED1]">
          <span className="text-sm text-grayDark capitalize">
            {person.category}
          </span>
        </div>
      </div>
    </div>
  );
}