
import Banner from '../../../components/common/Banner';
import MentorRegistrationForm from '../../../components/join-as-mentor/MentorRegistrationForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Join as Mentor',
  description:
    'Explore the NovaNest Venture Join as Mentor Form and take the first step towards exciting opportunities. Share your qualifications and interests with us as you apply for roles within our organization. Join us in shaping a brighter future together.',
};

export default async function JoinAsMentorPage({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = await getServerTranslation(lang, "investorForm")

  return (
    <div>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={t('banner')}
        lang={lang}
      />
      <div className='max-w-[1600px] mx-auto'>

      <MentorRegistrationForm />
      </div>
    </div>
  );
}
