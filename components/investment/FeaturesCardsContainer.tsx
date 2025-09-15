import FeaturesCards from './FeaturesCards';
import { getServerTranslation } from 'app/i18n';

export default function FeaturesCardsContainer({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'investment');

  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 my-12 place-self-center">
      {t('featureCards', { returnObjects: true }).map(
        ({
          link,
          title,
          description,
          index
        }: {
          link: string;
          title: string;
          description: string;
          index: number;
        }) => (
          <FeaturesCards
            lang={lang}
            link={link}
            title={title}
            description={description}
            key={index}
          />
        )
      )}
    </div>
  );
}
