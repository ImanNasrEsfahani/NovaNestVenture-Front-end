import PriorityCard from './PriorityCard';
import { getServerTranslation } from 'app/i18n';

export default function Priority({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'mainPage');

  return (
    <div className="relative max-w-responsive mx-auto py-24">
        <h3 className="text-4xl font-header font-bold mb-20 text-gray-800 text-center">
          {t('Priorities')}
        </h3>
        <div className="flex justify-center flex-wrap gap-8 max-w-responsive mx-auto">
          {t('cardData1', { returnObjects: true }).map(
            (
              { title, image }: { title: string; image: string },
              index: number
            ) => (
              <PriorityCard
                key={index}
                title={title}
                image={image}
              />
            )
          )}
        </div>
    </div>
  );
}
