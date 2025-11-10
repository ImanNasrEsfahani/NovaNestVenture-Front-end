import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import Intro from "@/components/common/Intro";
import WhyStartBusiness from "@/components/pnp/WhyStartBusiness";
import Requirement from '@/components/pnp/Requirement';
import OurPNPService from '@/components/pnp/OurPNPService';
import Why from '@/components/pnp/Why';
import CallToAction from '@/components/common/CallToAction';
import SmallReservationForm from '@/components/common/form/SmallReservationForm';
import Accordions from '@/components/startup/Accordions';
import Image from 'next/image';

export default function pnp({ params: { lang } }: { params: { lang: string } }) {
    const { t } = getServerTranslation(lang, 'pnp');

    const benefits = t('faq', { returnObjects: true }) as Array<{
        id: string;
        title: string;
        items: string[];
    }>;

    // Build accordion-friendly data
    const accordionData = [
        ...benefits.map((b) => ({
            header: `${b.title}`,
            content: b.items
        }))
    ];

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

            <section className="w-full max-w-responsive mx-auto pt-32" >
                <h2 className="text-center text-3xl font-header md:text-4xl font-bold mb-4 text-gray-800">FAQ (Frequently Asked Question)</h2>

                <div className="w-full max-w-4xl mx-auto pt-9 py-12">
                    <Accordions data={accordionData} />
                </div>
            </section>
        </>
    )
}