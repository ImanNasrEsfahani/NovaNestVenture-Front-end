import { getServerTranslation } from 'app/i18n';
import  SpecialFeaturesClient from './SpecialFeaturesClient';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  link: string;
}

export default function SpecialFeatures({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'mainPage');
  
  const title = t('specialFeatures.title');
  const features = t('specialFeatures.features', { returnObjects: true }) as Feature[];
  const learnMoreLabel = t('specialFeatures.learnMore');

  return (
    <section className="pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-header font-bold text-center mb-16">{title}</h2>
        <SpecialFeaturesClient
          lang={lang}
          features={features}
          learnMoreLabel={learnMoreLabel}
        />
      </div>
    </section>
  );
}
