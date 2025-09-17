import PriorityCard from './PriorityCard';
import { getServerTranslation } from 'app/i18n';

export default function NovaNestPriority({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'mainPage');

  return (
    <div className="relative max-w-responsive py-24">
        <h3 className="mb-12 font-header text-4xl font-bold text-center">
          {t('Priorities')}
        </h3>
        <div className="w-full px-4">
          <div className="flex justify-center flex-wrap gap-5 max-w-responsive mx-auto">
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
    </div>
  );
}
