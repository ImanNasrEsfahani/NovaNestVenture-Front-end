import Banner from '@/components/common/Banner';
import MentorRegistrationForm from '@/components/join-as-mentor/MentorRegistrationForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

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
    emoji: string;
    title: string;
    items: string[];
  }>;

  const specialPerks = t('specialPerks', { returnObjects: true }) as {
    id: string;
    emoji: string;
    title: string;
    items: string[];
  };

  return (
    <div>
      <Banner
        image="/static/images/work-with-us/header.png"
        title={t('banner')}
        lang={lang}
      />

      {/* Mentor Benefits Section */}
      <div className='max-w-responsive mx-auto px-4 pt-12 md:pt-16'>
        {/* Main Title */}
        <div className='text-center mb-16'>
          <h1 className='text-3xl font-header md:text-5xl font-bold mb-2 text-gray-800'>{t('title')}</h1>
          <h2 className="text-lg md:text-2xl font-semibold mb-8 text-gray-500">
            {t('subtitle', { returnObjects: true })}
          </h2>
          <p className='text-lg md:text-xl text-grayDark max-w-container-3xl mx-auto leading-relaxed'>{t('description')}</p>
        </div>

        {/* Introduction Text */}
        <div className='bg-whiteGold rounded-lg p-8 mb-12 border-l-4 border-primary'>
          <p className='text-lg text-grayDark leading-relaxed'>{t('intro')}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
          {benefits.map((b) => (
            <div
              key={b.id}
              className='rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 py-8 px-6 border-t-4 border-primary'
            >
              <div className='flex items-center mb-6'>
                <span className='text-4xl mr-4'>{b.emoji}</span>
                <h2 className='text-2xl md:text-3xl font-header text-blue'>{b.title}</h2>
              </div>

              <ul className='space-y-4 list-disc marker:text-primary pl-12'>
                {b.items.map((it, i) => (
                  <li key={i} className='text-base text-grayDark'>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special Perks - Full Width (mapped) */}
        <div className='bg-gradient-to-r from-whiteGold to-darkGold rounded-lg shadow-lg p-8 mb-16 border-l-4 border-primary'>
          <div className='flex items-center mb-6'>
            <span className='text-4xl mr-4'>{specialPerks.emoji}</span>
            <h2 className='text-2xl md:text-3xl font-header text-blue'>{specialPerks.title}</h2>
          </div>

          {/* replaced grid of divs with semantic unordered list using circle bullets */}
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 list-disc marker:text-primary pl-12'>
            {specialPerks.items.map((it, i) => (
              <li key={i} className='text-base text-grayDark'>
                {it}
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-blue text-white rounded-lg p-8 mb-24'>
          <p className='text-xl md:text-2xl font-header leading-relaxed'>{t('callToAction')}</p>
        </div>

      </div>

      {/* Form Section */}
      <div className='max-w-responsive mx-auto'>
        <MentorRegistrationForm lang={lang} />
      </div>
    </div>
  );
}
