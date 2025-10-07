import Banner from '@/components/common/Banner';
import JoinAsaPartnerForm from '@/components/partner-membership/JoinAsaPartnerForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Partners',
  description:
    'Explore the NovaNest Venture Business Partner Form and discover opportunities for collaboration and partnership. Join us in shaping the future of business together.'
};

export default async function AffiliateFormPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'formComponent');

  return (
    <div>
      <Banner
        image="/static/images/work-with-us/header.png"
        title={t('partnerForm', { returnObjects: true }).banner}
        lang={lang}
      />
      <div className="max-w-responsive mx-auto">
        <JoinAsaPartnerForm lang={lang}/>
      </div>
    </div>
  );
}
