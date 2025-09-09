
import Banner from '../../../components/common/Banner';
import InvestorRegistrationForm from '../../../components/investor-registration/InvestorRegistrationForm';
import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Investors',
  description:
    'Explore the NovaNest Venture Investor Center, your gateway to comprehensive financial information, reports, and updates. Stay informed about our financial performance and investment opportunities.',
};

export default async function InvestorRegistrationPage({
  params: { lang },
}: {
  params: { lang: string };
}) {

  const { t } = await getServerTranslation(lang, "investorForm")

  return (
    <div>
      <Banner
        image="/static/images/work-with-us/header.png"
        title={t('banner')}
        lang={lang}
      />
      <div className='max-w-[1600px] mx-auto'>

      <InvestorRegistrationForm lang={lang}/>
      </div>
    </div>
  );
}
