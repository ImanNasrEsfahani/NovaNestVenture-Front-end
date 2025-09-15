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
        <div className="max-w-responsive mx-auto text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Startup Investment & Entrepreneurial Growth at NovaNest Venture
            </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-600">
            Empowering Scalable Startups. Supporting Founders. Building the Future.
          </h3>
          <p className="text-lg leading-relaxed text-gray-700">
            At NovaNest Venture, we specialize in startup investment, entrepreneurial support, and scalable business growth, creating a thriving ecosystem where innovation meets strategic capital. Whether you&apos;re an investor seeking high-potential opportunities or an entrepreneur ready to scale your startup, NovaNest is your trusted partner.
          </p>
        </div>
      </div>


      {/* Two Cards Section */}
      <div className="max-w-responsive mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Startup Investors Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">For Startup Investors</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Investing in startups is a powerful way to generate long-term returns and support innovation. At NovaNest, we minimize risks by carefully selecting scalable ventures and providing investors with access to a global network of experts, mentors, and co-investors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Join NovaNest Venture&apos;s investment network to discover vetted startup opportunities, receive strategic insights, and contribute to the growth of purpose-driven businesses.
            </p>
            <div className="text-center">
              <a
                href="https://www.novanestventure.com/investor-registration"
                className="btn btn-primary btn-lg"
              >
                Investor Registration
              </a>
            </div>
          </div>

          {/* For Entrepreneurs & Startup Founders Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">For Entrepreneurs & Startup Founders</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Are you building a startup or launching a new business idea? NovaNest Venture offers tailored support including funding access, mentorship, and strategic guidance to help you grow your business and attract the right investors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We prioritize founder-led innovation and scalable startup models—your vision, combined with our resources, can create global impact.
            </p>
            <div className="text-center">
              <a
                href="https://www.novanestventure.com/startups-form"
                className="btn btn-success btn-lg"
              >
                Startup Application
              </a>
            </div>
          </div>
        </div>
      </div>


            {/* Why Choose NovaNest Venture Section */}
      <div className="max-w-responsive mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose NovaNest Venture?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Expert-led startup selection and risk analysis</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Full-cycle support from ideation to global scaling</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">International investor and mentor network</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Innovation-focused, entrepreneur-centric approach</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Commitment to sustainable business growth</p>
          </div>
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
