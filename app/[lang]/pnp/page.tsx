import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import PNPApplicantForm from '@/components/common/form/PNPApplicantForm';
import Intro from "@/components/pnp/Intro";
import WhyStartBusiness from "@/components/pnp/WhyStartBusiness";
import Requirement from '@/components/pnp/Requirement';
import OurService from '@/components/pnp/OurService';
import Why from '@/components/pnp/Why';

export default function pnp({ params: { lang } }: { params: { lang: string } }) {

    const { t } = getServerTranslation(lang, 'pnp');
    const base = process.env.NEXT_PUBLIC_BASE_URL || "";

    return (
        <>
            <div className='hidden md:inline'>
                <Banner
                    image="/static/images/pnp/pnp-banner.png"
                    title={t('banner')}
                    lang={lang}
                />
            </div>
            <div className='inline md:hidden'>
                <Banner
                    image="/static/images/pnp/pnp-banner.png"
                    title={t('banner')}
                    lang={lang}
                />
            </div>

            <Intro lang={lang} />

            <WhyStartBusiness lang={lang} />

            <Requirement lang={lang} />

            <OurService lang={lang} />

            <Why lang={lang} />

            <section className='max-w-responsive mx-auto pt-6 pb-12 w-100'>
                <PNPApplicantForm
                    lang={lang}
                />
            </section>
        </>
    )
}