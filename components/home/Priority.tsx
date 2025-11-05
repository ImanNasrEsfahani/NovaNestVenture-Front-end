import PriorityCard from './PriorityCard';
import { getServerTranslation } from 'app/i18n';

export default function Priority({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'mainPage');
  const cardData = (t('cardData1', { returnObjects: true }) || []) as Array<{ title: string; image: string }>;

  return (
    <section className="w-full max-w-responsive mx-auto py-16 lg:py-24 text-center">
      <h3 className="text-4xl font-header font-bold mb-20 text-gray-800">
        {t('Priorities')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map(
          ({ title, image }: { title: string; image: string }, index: number) => (
            <PriorityCard key={index} title={title} image={image} />
          )
        )}
      </div>
    </section>
  );
}
