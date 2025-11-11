import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import CallToAction from '@/components/common/CallToAction';
import Intro from '@/components/common/Intro';
import Accordion from '@/components/startup/Accordions';
import Image from 'next/image';
import '../../[lang]/globals.css';
import AboutUs from '@/components/about/AboutUs';
import TraineeRegistrationForm from '@/components/join-as-a-trainee/TraineeRegistrationForm';
import Priority from '@/components/home/Priority';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Join as a Trainee',
  description:
    'Meet the future leaders at NovaNest Venture by joining as a trainee. Our comprehensive trainee program is designed to nurture talent and provide hands-on experience in a dynamic work environment. Apply now to kickstart your career with us and be part of an innovative team shaping the future.',
};

export default function TraineePage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";

  const { t } = getServerTranslation(lang, 'formComponent');
  const { t: tAcademy } = getServerTranslation(lang, 'academy');

  const raw = tAcademy('FAQ.accordion', { returnObjects: true });
  const items = Array.isArray(raw) ? raw : [];
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/acceleration/accleration-hero.png"
          title={t('joinAsATrainee', { returnObjects: true }).banner}
          lang={lang}
          backgroundPosition='top'
          backgroundSize='cover'
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/acceleration/accleration-heromob.png"
          title={t('joinAsATrainee', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>

      <AboutUs
        lang={lang}
        translations={{
          AboutUs: t('joinAsATrainee.aboutUS.aboutUs', { returnObjects: true }),
          AboutUsContent: t('joinAsATrainee.aboutUS.aboutUsContent', { returnObjects: true }),
          ReadMore: t('joinAsATrainee.aboutUS.readMore', { returnObjects: true }),
        }}
        href={`${base}/about-us`}
      />

      <Intro
        title={t("joinAsATrainee.title", { returnObjects: true })}
        subtitle={t("joinAsATrainee.subTitle", { returnObjects: true })}
        description={t("joinAsATrainee.Description", { returnObjects: true })}
      />

      <section className="w-full max-w-responsive mx-auto pt-9 pb-16">
        <h2 className="text-center text-3xl font-header md:text-4xl font-bold mb-4 text-gray-800">{t('joinAsATrainee.intro')}</h2>

        <div className="grid lg:grid-cols-2 gap-12 pt-12 items-stretch">
          <div className="flex flex-col justify-center">
            <Accordion data={t('joinAsATrainee.accordion', { returnObjects: true })} />
          </div>

          <div className="flex items-center justify-center">
            <div className="size-full relative">
              <Image
                src="/static/images/academy/academy-illustration.jpeg"
                alt="Services"
                fill
                className="object-contain rounded-lg"
                sizes="(min-width: 1024px) 400px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment & Progression */}
      <section className="w-full max-w-responsive mx-auto mt-9 mb-16 px-4">
        <h3 className="text-2xl font-semibold text-gray-800 font-header text-center mb-12">{tAcademy("process.title")}</h3>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"
            style={{ width: 'calc(100% - 12rem)', marginLeft: '6rem' }} />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {(tAcademy("process.steps", { returnObjects: true }) || []).map((step: any, index: number) => (
              <div key={step.number} className="relative">
                {/* Mobile connecting line */}
                {index < (tAcademy("process.steps", { returnObjects: true }) || []).length - 1 && (
                  <div className="md:hidden absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-purple-200" />
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 hover:shadow-xl transition-all duration-300 group">
                    <span className="group-hover:scale-110 transition-transform">{step.number}</span>
                  </div>

                  {/* Icon Container */}
                  <div className="mt-6 mb-6 w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center text-blue-600">
                    <div dangerouslySetInnerHTML={{ __html: step.icon }} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-slate-900 mb-3">{step.title}</h3>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                          {/* <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> */}
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Check mark indicator */}
                  <div className="absolute -bottom-3 right-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {/* <CheckCircle2 className="w-6 h-6 text-white" /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" 
               style={{ width: 'calc(100% - 120px)', margin: '0 60px' }}>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            {(tAcademy("process.steps", { returnObjects: true }) || []).map((step: any, index: number) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 z-10 shadow-lg
                  ${index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-blue-500' : 'bg-blue-600'}`}>
                  {index + 1}
                </div>

                {index < 2 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}

                <article className={`w-full p-6 bg-white rounded-xl shadow-md border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                  ${index === 0 ? 'border-blue-400 hover:border-blue-500' : 
                    index === 1 ? 'border-blue-500 hover:border-blue-600' : 
                    'border-blue-600 hover:border-blue-700'}`}>
                
                  <h4 className="font-semibold text-xl mb-4 text-gray-800 text-center">{step.title}</h4>
                  
                  <ul className="text-gray-700 text-sm space-y-3">
                    {step.list.map((feature: string, featureIndex: number) => (
                      <li key={`feat-l-${featureIndex}`} className="flex items-start gap-2">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                          ${index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-blue-500' : 'bg-blue-600'}`}>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* Learning Opportunities */}
      <Priority
        Priorities={tAcademy('opportunities.title', { returnObjects: true })}
        cardData={(tAcademy('opportunities.list', { returnObjects: true }) || []) as Array<{ title: string; image: string }>}
      />

      <CallToAction text={t("joinAsATrainee.callToAction", { returnObjects: true })} />

      <TraineeRegistrationForm lang={lang} />

      {/* FAQ */}
      <section className="w-full max-w-responsive mx-auto pt-9 py-16">
        <h3 className="text-4xl font-header leading-loose text-center font-bold">
          {tAcademy('FAQ', { returnObjects: true }).title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
          <div className="space-y-4">
            <Accordion data={left} />
          </div>

          <div className="space-y-4">
            <Accordion data={right} />
          </div>
        </div>
      </section>
    </>
  );
}
