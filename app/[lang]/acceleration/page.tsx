import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
// import AccelerationCard from '@/components/acceleration/AccelerationCard';
import Banner from '@/components/common/Banner';
import AccelerationApplicantForm from '@/components/common/form/AccelerationApplicantForm';
import Intro from '@/components/common/Intro';
import Why from '@/components/acceleration/Why';
import Process from '@/components/acceleration/Process';
import Impact from '@/components/acceleration/Impact';
import CallToAction from '@/components/common/CallToAction';

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
          image="/static/images/acceleration/accleration-hero.jpg"
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

      <Intro
        title={t("Intro", { returnObjects: true }).title}
        subtitle={t("Intro", { returnObjects: true }).subtitle}
        description={t("Intro", { returnObjects: true }).description}
      />
      
      <Why lang={lang} />
      <Process lang={lang} />
      <Impact lang={lang} />

      <CallToAction text={t("callToAction", { returnObjects: true })} />

      <div id="acceleration-form" className="max-w-responsive mx-auto lg:px-4 mb-36">
        <AccelerationApplicantForm lang={lang} />
      </div>
    </div>
  );
}
