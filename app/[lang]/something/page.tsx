import Banner from '../../../components/common/Banner';
import { Metadata } from 'next';
// import EntrepreneursForm from '../../../components/entrepreneurs/EntrepreneursForm';
// import { SubmitProvider } from '../../../providers/StateProvider';


import { useTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'Landa Holding | Entrepreneurs',
  description:
    'Explore the Landa Holding Entrepreneurs Form and connect with us to share your entrepreneurial ideas and projects. We are interested in hearing from creative minds and visionaries. Lets collaborate to turn your entrepreneurial dreams into reality.'
};

export default async function EntrepreneursPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'entrepreneur');

  return (
    <div>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={t('banner')}
        lang={lang}
      />
      {/* <SubmitProvider>
        <EntrepreneursForm />
      </SubmitProvider> */}
    </div>
  );
}
