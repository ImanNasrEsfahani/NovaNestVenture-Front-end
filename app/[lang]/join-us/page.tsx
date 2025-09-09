import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import WorkWithUs from '@/components/work-with-us/WorkWithUs';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Work With Us',
  description:
    'Explore the NovaNest Venture Apply Form and take the first step towards exciting opportunities. Share your qualifications and interests with us as you apply for roles within our organization. Join us in shaping a brighter future together.'
};

export default async function ApplyFormPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await getServerTranslation(lang, 'formComponent');

  return (
    <div dir={t('dir')}>
      <Banner
        image="/static/images/work-with-us/header.png"
        title={t('workWithUS', { returnObjects: true })['BannerTitle']}
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto">
        <WorkWithUs lang={lang} />
      </div>
    </div>
  );
}
