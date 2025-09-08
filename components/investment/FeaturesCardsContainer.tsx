'use client'
import FeaturesCards from './FeaturesCards';
import { getServerTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default function FeaturesCardsContainer() {
  const lang = useLang.getState().lang
  const { t } = getServerTranslation(lang, 'investment');

  return (
    <div className="flex gap-8 flex-wrap md:flex-nowrap mt-28 mb-12">
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
