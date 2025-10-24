import Accordions from '@/components/startup/Accordions';
import Image from 'next/image';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import JoinOurTeamForm from '@/components/job-form/JoinOurTeamForm';
import CallToAction from '@/components/common/CallToAction';
import Intro from "@/components/common/Intro";

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
    title: string;
    items: string[];
  };

  const benefits = t('workWithUS', { returnObjects: true }).benefits as Array<{
    id: string;
    title: string;
    items: string[];
  }>;

  const accordionData = [
    ...benefits.map((b) => ({
      header: `${b.title}`,
      content: b.items
    }))
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

      <Intro
        title={t('workWithUS', { returnObjects: true }).title}
        subtitle={t('workWithUS', { returnObjects: true }).subtitle}
        description={t('workWithUS', { returnObjects: true }).description}
      />

      <div className="w-full max-w-responsive mx-auto bg-whiteGold rounded-lg p-6 md:p-8 mb-10 border-l-4 border-primary">
        <p className="text-lg text-grayDark text-left leading-relaxed">
          By joining the NovaNest Professional Team, you will gain unique opportunities:
        </p>
      </div>

      <div className="w-full max-w-responsive mx-auto grid lg:grid-cols-2 gap-12 py-12 items-stretch">
        <div className="flex flex-col justify-center">
          <Accordions data={accordionData} />
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full rounded-lg overflow-hidden h-full relative">
            <Image
              src="/static/images/join-our-team-form/services.png"
              alt="Services"
              fill
              className="object-contain rounded-lg"
              sizes="(min-width: 1024px) 400px, 100vw"
            />
          </div>
        </div>
      </div>

      <CallToAction text={t('workWithUS', { returnObjects: true }).callToAction} />

      <div className="max-w-responsive mx-auto">
        <JoinOurTeamForm lang={lang} />
      </div>
    </>
  );
}
