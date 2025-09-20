import Banner from '@/components/common/Banner';
import { getServerTranslation } from 'app/i18n';
// import Differences from '@/components/startup/Differences';
// import NatureOfStartups from '@/components/startup/NatureOfStartups';
// import Gateway from '@/components/startup/Gateway';
// import Services from '@/components/startup/Services';
// import LatestStartups from '@/components/home/LatestStartups';
import Accordion from '@/components/startup/OurServicesAccardions';
import Image from 'next/image';
import TwoColumnShowcase from '@/components/startup/TwoColumnShowcase';
import StartupApplicantForm from '@/components/common/form/StartupApplicantForm';

export default function StartUp({ params: { lang } }: { params: { lang: string } }) {

  const { t } = getServerTranslation(lang, 'startUp');
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";

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
      
      {/* What is Startup Visa */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-header md:text-5xl font-bold mb-4 text-gray-800 text-center">
          What is Canada Startup Visa?
        </h1>
        {/* <h2 className="text-3xl font-bold font-header text-center mb-4">What is Startup Visa?</h2> */}
        <p className="text-lg md:text-2xl font-semibold mb-12 text-gray-500 text-center">Opportunities for Entrepreneurs & Investors</p>
        <p className="text-lg mb-6">
          Canada’s Startup Visa program is a special immigration pathway for entrepreneurs and investors who want to launch innovative businesses in Canada or gain permanent residency by investing in approved startups. It provides support from trusted Canadian investors and accelerators to grow your business.
        </p>

        <ul className="list-disc pl-6 text-base space-y-2">
          <li>Receive support from a designated organization approved by the Canadian government (investor or accelerator)</li>
          <li>Launch your own business or invest in innovative startups</li>
          <li>Gain permanent residency for you and your family</li>
        </ul>
      </section>

      {/* Who Can Apply */}
      <section className="bg-gray-50 py-16 pb-20 px-6">
        <h2 className="text-3xl font-bold font-header text-center mb-4">Who Can Apply?</h2>
        {/* <p className="text-center text-gray-900 text-base mb-4">Are You Eligible?</p> */}
        <p className="text-center text-gray-600 text-lg mb-10">Applicants generally fall into two categories:</p>
        <div className="max-w-responsive mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-2 font-header">Entrepreneurs with their own startup:</h3>
            {/* <p className='text-sm text-gray-600 mb-4'>Entrepreneurs with their own idea or startup:</p> */}
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Innovative, scalable idea or product</li>
              <li>• Experience to run a business</li>
              <li>• Willing to live and work in Canada</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-2 font-header">Investors without their own startup:</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Invest in approved startups</li>
              <li>• Focus on profit and collaboration</li>
              <li>• Work with accelerators & investor networks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 max-w-responsive mx-auto">
        <h3 className="text-4xl font-header leading-loose text-center font-bold mb-4">Our Services for Canada Startup Visa</h3>
        <div className='grid lg:grid-cols-2 '>
          <div className='flex flex-col justify-center'>
            <p className="text-gray-600 text-base mb-4">
              At Novanest, we work closely with Canadian Designated Organizations to provide comprehensive and specialized services for Startup Visa applicants. Our goal is to ensure a smooth, efficient, and reliable journey from concept development to permanent residency and business establishment in Canada.
            </p>
            <Accordion 
              data={t('service-details', { returnObjects: true })}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/static/images/startup/team.png"
              alt="SUV startup Services"
              className="mx-auto w-auto max-w-sm rounded-lg"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-grayDark via-gray-800 to-blue py-16 my-24">
        <div className="max-w-responsive mx-auto text-white text-center">
          <h2 className="text-3xl font-header font-bold mb-4">Why Choose NovaNest?</h2>
          <p className="text-lg mb-8">Experience • Network • Expertise</p>
          <ul className="space-y-3 text-lg">
            <li>✔ Expert team in investment & startup consulting</li>
            <li>✔ Direct links with Canadian investor networks</li>
            <li>✔ Full support from idea to settlement in Canada</li>
          </ul>
        </div>
      </section>

      {/* Latest Startups */}
      <section className='max-w-responsive mx-auto pt-12 px-4 w-100 lg:px-16 space-y-16 mb-16'>
        <h2 className="text-3xl font-header font-bold text-gray-800 text-center mb-12">Latest Startups</h2>
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

      <section className='max-w-responsive mx-auto py-24 px-4 w-100 lg:px-16'>
        <h3 className="text-3xl font-header font-bold text-gray-800 text-center mb-12">Startup Visa Roadmap</h3>
        <Image
          src="/static/images/startup/startup-visa-canada-roadmap.png"
          alt="SUV startup roadmap"
          className="mx-auto w-auto max-w-4xl rounded-lg"
          width={1800}
          height={2400}
        />
      </section>

      {/* How to Start */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-header md:text-5xl font-bold mb-4 text-gray-800 text-center">How to Start</h2>
        <p className="text-lg md:text-2xl font-semibold mb-12 text-gray-500 text-center">Your First Step to Canada</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Submit Your Info: Share your idea or investment interest.",
            "Free Consultation: We define the best path for you.",
            "Start the Process: Prepare documents & meet investors/startups.",
          ].map((step, i) => (
            <div
              key={i}
              className="card shadow-lg border border-gray-200 hover:shadow-xl transition"
            >
              <div className="card-body p-6 flex items-center">
                {i + 1}. {step}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={`${base}investor-registration`} className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg shadow hover:bg-primary transition-colors">
            Get Started
          </a>
        </div>
      </section>  
        
      <section className='max-w-responsive mx-auto py-24 px-4 w-100 lg:px-16'>
        <StartupApplicantForm
        lang={lang}
        />
      </section>


      {/* Old Content */}
      {/* <div className="max-w-responsive mx-auto px-8 md:px-24 font-header">
        <Differences lang={lang} />
        <NatureOfStartups lang={lang} />
        <Gateway lang={lang} />
        <Services lang={lang} />
        <LatestStartups lang={lang} />
      </div> */}
    </>
  )
}
