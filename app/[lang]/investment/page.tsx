//import Link from '@/components/icons/Link';
import Image from 'next/image';

//import Certificate from '@/components/investment/Certificate';
import { Metadata } from 'next';
// import FeaturesCardsContainer from '@/components/investment/FeaturesCardsContainer';
// import InvestorRegistrationForm from '@/components/investor-registration/InvestorRegistrationForm';
import NovaNestPriority from '@/components/home/NovaNestPriority';

import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
//import ButtonRefactor from '@/components/common/ButtonRefactor';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

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
      <div className="flex justify-center items-center pt-32 pb-16">
        <div className="max-w-[75%] mx-auto text-center">
            <h2 className="text-3xl font-header md:text-5xl font-bold mb-6 text-gray-800">
            Startup Investment & Entrepreneurial Growth
            </h2>
          <h3 className="text-lg md:text-2xl font-semibold mb-8 text-gray-500">
            Empowering Scalable Startups. Supporting Founders. Building the Future.
          </h3>
          <p className="text-lg leading-loose text-gray-700">
            At NovaNest Venture, we specialize in startup investment, entrepreneurial support, and scalable business growth, creating a thriving ecosystem where innovation meets strategic capital. Whether you&apos;re an investor seeking high-potential opportunities or an entrepreneur ready to scale your startup, NovaNest is your trusted partner.
          </p>
        </div>
      </div>


      {/* Two Cards Section */}
      <div className="max-w-responsive mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Startup Investors Card */}
          <div className="flex flex-col get-shadow-g p-12 pt-20 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center mb-6">
              <h3 className="font-header text-3xl font-bold text-gray-800">For Startup Investors</h3>
            </div>
            <div className='text-base leading-loose'>            
              <p className="mb-6">
                Investing in startups is a powerful way to generate long-term returns and support innovation. At NovaNest, we minimize risks by carefully selecting scalable ventures and providing investors with access to a global network of experts, mentors, and co-investors.
              </p>
              <p className="">
                Join NovaNest Venture&apos;s investment network to discover vetted startup opportunities, receive strategic insights, and contribute to the growth of purpose-driven businesses.
              </p>
            </div>
            <div className="text-center mt-12">
              <a
                href={`${base}investor-registration`}
                className="btn btn-neutral text-white btn-lg normal-case font-light transition duration-150 ease-in-out hover:bg-primary"
              >
                Investor Registration
              </a>
            </div>
          </div>

          {/* For Entrepreneurs & Startup Founders Card */}
          <div className="flex flex-col get-shadow-g p-12 pt-20 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center mb-6">
              <h3 className="font-header text-3xl font-bold text-gray-800">For Entrepreneurs & Startup Founders</h3>
            </div>
            <div className='text-base leading-loose'>
              <p className="mb-6">
                Are you leading a startup with a validated MVP? At NovaNest Venture, we provide tailored support to help you scale and succeed. Our services include funding access, expert mentorship, and strategic guidance designed to accelerate growth. 
              </p>
              <p className="">
                We focus on founder-led innovation and scalable business models, empowering your startup with the right resources and connections to reach investors and expand globally.
              </p>
            </div>
            <div className="text-center mt-12">
                <a
                href={`${base}startups-form`}
                className="btn btn-neutral text-white btn-lg normal-case font-light transition duration-150 ease-in-out hover:bg-primary"
                >
                Startup Validation
                </a>
            </div>
          </div>
        </div>
      </div>


            {/* Why Choose NovaNest Venture Section */}
      <div className="max-w-responsive mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="mx-auto flex flex-col justify-center">
            <h2 className="text-4xl font-header font-bold text-gray-800 mb-8">Why Choose NovaNest Venture?</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 items-center ">
              <li className="font-medium">Expert-led startup selection and risk analysis</li>
              <li className="font-medium">Full-cycle support from ideation to global scaling</li>
              <li className="font-medium">International investor and mentor network</li>
              <li className="font-medium">Innovation-focused, entrepreneur-centric approach</li>
              <li className="font-medium">Commitment to sustainable business growth</li>
              <li className="font-medium">Tailored guidance for growth challenges</li>
              <li className="font-medium">Access to exclusive resources and tools for faster growth</li>
              <li className="font-medium">Proven track record of successful startups</li>
            </ul>
          </div>
          <div>
            <Image
              src="/static/images/investment/investment-why-choose-us.png"
              alt="Why Choose Us - Nova Nest Venture"
              width={500}
              height={300}
              className="rounded-lg shadow-lg object-cover h-auto mx-auto"
            />
          </div>
        </div>

      </div>

      <NovaNestPriority lang={lang} />

      {/* <div className="max-w-responsive mx-auto flex justify-between my-28 gap-5 font-header">
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
      </div> */}
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
      {/* <div className="max-w-responsive mx-auto py-10 font-header">
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
      </div> */}
      {/* <UpcomingEvents /> */}

      {/* Investment Form */}
      {/* <InvestorRegistrationForm lang={lang}/> */}
    </div>
  );
}
