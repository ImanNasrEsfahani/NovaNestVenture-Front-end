'use client';
import React from 'react';

type Props = {
  title: string;
  yesLabel: string;
  noLabel: string;
  value: boolean;
  onChange: (value: boolean) => void;
  name: string;
};

export default function YesOrNoQuestion({
  title,
  yesLabel,
  noLabel,
  value,
  onChange,
  name = 'yesOrNo',
}: Props) {

  const options = [
    { label: yesLabel, value: true },
    { label: noLabel, value: false },
  ];

  return (
    <div className="w-full md:max-w-lg xl:max-w-2xl 2xl:max-w-4xl mx-auto pb-2">
      {title && <p className="text-lg mb-4">{title}</p>}

      <div
        role="radiogroup"
        aria-label={title ?? name}
        className="w-full flex items-center justify-around bg-whiteGold drop-shadow-md px-3 rounded-lg"
      >
        {options.map((opt) => (
          <button
            key={String(opt.value)}
            type="button"
            role="radio"
            aria-checked={value === opt.value}
            onClick={() => onChange(opt.value)}
            className={`w-full flex items-center gap-3 px-12 py-4 rounded focus:outline-none transform transition-all duration-700 ease-out
              ${value === opt.value ? 'bg-white ring-2 ring-primary/70 shadow-md' : 'bg-gold hover:bg-gray-200'}`}
          >
            <span className="border-2 rounded-full border-primary p-1 flex items-center justify-center transition-colors duration-700 ease-out">
              <span className={`w-4 h-4 rounded-full transition-colors transition-transform duration-700 ease-out ${value === opt.value ? 'bg-primary' : 'bg-white'}`} />
            </span>
            <span className="text-lg select-none transition-colors duration-700 ease-out">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}