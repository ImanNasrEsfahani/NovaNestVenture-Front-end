import { Metadata } from 'next';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';
// import AccelerationCard from '@/components/acceleration/AccelerationCard';
import EntrepreneursForm from '@/components/entrepreneurs/EntrepreneursForm';
import Banner from '@/components/common/Banner';
import NovaNestPriority from '@/components/home/NovaNestPriority';

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


      

      <div className="w-full">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-24 px-6">
                {/* <div className={`max-w-responsive mx-auto mt-28 flex justify-between gap-8 px-10 font-header md:px-28 md:py-24`}> */}

          <div className="max-w-responsive mx-auto grid lg:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                NovaNest Accelerator
              </h1>
              <p className="text-lg mb-6">
                At NovaNest, we support entrepreneurs with innovative ideas,
                guiding them from concept to success in global markets. Our goal is
                to accelerate the growth of startups with resources, training, and
                networking opportunities.
              </p>
              <button className="btn btn-lg bg-white text-indigo-700 font-semibold hover:bg-gray-100">
                Contact Us
              </button>
            </div>
            <div className="md:col-span-1">
              <Image
                width={400}
                height={400}
                src={`${base}static/images/acceleration/novanest-accelerator-startup-mentorship-global-markets.png`}
                alt="Startup Illustration"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Why NovaNest */}
        <section className="max-w-responsive py-24 px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why NovaNest Accelerator?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Mentorship",
                text: "Access to experienced advisors and founders offering guidance.",
              },
              {
                title: "Global Networking",
                text: "Connections to a worldwide network of investors and experts.",
              },
              {
                title: "Hands-on Training",
                text: "Workshops covering business models, marketing, and fundraising.",
              },
              {
                title: "Financial Support",
                text: "Help in securing funding from angel investors and VCs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-xl transition"
              >
                <div className="card-body p-6">
                  <h3 className="card-title text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-50 py-24 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Accelerator Process</h2>
          <div className="max-w-responsive mx-auto space-y-6">
            {[
              "Idea Evaluation: Market analysis and business model assessment.",
              "Product Development: Build and refine MVPs.",
              "Marketing & Sales: Craft strategies to attract customers.",
              "Fundraising: Prepare and pitch to secure investment.",
              "Global Expansion: Strategies for entering international markets.",
            ].map((step, i) => (
              <div
                key={i}
                className="card w-full lg:max-w-xl 2xl:max-w-xl mx-auto flex flex-row bg-base-100 shadow rounded-xl p-5 border border-gray-200"
              >
                <span className="font-bold text-indigo-600 mr-2">{i + 1}.</span>
                {step}
              </div>
            ))}
          </div>
        </section>


        <NovaNestPriority lang={lang} />

        {/* Impact */}
        <section className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-24 px-6">
          <div className="max-w-responsive mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
            <ul className="space-y-4 text-lg">
              <li>✔ Secured funding from reputable investors.</li>
              <li>✔ Developed products and entered new markets.</li>
              <li>✔ Built strategic collaborations internationally.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Have an innovative idea? Let's accelerate your startup!
          </h2>
          <button className="btn btn-lg btn-primary text-white font-semibold normal-case">
            Get Started
          </button>
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
      <div className="max-w-responsive mx-auto">
         <EntrepreneursForm lang={lang} />
      </div>
    </div>
  );
}
