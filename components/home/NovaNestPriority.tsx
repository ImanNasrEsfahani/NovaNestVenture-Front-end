import PriorityCard from './PriorityCard';
import { getServerTranslation } from 'app/i18n';

export default function NovaNestPriority({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'mainPage');

  return (
    <div className="relative w-full flex-col items-center justify-start gap-9 bg-white pt-16 pb-0 md:pb-16">
      <div className="flex flex-col items-start w-full">
        <div className="mb-4 flex flex-col items-start pt-4 md:pt-0 ltr:ml-4 rtl:mr-4">
          <span className="mb-5 font-header pl-10 md:pl-0 text-4xl font-bold text-black ltr:tracking-widest rtl:tracking-normal">
            {t('Priorities')}
          </span>
        </div>
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
    </div>
  );
}
