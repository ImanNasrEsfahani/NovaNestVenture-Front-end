import React from 'react';
import { getServerTranslation } from 'app/i18n';

export default function Why({ lang }: { lang: string }) {
  const { t } = getServerTranslation(lang, 'acceleration');

  const normalizeSvgString = (svg: string) => {
    if (!svg) return '';
    return svg
      .replace(/className=/g, 'class=')
      .replace(/strokeWidth=/g, 'stroke-width=')
      .replace(/strokeLinecap=/g, 'stroke-linecap=')
      .replace(/strokeLinejoin=/g, 'stroke-linejoin=');
  };

  const toHtml = (svg: string) => ({ __html: normalizeSvgString(svg) });

  return (
    <section className="w-full max-w-responsive mx-auto py-24 px-6">
      <h2 className="text-3xl font-header font-bold text-center mb-10">
        {t('why', { returnObjects: true }).title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t('why', { returnObjects: true }).items.map((item: any, i: number) => (
          <div key={i} className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-xl transition">
            <div className="card-body p-6 text-center flex flex-col items-center justify-center">
              <div
                className="size-12 rounded-full bg-indigo-50 text-primary flex items-center justify-center shrink-0 my-4"
                dangerouslySetInnerHTML={toHtml(item.icon)}
                aria-hidden="true"
              />
              <h3 className="font-header card-title text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}