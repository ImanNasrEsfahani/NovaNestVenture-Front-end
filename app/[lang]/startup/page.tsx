import Banner from '@/components/common/Banner';
import { getServerTranslation } from 'app/i18n';
import Image from 'next/image';
import TwoColumnShowcase from '@/components/startup/TwoColumnShowcase';
import Intro from '@/components/common/Intro';
import WhoCanApply from '@/components/startup/WhoCanApply';
import OurStartupService from '@/components/startup/OurStartupService';
import Why from '@/components/startup/Why';
import SmallReservationForm from '@/components/common/form/SmallReservationForm';


export default function StartUp({ params: { lang } }: { params: { lang: string } }) {

  const { t } = getServerTranslation(lang, 'startUp');

  return (
    <>
      <div className='hidden md:inline'>
        <Banner
          image="/static/images/startup/startup-banner.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className='inline md:hidden'>
        <Banner
          image="/static/images/startup/startup-banner.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>

      <Intro
        title={t('whatIsStartupVisa.title')}
        subtitle={t('whatIsStartupVisa.subtitle')}
        description={t('whatIsStartupVisa.description')}
      />

      <WhoCanApply lang={lang} />

      <OurStartupService lang={lang} />

      <Why lang={lang} />

      <section className='max-w-responsive mx-auto py-24 px-4 w-100 lg:px-16'>
        <h3 className="text-3xl font-header font-bold text-gray-800 text-center mb-12">{t("StartupVisaRoadmap")}</h3>
        <Image
          src="/static/images/startup/startup-visa-canada-roadmap.png"
          alt="SUV startup roadmap"
          className="mx-auto w-auto max-w-4xl rounded-lg"
          width={1800}
          height={2400}
        />
      </section>

      {/* Latest Startups */}
      <section className='max-w-responsive mx-auto pt-12 px-4 w-100 lg:px-16 space-y-16 mb-16'>
        <h2 className="text-3xl font-header font-bold text-gray-800 text-center mb-12">{t("LatestStartups", { returnObjects: true })}</h2>
        {t('latest-startups', { returnObjects: true }).map(
          (startup: {
            title: string;
            description: string;
            buttonText: string;
            buttonUrl: string;
            imageSrc: string;
            imageAlt: string;
            imageLogoSrc: string;
            imageLogoAlt: string;
          }, idx: number) => (
            <TwoColumnShowcase
              key={startup.title}
              title={startup.title}
              description={startup.description}
              buttonText={startup.buttonText}
              buttonUrl={startup.buttonUrl}
              imageSrc={startup.imageSrc}
              imageAlt={startup.imageAlt}
              imageLogoSrc={startup.imageLogoSrc}
              imageLogoAlt={startup.imageLogoAlt}
              reverse={idx % 2 === 1}
              className={idx !== 0 ? "pt-32" : ""}
            />
          )
        )}
      </section>

      <section className='max-w-responsive mx-auto py-12 lg:px-4 w-100'>
        <SmallReservationForm
          lang={lang}
          subject='startup'
        />
      </section>

    </>
  )
}
