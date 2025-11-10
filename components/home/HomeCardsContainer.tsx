import HomeCardsSection from './HomeCardsSection';
import { getServerTranslation } from 'app/i18n';
import { CompanySectionsInterface } from '@/types/global';

export default function HomeCardsContainer ({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'mainPage');
  const cardData = (t('cards', { returnObjects: true }) as CompanySectionsInterface[]) ?? [];

  return (
    <div
      id="NovaNestVenture"
      className="relative my-20 w-full h-auto flex flex-col gap-8 mb-20"
    >
      {cardData.map(
        ({
          smallTitle,
          title,
          text,
          reverse,
          index,
          link,
          images,
          buttonText
        }) => (
          <div key={index} className="mb-40">
              <HomeCardsSection smallTitle={smallTitle} text={text} images={images} reverse={reverse} link={link} titles={title} buttonText={buttonText}/>
          </div>
        )
      )}
    </div>
  );
};
