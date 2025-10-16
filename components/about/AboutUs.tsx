import { getServerTranslation } from 'app/i18n';

export default function AboutUs({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'aboutUs');
  const aboutItems = t('AboutUsNovaNest', { returnObjects: true }) as any[];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-24 mb-36">
      <h1 className="text-2xl md:text-4xl font-header font-bold mb-6">
        {aboutItems?.[0]?.title}
      </h1>

      {aboutItems.map((item, i) => (
        <p key={i} className="text-lg text-center mb-2">
          {item.text}
        </p>
      ))}
    </div>
  );
}
