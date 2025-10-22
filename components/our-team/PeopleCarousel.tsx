'use client';

import React, { useEffect, useRef, useState } from 'react';
import PersonCard from './PersonCard';
import { Person } from '@/types/global';

type Props = {
  people: Person[];
};

export default function PeopleCarousel({ people }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // duplicate items for seamless infinite scroll
  const duplicatedPeople = [...people, ...people];

  // animation speed in pixels per frame (adjust to taste)
  const SPEED_PX_PER_FRAME = 0.2;

  // drag state
  const drag = useRef({
    startX: 0,
    startScrollLeft: 0,
    pointerId: 0
  });

  // RAF loop for auto-scrolling
  useEffect(() => {
    const el = containerRef.current;
    if (!el || people.length === 0) return;

    let rafId = 0;

    const step = () => {
      if (!isHovered && !isDragging) {
        // auto scroll
        el.scrollLeft += SPEED_PX_PER_FRAME;
        // seamless reset when we've scrolled past the duplicated half
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered, isDragging, people.length]);

  // pointer handlers for drag-to-scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      // only left button or touch
      if (e.pointerType === 'mouse' && e.button !== 0) return;

      (e.target as Element).setPointerCapture(e.pointerId);
      drag.current.pointerId = e.pointerId;
      drag.current.startX = e.clientX;
      drag.current.startScrollLeft = el.scrollLeft;
      setIsDragging(true);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || drag.current.pointerId !== e.pointerId) return;
      const dx = e.clientX - drag.current.startX;
      el.scrollLeft = drag.current.startScrollLeft - dx;
    };

    const endDrag = (e: PointerEvent) => {
      if (drag.current.pointerId !== e.pointerId) return;
      try {
        (e.target as Element).releasePointerCapture(e.pointerId);
      } catch {}
      drag.current.pointerId = 0;
      setIsDragging(false);
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
    };
  }, [isDragging]);

  // initialize scroll position so duplication starts seamlessly
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // small delay to ensure layout measured
    requestAnimationFrame(() => {
      // If container is at 0, set to 0 (start). We rely on duplicating content and RAF loop.
      if (el.scrollLeft === 0) {
        el.scrollLeft = 0;
      }
    });
  }, [people.length]);

  return (
    <section className="relative w-full py-12 overflow-hidden bg-gradient-to-r from-whiteGold via-white to-whiteGold">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />
        {/* <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" /> */}

        {/* scrollable wrapper */}
        <div
          ref={containerRef}
          className="flex gap-6 md:gap-8 py-4 px-6 overflow-x-auto scroll-smooth no-scrollbar"
          style={{
            // prevent native touch-action from interfering with our pointer drag
            touchAction: 'pan-y'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {duplicatedPeople.map((person, index) => (
            <div
              key={`${person.name}-${index}`}
              className="flex-shrink-0 w-64 md:w-72"
              // visual hover state still allowed per-card
            >
              <PersonCard person={person} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}