import FeaturesCards from './FeaturesCards';
import { getServerTranslation } from 'app/i18n';

export default function FeaturesCardsContainer({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'investment');

  return (
    <div className="flex gap-8 flex-wrap xl:flex-nowrap mt-28 mb-12">
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
