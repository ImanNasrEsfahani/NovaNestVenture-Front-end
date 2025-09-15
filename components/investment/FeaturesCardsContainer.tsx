import FeaturesCards from './FeaturesCards';
import { getServerTranslation } from 'app/i18n';

export default function FeaturesCardsContainer({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'investment');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-28 mb-12">
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
