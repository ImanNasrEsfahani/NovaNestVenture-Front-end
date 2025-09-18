import HomeCards from './HomeCards';
import { getServerTranslation } from 'app/i18n';
import { CompanySectionsInterface } from '@/types/global';

const HomeCardsContainer = ({lang}: {lang: string}) => {
  const { t } = getServerTranslation(lang, 'mainPage');

  const renderHomeCards = (cardData: CompanySectionsInterface[]) => {
    return (
      <div className="w-full h-auto flex flex-col gap-8 mb-20">
        {cardData.map(
          ({
            smallTitle,
            title,
            text,
            reverse,
            index,
            link,
            addedClass,
            images,
            buttonText
          }) => (
            <HomeCards
              smallTitle={smallTitle}
              key={index}
              titles={title}
              text={text}
              images={images}
              reverse={reverse}
              addedClass={addedClass}
              link={link}
              buttonText={buttonText}
            />
          )
        )}
      </div>
    );
  };

  return (
    <div className="relative text-black my-20" id="NovaNestVenture">
      {renderHomeCards(t('cards', { returnObjects: true }))}
    </div>
  );
};

export default HomeCardsContainer;
