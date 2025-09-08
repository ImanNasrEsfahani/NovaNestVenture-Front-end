import Banner from '../../../components/common/Banner';
import { getServerTranslation } from 'app/i18n';
import Differences from '@/components/startup/Differences';
import NatureOfStartups from '@/components/startup/NatureOfStartups';
import Gateway from '@/components/startup/Gateway';
import Services from '@/components/startup/Services';
import LatestStartups from '@/components/home/LatestStartups';
import { useLang } from 'stores/langStore';

export default async function StartUp() {

  const lang = useLang().lang;
  const t = await getServerTranslation(lang, 'startUp');

  return (
    <div>
      <div className='hidden md:inline'>
        <Banner
          image="/static/images/startup/startup-banner.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className='inline md:hidden'>
        <Banner
          image="/static/images/startup/startup-banner.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className="max-w-[1600px] mx-auto px-8 md:px-24 font-header">
        <Differences />
        <NatureOfStartups />
        <Gateway />
        <Services />
        <LatestStartups/>
      </div>
    </div>
  )
}
