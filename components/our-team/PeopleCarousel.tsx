'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Person = {
  image: string;
  position: string;
  name: string;
  linkedIn: string;
  category: string;
};

type Props = {
  people: Person[];
  title?: string;
};

export default function PeopleCarousel({ people, title }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // duplicate array for infinite scroll effect
  const duplicatedPeople = [...people, ...people];

  return (
    <section className="relative w-full py-12 overflow-hidden bg-gradient-to-r from-whiteGold via-white to-whiteGold">
      {/* Title */}
      {title && (
        <div className="max-w-responsive mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-header font-bold text-blue text-center">
            {title}
          </h2>
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />

        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />

        {/* Carousel Wrapper */}
        <div className="overflow-hidden px-6">
          <div className="flex gap-6 md:gap-8 animate-scroll hover:animation-paused">
            {duplicatedPeople.map((person, index) => (
              <div
                key={`${person.name}-${index}`}
                className="flex-shrink-0 w-64 md:w-72"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${people.length * 288 + people.length * 24}px);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .hover\:animation-paused:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${people.length * 256 + people.length * 24}px);
            }
          }
        }
      `}</style>
    </section>
  );
}