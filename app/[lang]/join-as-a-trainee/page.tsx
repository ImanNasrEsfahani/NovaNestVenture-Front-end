import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
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
    <div>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/our-team/header.webp"
          title={t('joinAsATrainee', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/our-team/header-mobile.webp"
          title={t('joinAsATrainee', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>
      <div className="max-w-responsive mx-auto">
        <TraineeRegistrationForm lang={lang} />
      </div>
    </div>
  );
}
