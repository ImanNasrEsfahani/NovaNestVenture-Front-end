//import Link from '@/components/icons/Link';
import Image from 'next/image';

//import Certificate from '@/components/investment/Certificate';
import { Metadata } from 'next';
import FeaturesCardsContainer from '@/components/investment/FeaturesCardsContainer';
import InvestorRegistrationForm from '@/components/investor-registration/InvestorRegistrationForm';

import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
//import ButtonRefactor from '@/components/common/ButtonRefactor';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Investment',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'investment');

  return (
    <div dir={lang === 'en' ? 'ltr' : 'rtl'} className="mb-20">
      {/* TODO: we have multiple hero with same styles. make one component for all */}
      <div className="hidden md:inline">
        <Banner
          image="/static/images/investment/investment-hero.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/investment/mobile-hero.jpg"
          title={t('banner')}
          lang={lang}
        />
      </div>

      {/* Centered Text Section */}
      <div className="flex justify-center items-center py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            Startup Investment & Entrepreneurial Growth at NovaNest Venture
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-600">
            Empowering Scalable Startups. Supporting Founders. Building the Future.
          </h3>
          <p className="text-lg leading-relaxed text-gray-700">
            At NovaNest Venture, we specialize in startup investment, entrepreneurial support, and scalable business growth, creating a thriving ecosystem where innovation meets strategic capital. Whether you're an investor seeking high-potential opportunities or an entrepreneur ready to scale your startup, NovaNest is your trusted partner.
          </p>
        </div>
      </div>


      

      <div className="max-w-responsive mx-auto flex justify-between my-28 gap-5 font-header">
        <div className="w-full">
          <div className="flex flex-col">
            <span className="text-2xl md:text-4xl mb-8 font-bold">
              {t('startUpInvestingTitle')}
            </span>
          </div>
          <p className="text-justify">{t('startUpInvestingText')}</p>
        </div>

        <div className="relative h-[300px] w-[330px] md:h-[168p] md:w-[561px] hidden md:inline">
          <Image
            className="object-cover rounded-lg"
            src="/static/images/investment/investment-startup.jpg"
            alt="flawer"
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      {/* <div className="grid grid-cols-1 items-center gap-6 px-8 py-10 md:grid-cols-2 md:gap-24 md:px-28 md:py-16">
        <div className="flex flex-col gap-6">
          <span className="font-header text-2xl text-primary md:text-4xl">
            {t('certificate')}
          </span>
          <div className="flex items-end">
            <Certificate />
            <Link size={32} addedClass="-ml-10 mb-3 z-10" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 rtl:space-y-reverse">
          <p className="text-justify font-barlow tracking-[1px]">
            {t('focusText')}
          </p> */}
      {/* <Button
            goto="/"
            size="not"
            text={lang === "en" ? "Federal Canada Corporation Information" : "اطلاعات شرکت فدرال کانادا"}
            bgColor="Primary"
            lang={lang}
          /> */}
      {/* <ButtonRefactor text={t('buttonTitle')} />
        </div>
      </div> */}
      <div className="max-w-responsive mx-auto py-10 font-header">
        <div className='flex justify-between items-center gap-6'>
          <div className="relative w-[27rem] h-[26rem] rtl:h-[22rem] hidden md:inline">
            <Image
              className="object-contain rounded-lg"
              src="/static/images/investment/nova-nest-venture-acceleration-features-cards-02.png"
              alt="flawer"
              layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="text-justify w-full">
            <span className="text-lg font-bold">
              {t('investmentstrategy')}
            </span>
            <p className="mt-6">{t('objectiveText1')}</p>
          </div>
        </div>
        <FeaturesCardsContainer lang={lang} />
      </div>
      {/* <UpcomingEvents /> */}

      {/* Investment Form */}
      <InvestorRegistrationForm lang={lang}/>
    </div>
  );
}
