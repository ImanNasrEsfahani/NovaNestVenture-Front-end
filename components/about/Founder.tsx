import React from 'react';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';

export default function Founder({ lang }: { lang: string }) {
  const { t } = getServerTranslation(lang, 'aboutUs');
  const founder = t('founder', { returnObjects: true }) as any;

  return (
    <section className="w-full max-w-responsive mx-auto py-12 px-4 md:px-8 lg:px-16 my-16">
      <div className="bg-whiteGold rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center p-6">
          <div className="h-full flex justify-center px-2">
            <div className="size-full aspect-square relative rounded-full overflow-hidden ring-2 ring-primary/20">
              <Image
                src={founder.image?.src ?? '/static/images/about/founder-rasoul-moradimehr.png'}
                alt={founder.image?.alt ?? 'Founder of NovaNest Venture - Rasoul Moradimehr'}
                fill
                sizes="(max-width: 1024px) 40vw, 240px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-header font-bold">{founder.title}</h3>
            <h4 className="text-lg md:text-xl font-semibold text-primary">{founder.name}</h4>

            <div className="text-sm md:text-base text-gray-700 space-y-4">
              { founder.paragraphs.map((p: string, i: number) => (
                    <p key={i} className="leading-relaxed">{p}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}