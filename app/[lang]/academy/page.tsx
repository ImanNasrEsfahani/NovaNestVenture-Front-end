import { Metadata } from 'next';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import AcademyApplicantForm from '@/components/common/form/AcademyApplicantForm';
import CallToAction from '@/components/common/CallToAction';
import Accordion from '@/components/startup/Accordions';
import Intro from '@/components/common/Intro';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata: Metadata = {
    title: 'NovaNest Venture | Academy',
    description:
        'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({
    params: { lang }
}: {
    params: { lang: string };
}) {
    const { t } = getServerTranslation(lang, 'academy');

    return (
        <>
            <div className="hidden md:inline">
                <Banner
                    image="/static/images/acceleration/accleration-hero.jpg"
                    title={t('banner')}
                    lang={lang}
                    backgroundPosition="top"
                    backgroundSize="cover"
                />
            </div>
            <div className="inline md:hidden">
                <Banner
                    image="/static/images/acceleration/accleration-heromob.jpg"
                    title={t('banner')}
                    lang={lang}
                    backgroundPosition="center"
                    backgroundSize="cover"
                />
            </div>

            <main className="max-w-responsive mx-auto px-6 lg:px-8 py-9">
                <Intro
                    title={t('title')}
                    subtitle={t('subtitle')}
                    description={t('description', { returnObjects: true })}
                />


                {/* Why Join */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="w-full flex flex-col justify-center">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('why.title')}</h2>
                            <p className="text-gray-700 pl-4 mb-2">{t('why.description')}</p>

                            <ul className="grid gap-1 text-gray-700 list-inside pl-4">
                                {(t('why.list', { returnObjects: true }) || []).map((text: string, idx: number) => (
                                    <li key={idx} className="flex">
                                        • {text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md rounded-lg overflow-hidden shadow">
                                <Image
                                    src="/static/images/academy/academy-illustration.jpeg"
                                    alt="NovaNest Academy illustration"
                                    width={900}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recruitment & Progression */}
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold text-gray-800 font-header text-center mb-6">{t("process.title")}</h3>
                    <div className="grid gap-6 md:grid-cols-3">
                        {(t("process.steps", { returnObjects: true }) || []).map((step: any, index: number) => (
                            <article key={index} className="p-5 bg-white rounded-lg shadow-sm border">
                                <h4 className="font-semibold text-lg mb-4">{step.title}</h4>
                                <ul className="text-gray-700 list-inside text-sm pl-2 space-y-2">
                                    {step.list.map((feature: string, index: number) => (
                                        <li key={`feat-l-${index}`}>{feature}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>


                {/* Learning Opportunities */}
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('opportunities.title', { returnObjects: true })}</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                        {(t('opportunities.list', { returnObjects: true }) || []).map((area: string, i: number) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-lg border">
                                <p className="text-gray-800 font-medium">{area}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 max-w-responsive mx-auto">
                    <h3 className="text-4xl font-header leading-loose text-center font-bold">{t('FAQ', { returnObjects: true }).title}</h3>
                    <p className="text-gray-600 text-base text-center mb-4 max-w-5xl mx-auto">{t('FAQ', { returnObjects: true }).description}</p>

                    <div className="grid lg:grid-cols-2 space-x-12 pt-12">
                        <div className="flex flex-col justify-center">
                            <Accordion data={t('FAQ.accordion', { returnObjects: true })} />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={t('FAQ', { returnObjects: true }).image.src}
                                alt={t('FAQ', { returnObjects: true }).image.alt}
                                className="mx-auto w-auto rounded-lg"
                                width={t('FAQ', { returnObjects: true }).image.width}
                                height={t('FAQ', { returnObjects: true }).image.height}
                            />
                        </div>
                    </div>
                </section>

                <CallToAction text={t("callToAction")} />

                <section className='max-w-responsive mx-auto pb-24 lg:px-4 w-100'>
                    <AcademyApplicantForm
                        lang={lang}
                    />
                </section>
            </main>
        </>
    );
}
