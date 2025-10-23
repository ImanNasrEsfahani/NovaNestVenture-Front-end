import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import CallToAction from '@/components/common/CallToAction';
import Intro from '@/components/common/Intro'
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

      <Intro
        title={t("joinAsATrainee.title", { returnObjects: true })}
        subtitle={t("joinAsATrainee.subTitle", { returnObjects: true })}
        description={(t('joinAsATrainee.description', { returnObjects: true }) as string[] || [])}
      />

      <CallToAction text={t("joinAsATrainee.callToAction", { returnObjects: true })} />

      <TraineeRegistrationForm lang={lang} />
    </>
  );
}
