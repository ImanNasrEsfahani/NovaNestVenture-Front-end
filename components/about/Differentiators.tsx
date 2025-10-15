import React from 'react';
import { getServerTranslation } from 'app/i18n';

export default function Differentiators({ lang }: { lang: string }) {
  const { t } = getServerTranslation(lang, 'aboutUs');
  const title = t('differentiators.title');
  const items = t('differentiators.items', { returnObjects: true }) as string[];

  return (
    <section className="w-full max-w-responsive mx-auto py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-header font-bold text-center mb-6">
          {title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((text, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.629 13.137l-3.536-3.536 1.414-1.414 2.122 2.122 4.95-4.95 1.414 1.414z" />
                  </svg>
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
}