import Banner from '@/components/common/Banner';
import JoinOurTeamForm from '@/components/job-form/JoinOurTeamForm';
import Accordions from '@/components/startup/Accordions';
import Image from 'next/image';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Jobs',
  description:
    'Explore the NovaNest Venture Apply Form and take the first step towards exciting opportunities. Share your qualifications and interests with us as you apply for roles within our organization. Join us in shaping a brighter future together.'
};

export default function ApplyFormPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'formComponent');

  type Benefit = {
    id: string;
    emoji: string;
    title: string;
    items: string[];
  };

  const benefits = t('workWithUS', { returnObjects: true }).benefits as Array<{
    id: string;
    emoji: string;
    title: string;
    items: string[];
  }>;

  const specialPerks = t('workWithUS', { returnObjects: true }).specialPerks as {
    id: string;
    emoji: string;
    title: string;
    items: string[];
  };

  const accordionData = [
    ...benefits.map((b) => ({
      header: `${b.emoji} ${b.title}`,
      content: b.items
    })),
    {
      header: `${specialPerks.emoji} ${specialPerks.title}`,
      content: specialPerks.items
    }
  ];

  return (
    <>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/join-our-team-form/header.png"
          title={t('workWithUS', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/join-our-team-form/header-mobile.png"
          title={t('workWithUS', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>

      {/* Formal informational layout above the form */}
      <div className="max-w-responsive mx-auto px-4 pt-12 md:pt-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-header md:text-5xl font-bold mb-2 text-gray-800">
            {t('workWithUS', { returnObjects: true }).title}
          </h1>
          <h3 className="text-lg md:text-2xl font-semibold mb-8 text-gray-500">
            {t('workWithUS', { returnObjects: true }).subtitle}
          </h3>
          <p className="text-lg md:text-xl text-grayDark max-w-container-3xl mx-auto leading-relaxed">
            {t('workWithUS', { returnObjects: true }).description}
          </p>
        </div>

        <div className="bg-whiteGold rounded-lg p-6 md:p-8 mb-10 border-l-4 border-primary">
          <p className="text-lg text-grayDark leading-relaxed">
            By joining the NovaNest Professional Team, you will gain unique opportunities:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 py-12">
          <div className="flex flex-col justify-center">
            <Accordions data={accordionData} />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/static/images/join-as-a-mentor/services.png"
              alt="Services"
              className="mx-auto w-auto max-w-sm rounded-lg"
              width={1400}
              height={900}
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-whiteGold to-darkGold rounded-lg shadow-lg p-6 md:p-8 mb-10 border-l-4 border-primary">
          <div className="flex items-center mb-4">
            <span className="text-3xl md:text-4xl mr-4">{t('workWithUS', { returnObjects: true }).specialPerks.emoji}</span>
            <h3 className="text-2xl md:text-3xl font-header text-blue">{t('workWithUS', { returnObjects: true }).specialPerks.title}</h3>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc marker:text-primary pl-12 text-grayDark">
            {t('workWithUS', { returnObjects: true }).specialPerks.items.map((it: string, idx: number) => (
              <li key={idx} className="text-base">
                {it}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center p-6">
          <p className="text-xl md:text-2xl font-header leading-relaxed">
            {t('workWithUS', { returnObjects: true }).callToAction}
          </p>
        </div>
      </div>

      <div className="max-w-responsive mx-auto">
        <JoinOurTeamForm lang={lang} />
      </div>
    </>
  );
}
