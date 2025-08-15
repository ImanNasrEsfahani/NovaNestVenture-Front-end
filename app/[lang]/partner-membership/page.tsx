import Banner from '../../../components/common/Banner';
import PartnerMembershipForm from '../../../components/partner-membership/PartnerMembershipForm';
import { Metadata } from 'next';
import { useTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'Landa Holding | Partners',
  description:
    'Explore the Landa Holding Business Partner Form and discover opportunities for collaboration and partnership. Join us in shaping the future of business together.'
};

export default async function AffiliateFormPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'formComponent');

  return (
    <div>
      <Banner
        image="/static/images/Work-with-us/fb8f5583aaf3e9e272e717954c84f0be.png"
        title={t('partnerForm', { returnObjects: true }).banner}
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto">
        <PartnerMembershipForm />
      </div>
    </div>
  );
}
