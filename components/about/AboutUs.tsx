import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';
// import { getInitialProps } from 'react-i18next';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function AboutUs({lang}: {lang: string}) {

  const { t } = getServerTranslation(lang, 'aboutUs');

  return (
    <div className="w-full flex flex-col items-center justify-center my-24">
      <h1 className="text-2xl md:text-4xl font-header font-bold mb-6">
        {t('AboutUsNovaNest', { returnObjects: true })[0].title}
      </h1>
      <p className="text-lg text-center">
        {t('AboutUsNovaNest', { returnObjects: true })[0].text}
      </p>
    </div>
  );
}
