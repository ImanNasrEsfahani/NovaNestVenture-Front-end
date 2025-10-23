import Banner from '@/components/common/Banner';
import JoinAsaPartnerForm from '@/components/partner-membership/JoinAsaPartnerForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import CallToAction from '@/components/common/CallToAction';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Affiliate',
  description:
    'Explore the NovaNest Venture Affiliate Form and discover opportunities for collaboration and partnership. Join us in shaping the future of business together.'
};

export default async function AffiliateFormPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/affiliate-registeration-form/header.png"
          title={t('affiliateForm', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/affiliate-registeration-form/header-mobile.png"
          title={t('affiliateForm', { returnObjects: true }).banner}
          lang={lang}
        />
      </div>

      <div className="flex justify-center items-center pt-32 pb-16">
        <div className="max-w-[75%] mx-auto text-center">
          <h2 className="text-3xl font-header md:text-5xl font-bold mb-6 text-gray-800">
            {t("affiliateForm", { returnObjects: true }).title}
          </h2>
          <h3 className="text-lg md:text-2xl font-semibold mb-8 text-gray-500">
            {t("affiliateForm", { returnObjects: true }).subtitle}
          </h3>
          
          {t("affiliateForm", { returnObjects: true }).description.map((paragraph: string, index: number) => (
            <p key={index} className="text-lg leading-loose text-gray-700 mb-1">{paragraph}</p>
          ))}
        </div>
      </div>

      <CallToAction text={t('affiliateForm', { returnObjects: true }).callToAction} />

      <JoinAsaPartnerForm lang={lang} />
    </>
  );
}
