import { getServerTranslation } from 'app/i18n';
import Image from 'next/image';
import Banner from '@/components/common/Banner';
import Accordion from '@/components/startup/OurServicesAccardions';

export default function pnp({ params: { lang } }: { params: { lang: string } }) {

  const { t } = getServerTranslation(lang, 'pnp');
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";

  return (
    <>
        <div className='hidden md:inline'>
        <Banner
            image="/static/images/pnp/pnp-banner.png"
            title={t('banner')}
            lang={lang}
        />
        </div>
        <div className='inline md:hidden'>
        <Banner
            image="/static/images/pnp/pnp-banner.png"
            title={t('banner')}
            lang={lang}
        />
        </div>

        {/* Hero Section */}
        <section className="max-w-responsive mx-auto flex flex-col text-center items-center py-24 px-6">
            <h1 className="text-3xl font-header md:text-5xl font-bold mb-4 text-gray-800 text-center">Entrepreneurship in Canada</h1>
            <span className="text-lg md:text-2xl font-semibold mb-6 text-gray-500 text-center">Provincial Nominee Programs (PNP)</span>
            <p className="text-base mb-6">Canada is one of the world’s most attractive destinations for entrepreneurs. Through the Provincial Nominee Programs (PNP), Canadian provinces offer unique pathways for international entrepreneurs to establish or purchase a business and obtain permanent residency for themselves and their families.</p>
        </section>

        {/* Why Start a Business */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-6">Why Start a Business in Canada?</h2>
                <ul className="space-y-3 text-gray-700">
                <li>Stable and growing economy with access to domestic and international markets</li>
                <li>Continuous demand for foreign entrepreneurs and investors to boost provincial growth</li>
                <li>Strong government and provincial support, including tax incentives, investment opportunities, and solid infrastructure</li>
                <li>Clear pathway to permanent residency for applicants and their families</li>
                </ul>
            </div>
            <Image
                src="/static/images/pnp/pnp-program-canada.png"
                alt="Business Growth"
                className="rounded-xl shadow-md"
                width={500}
                height={350}
            />
        </section>

        {/* Requirements */}
        <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">General Requirements of Entrepreneurial PNP Programs</h2>
            <p className="text-gray-600 mb-8">While each province has its own specific rules, common requirements include</p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white shadow rounded-xl p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-gray-600 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9 9 0 10-12 0M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="font-semibold mb-3">Entrepreneurial Experience</h3>
                <p className="text-gray-600">Proven entrepreneurial or managerial experience</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-gray-600 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6 2a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v8z" />
                </svg>
                <h3 className="font-semibold mb-3">Minimum Investment</h3>
                <p className="text-gray-600">Minimum investment (typically CAD 100,000 – CAD 600,000 depending on the province)</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-gray-600 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2h10z" />
                </svg>
                <h3 className="font-semibold mb-3">Feasible Business Plan</h3>
                <p className="text-gray-600">A feasible business plan that meets provincial standards</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-gray-600 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 7V6a2 2 0 012-2h8a2 2 0 012 2v1m-12 0h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
                </svg>
                <h3 className="font-semibold mb-3">Job Creation</h3>
                <p className="text-gray-600">A commitment to create jobs for Canadians or permanent residents</p>
            </div>
            </div>
        </div>
        </section>

        {/* Our Services */}
        <section className="py-16 max-w-responsive mx-auto">
        <h3 className="text-4xl font-header leading-loose text-center font-bold mb-16">Our Services for Entrepreneurs</h3>
        <div className='grid lg:grid-cols-2 '>
            <div className='flex flex-col justify-center'>
            <p className="text-gray-600 text-base mb-6">At Novanest, we provide end-to-end support for your entrepreneurial journey in Canada:</p>
            <Accordion 
                data={t('service-details', { returnObjects: true })}
            />
            </div>
            <div className="flex items-center justify-center">
            <Image
                src="/static/images/pnp/pnp-services.png"
                alt="SUV startup Services"
                className="mx-auto w-auto max-w-sm rounded-lg"
                width={400}
                height={300}
            />
            </div>
        </div>
        </section>


        {/* Why Novanest */}
        <section className="bg-gradient-to-r from-grayDark via-gray-800 to-blue text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Novanest?</h2>
            <ul className="space-y-4 text-lg">
            <li>✔ Proven track record in investment & acceleration</li>
            <li>✔ Expert immigration, financial & business consultants</li>
            <li>✔ End-to-end services: planning, documentation, settlement</li>
            <li>✔ Transparent, results-driven, tailored to your success</li>
            </ul>
        </div>
        </section>

    {/* CTA */}
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
          <a href={`${base}`} className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg shadow hover:bg-primary transition-colors">
            Get Started
          </a>
        </div>
      </section>
    </>
  )
}