import Banner from '@/components/common/Banner';
import MentorRegistrationForm from '@/components/join-as-mentor/MentorRegistrationForm';
import Accordions from '@/components/startup/Accordions';
import Image from 'next/image';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import CallToAction from '@/components/common/CallToAction';
import Intro from '@/components/common/Intro';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Join as Mentor',
  description:
    'Explore the NovaNest Venture Join as Mentor Form and take the first step towards exciting opportunities. Share your qualifications and interests with us as you apply for roles within our organization. Join us in shaping a brighter future together.',
};

export default function JoinAsMentorPage({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = getServerTranslation(lang, "MentorForm");

  const benefits = t('benefits', { returnObjects: true }) as Array<{
    id: string;
    title: string;
    items: string[];
  }>;

  const specialPerks = t('specialPerks', { returnObjects: true }) as {
    id: string;
    title: string;
    items: string[];
  };

  // Build accordion-friendly data
  const accordionData = [
    ...benefits.map((b) => ({
      header: `${b.title}`,
      content: b.items
    })),
    {
      header: `${specialPerks.title}`,
      content: specialPerks.items
    }
  ];

  return (
    <div>
      <Banner
        image="/static/images/work-with-us/header.png"
        title={t('banner')}
        lang={lang}
      />

      {/* Mentor Benefits Section */}
      <div className='max-w-responsive mx-auto px-4 pt-12 md:pt-16'>
        <Intro
          title={t('title', { returnObjects: true })}
          subtitle={t('subtitle', { returnObjects: true })}
          description={t('description', { returnObjects: true })}
        />

        {/* Introduction Text */}
        <div className='bg-whiteGold rounded-lg p-8 mb-12 border-l-4 border-primary'>
          <p className='text-lg text-grayDark leading-relaxed'>{t('intro')}</p>
        </div>

        <div className="grid lg:grid-cols-2 space-x-12py-12">
          <div className="flex flex-col justify-center">
            <Accordions data={accordionData} />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/static/images/join-as-a-mentor/services.png"
              alt="Services"
              className="mx-auto w-auto rounded-lg"
              width={1400}
              height={900}
            />
          </div>
        </div>


        <CallToAction text={t('callToAction')} />

      </div>

      {/* Form Section */}
      <div className='max-w-responsive mx-auto'>
        <MentorRegistrationForm lang={lang} />
      </div>
    </div>
  );
}
