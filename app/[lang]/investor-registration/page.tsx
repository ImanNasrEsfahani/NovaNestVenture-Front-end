import Banner from '@/components/common/Banner';
import InvestorRegistrationForm from '@/components/investor-registration/InvestorRegistrationForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import CallToAction from '@/components/common/CallToAction';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Investors',
  description:
    'Explore the NovaNest Venture Investor Center, your gateway to comprehensive financial information, reports, and updates. Stay informed about our financial performance and investment opportunities.',
};

export default function InvestorRegistrationPage({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = getServerTranslation(lang, "investorForm")

  return (
    <>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/investor-registeration-form/header.png"
          title={t('banner', { returnObjects: true })}
          lang={lang}
          backgroundPosition='top'
          backgroundSize='cover'
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/investor-registeration-form/header-mobile.png"
          title={t('banner', { returnObjects: true })}
          lang={lang}
          backgroundPosition='center'
          backgroundSize='cover'
        />
      </div>

      <div className='max-w-responsive mx-auto'>
        <h1 className="font-header text-4xl font-bold text-center text-gray-800 mb-4 mt-20">
          {t("title", { returnObject: true })}
        </h1>

        <div className="text-xl mb-8">
          <p className="font-bold text-center text-gray-500 mb-12">
            {t("subTitle", { returnObject: true })}
          </p>
          
          <ul className="list-disc list-inside space-y-2 font-base mb-16">
            {(t('features', { returnObjects: true }) as string[] || []).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>


          <CallToAction text={t("callToAction", { returnObject: true })} />
        </div>
      </div>

      <InvestorRegistrationForm lang={lang} />
    </>
  );
}
