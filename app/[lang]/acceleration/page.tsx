import { Metadata } from 'next';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';
// import AccelerationCard from '@/components/acceleration/AccelerationCard';
import Banner from '@/components/common/Banner';
import AccelerationApplicantForm from '@/components/common/form/AccelerationApplicantForm';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata: Metadata = {
  title: 'NovaNest Venture | Acceleration',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'acceleration');

  return (
    <div>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/acceleration/accleration-hero.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/acceleration/accleration-heromob.jpg"
          title={t('banner')}
          lang={lang}
        />
      </div>


      
      {/* Centered Text Section */}
      <div className="flex justify-center items-center pt-32 pb-16">
        <div className="max-w-[75%] mx-auto text-center">
            <h2 className="text-3xl font-header md:text-5xl font-bold mb-6 text-gray-800">
                NovaNest Accelerator
            </h2>
          <h3 className="text-lg md:text-2xl font-semibold mb-8 text-gray-500">
            NovaNest empowers entrepreneurs, startups, and businesses to grow and succeed in global markets
          </h3>
          <p className="text-lg leading-loose text-gray-700 mb-8">At NovaNest, we empower entrepreneurs, startups, and established businesses by guiding them from concept to sustainable success in global markets. Our mission is to accelerate growth through tailored resources, expert training, and valuable networking opportunities. Whether you are launching a new idea or scaling an existing business, we provide the support and guidance you need to achieve lasting impact.</p>
          <a href="#acceleration-form" className="btn btn-neutral text-white text-md normal-case font-light transition duration-150 ease-in-out hover:bg-primary">
            Book a free consultation 
          </a>
        </div>
      </div>

      <div className="w-full">

        {/* Why NovaNest */}
        <section className="max-w-responsive mx-auto py-24 px-6">
          <h2 className="text-3xl font-header font-bold text-center mb-10">Why NovaNest Accelerator?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Mentorship",
                text: "Access to experienced advisors and founders offering practical and strategic guidance.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 11c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zM2 20v-1a4 4 0 014-4h12a4 4 0 014 4v1" />
                  </svg>
                )
              },
              {
                title: "Global Networking",
                text: "Connections to a worldwide network of investors, entrepreneurs, and industry experts.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M12 6a6 6 0 100 12 6 6 0 000-12z" />
                  </svg>
                )
              },
              {
                title: "Hands-on Training",
                text: "Workshops and training programs covering business models, digital marketing, fundraising, and product development.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8M4 6h16v12H4z" />
                  </svg>
                )
              },
              {
                title: "Financial Support",
                text: "Assistance in securing funding through angel investors and venture capital networks.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2M12 4v2M12 18v2" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-xl transition"
              >
                <div className="card-body p-6 text-center flex flex-col items-center justify-center">
                  {/* apply the Tailwind primary text color here so svg uses it via currentColor */}
                  <div className="w-12 h-12 rounded-full bg-indigo-50 text-primary flex items-center justify-center shrink-0 my-4">
                    {item.icon}
                  </div>
                  <h3 className="font-header card-title text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-50 py-24 px-6">
          <h2 className="text-3xl font-header font-bold text-center mb-10">Acceleration Process</h2>
          <div className="max-w-responsive mx-auto space-y-6">
            {[
              "Idea Evaluation: Market analysis, competitor review, and business model assessment.",
              "Product Development: Guidance in designing and building a Minimum Viable Product (MVP).",
              "Marketing & Sales: Crafting digital marketing and sales strategies to attract initial customers.",
              "Fundraising: Preparing startups to pitch and secure investment.",
              "Global Expansion: Planning and executing strategies for entry into international markets.",
            ].map((step, i) => (
              <div
                key={i}
                className="card mx-auto max-w-6xl flex flex-row bg-base-100 shadow rounded-xl p-5 border border-gray-200"
              >
                <span className="font-bold mr-2">{i + 1}.</span>
                {step}
              </div>
            ))}
          </div>
        </section>


        {/* Impact */}
        <section className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-24 px-6">
          <div className="max-w-responsive mx-auto text-center">
            <h2 className="text-3xl font-header font-bold mb-12">Our Impact</h2>
            <ul className="space-y-4 text-lg">
              <li>✔ Secured funding from reputable investors.</li>
              <li>✔ Developed products and entered new markets.</li>
              <li>✔ Built strategic collaborations internationally.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-24 pb-4 max-w-5xl mx-auto text-center">
          <h3 className="text-xl">If you are an entrepreneur, a business owner, or have an innovative startup idea and want to accelerate your growth, we are here to support you on your journey toward global success. Book your free consultation today and let’s start this path together.</h3>
        </section>
      </div>







      {/* OLD */}
      {/* TODO: Is it better to use i18n in components instead of pass it as props? */}
      {/* <div className={`max-w-responsive mx-auto mt-28 flex justify-between gap-8 px-10 font-header md:px-28 md:py-24`}>
        <div className=" w-full  md:w-[47%]">
          <span className={`text-3xl font-bold md:text-5xl`}>
            {t('LandaAccelerator', { returnObjects: true })[0].title}
          </span>
          <span className={`block text-xl md:text-2xl mt-6`}>
            {t('LandaAccelerator', { returnObjects: true })[0].subTitle}
          </span>
          <p
            className={`pt-8 text-justify font-barlow ltr:text-lg rtl:text-base`}
          >
            {t('LandaAccelerator', { returnObjects: true })[0].text}
          </p>
        </div>
        <div className="relative hidden h-[320px] w-[45%] md:inline">
          <Image
            className="rounded-lg object-cover"
            src="/static/images/acceleration/acc-2.jpg"
            alt="lamp"
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div> */}

      {/* <div className="max-w-responsive mx-auto"> */}
        {/* TODO: make better names like ForughAccelerator */}
        {/* <AccelerationCard
          lang={lang}
          addedClass="py-28"
          title={t('FORUGHACCELERATOR', { returnObjects: true })[0].title}
          slogan={t('FORUGHACCELERATOR', { returnObjects: true })[0].subTitle}
          imageClass={`rtl:text-right ltr:text-left top-11 pl-12 w-[92px] h-[44px] flex flex-row`}
          textUp={t('FORUGHACCELERATOR', { returnObjects: true })[0].textUp}
          textDown={t('FORUGHACCELERATOR', { returnObjects: true })[0].textDown}
          secondImageSrc="/static/images/acceleration/forogh.png"
          itemsList={t('FORUGHACCELERATOR', { returnObjects: true })[0].items}
        />
        <AccelerationCard
          lang={lang}
          addedClass=" pb-28"
          title={t('FARAZAMANACCELERATOR', { returnObjects: true })[0].title}
          slogan={
            t('FARAZAMANACCELERATOR', { returnObjects: true })[0].subTitle
          }
          imageClass={`rtl:right-1 ltr:left-1 top-8 `}
          textUp={t('FARAZAMANACCELERATOR', { returnObjects: true })[0].textUp}
          textDown={
            t('FARAZAMANACCELERATOR', { returnObjects: true })[0].textDown
          }
          secondImageSrc="/static/images/acceleration/40972929a38710f62895f472ac8a9d67.png"
        />
      </div> */}

      {/* <div className={`flex flex-col ${t('lng') === 'fa' && 'items-center'}`}>
          <span className="mt-12 font-header text-3xl text-primary">
            {t('LandaAcceleratorServices', { returnObjects: true })[0].title}
          </span>
          <AccelerationServices
            services={
              t('LandaAcceleratorServices', { returnObjects: true })[0].items
            }
          />
        </div>
        <div className="my-11 flex gap-2 text-center font-barlow text-xl text-[#55422A] md:ml-[11.5rem] md:mr-[8.5rem] md:text-left ltr:tracking-[2px] rtl:md:text-right">
          <Circle />
          {t('text')}
        </div>
        <Button
          goto="/startups-form"
          size="visit"
          text={t('Register')}
          bgColor="Primary"
          lang={lang}
        /> */}
      {/* <ButtonRefactor text={t('Register')} href="{`${base}'/startups-form'`}" /> */}
      <div id="acceleration-form" className="max-w-responsive mx-auto mb-36">
         <AccelerationApplicantForm lang={lang} />
      </div>
    </div>
  );
}
