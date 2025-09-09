import Banner from '../@/components/common/Banner';
import JobForm from '../@/components/job-form/JobForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Jobs',
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
        title={t('jobForm', { returnObjects: true }).banner}
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto">
        <JobForm lang={lang} />
      </div>
    </div>
  );
}
