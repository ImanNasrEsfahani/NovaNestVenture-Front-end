'use client';

import React, { useState } from 'react';
import PersonCard, { Person } from './PersonCard';

type Props = {
  people: Person[];
};

export default function PeopleCarousel({ people }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  return (
    <section className="relative w-full py-12 overflow-hidden bg-gradient-to-r from-whiteGold via-white to-whiteGold">
      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />

        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />

        {/* Carousel Wrapper */}
        <div className="overflow-hidden px-6">
          <div className="flex gap-6 md:gap-8 animate-scroll hover:animation-paused">
            {people.map((person, index) => (
              <div
                key={`${person.name}-${index}`}
                className="flex-shrink-0 w-64 md:w-72"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      {/* <style jsx>{`
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
      `}</style> */}
    </section>
  );
}