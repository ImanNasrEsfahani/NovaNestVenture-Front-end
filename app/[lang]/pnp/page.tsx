import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import Intro from "@/components/common/Intro";
import WhyStartBusiness from "@/components/pnp/WhyStartBusiness";
import Requirement from '@/components/pnp/Requirement';
import Why from '@/components/pnp/Why';
import CallToAction from '@/components/common/CallToAction';
import SmallReservationForm from '@/components/common/form/SmallReservationForm';
import Accordions from '@/components/startup/Accordions';
import DownloadGuidePanel from '@/components/DownloadGuidePanel';
import ServicesSection from '@/components/common/ServicesSection';
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
                title={t('Intro.title', { returnObjects: true })}
                subtitle={t('Intro.subtitle', { returnObjects: true })}
                description={t('Intro.description', { returnObjects: true })}
            />

            <WhyStartBusiness lang={lang} />

            <Requirement lang={lang} />

            <ServicesSection
                title={t('services.title')}
                description={t('services.description')}
                serviceDetails={t('services.serviceDetails', { returnObjects: true })}
                image={{ src: t('services.image.src'), alt: t('services.image.alt') }}
                descriptionIsHtml={true}
            />

            <Why lang={lang} />

            <section className='w-full max-w-7xl mx-auto py-24 px-4 w-100 lg:px-16'>
                <h3 className="text-3xl font-header font-bold text-gray-800 text-center mb-12">PNP Roadmap</h3>
                <Image
                    src="/static/images/pnp/roadmap.png"
                    alt="SUV startup roadmap"
                    className="mx-auto w-full max-w-full rounded-lg"
                    width={1800}
                    height={2400}
                />
            </section>

            <section id="pnp-application-form" className='max-w-responsive mx-auto pt-6 pb-12 w-100'>
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


            <DownloadGuidePanel
                href="/pdfs/pnp-canada-catalogue-novanest-venture-en.pdf"
                buttonLabel="Download Catalogue (PDF)"
                fileName="PNP Entrepreneur Guide"
                fileSize="1.8 MB"
            />
        </>
    )
}