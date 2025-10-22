'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LinkedInIcon from '../icons/footer/LinkedIn';
import { Person } from '@/types/global';


export default function PersonCard({ person }: { person: Person }) {
  const router = useRouter();
  const base = process.env.NEXT_PUBLIC_BASE_URL || '';

  const goToProfile = () => {
    router.push(`${base}profile/${person.slug}`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goToProfile();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={goToProfile}
      onKeyDown={onKeyDown}
      className="group/card bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#E9DED1] h-full flex flex-col transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover group-hover/card:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 256px, 288px"
        />

        <Link
          href={person.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${person.name} on LinkedIn`}
          onClick={(e) => {
            // prevent outer card click/navigation when clicking LinkedIn
            e.stopPropagation();
          }}
          className={
            "absolute top-3 right-3 z-30 rounded-full bg-white p-2 shadow-sm text-blue transition-colors duration-200 transform " +
            "group-hover/card:scale-[0.95238] group-hover/card:translate-y-2 hover:bg-primary hover:text-white"
          }
        >
          <LinkedInIcon />
        </Link>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-header font-bold text-blue mb-2">
            {person.name}
          </h3>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {person.position}
          </span>
        </div>

        {/* Category Badge */}
        <div className="pt-4 border-t border-[#E9DED1]">
          <span className="text-sm text-grayDark capitalize">
            {person.text}
          </span>
        </div>
      </div>
    </div>
  );
}