import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import CallToAction from '@/components/common/CallToAction';
import '../../[lang]/globals.css';

import TraineeRegistrationForm from '@/components/join-as-a-trainee/TraineeRegistrationForm';

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
  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/join-as-a-trainee/header.png"
          title={t('joinAsATrainee', { returnObjects: true }).banner}
          lang={lang}
          backgroundPosition='top'
          backgroundSize='cover'
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/join-as-a-trainee/header-mobile.png"
          title={t('joinAsATrainee', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>

      <div className='max-w-responsive mx-auto'>
        <h1 className="font-header text-4xl font-bold text-center text-gray-800 mb-4 mt-20">
          {t("joinAsATrainee.title", { returnObjects: true })}
        </h1>

        <div className="text-xl mb-8">
          <p className="font-bold text-center text-gray-500 mb-6">
            {t("joinAsATrainee.subTitle", { returnObjects: true })}
          </p>

          {(t('joinAsATrainee.description', { returnObjects: true }) as string[] || []).map((desc: string, index: number) => (
            <p key={index} className='text-lg md:text-xl text-grayDark max-w-container-3xl mx-auto leading-relaxed mb-4'>{desc}</p>
          ))}

          <ul className="list-disc list-inside space-y-2 font-base mt-9 mb-16">
            {(t('joinAsATrainee.features', { returnObjects: true }) as string[] || []).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <CallToAction text={t("joinAsATrainee.callToAction", { returnObjects: true })} />

      <TraineeRegistrationForm lang={lang} />
    </>
  );
}
