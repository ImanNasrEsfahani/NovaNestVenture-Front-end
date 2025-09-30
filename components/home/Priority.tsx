import PriorityCard from './PriorityCard';
import { getServerTranslation } from 'app/i18n';

export default function Priority({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'mainPage');

  return (
    <section className="py-16 lg:py-24 w-full max-w-responsive mx-auto text-center">
      <h3 className="text-4xl font-header font-bold mb-20 text-gray-800">
        {t('Priorities')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t('cardData1', { returnObjects: true }).map(
          ({ title, image }: { title: string; image: string }, index: number) => (
            <PriorityCard key={index} title={title} image={image} />
          )
        )}
      </div>
    </section>
  );
}
