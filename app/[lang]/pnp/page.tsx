import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import Intro from "@/components/common/Intro";
import WhyStartBusiness from "@/components/pnp/WhyStartBusiness";
import Requirement from '@/components/pnp/Requirement';
import OurPNPService from '@/components/pnp/OurPNPService';
import Why from '@/components/pnp/Why';
import CallToAction from '@/components/common/CallToAction';
import SmallReservationForm from '@/components/common/form/SmallReservationForm';

export default function pnp({ params: { lang } }: { params: { lang: string } }) {

    const { t } = getServerTranslation(lang, 'pnp');

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

            <Intro
                title={t('Intro', { returnObjects: true }).title}
                subtitle={t('intro', { returnObjects: true }).subtitle}
                description={t('intro', { returnObjects: true }).description}
            />

            <WhyStartBusiness lang={lang} />

            <Requirement lang={lang} />

            <OurPNPService lang={lang} />

            <Why lang={lang} />

            <CallToAction text={t('callToAction', { returnObjects: true })} />
            <section className='max-w-responsive mx-auto pt-6 pb-12 w-100'>
                <SmallReservationForm
                    lang={lang}
                    subject='entrepreneur-pnp'
                />
            </section>
        </>
    )
}