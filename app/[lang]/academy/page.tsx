import { Metadata } from 'next';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import CallToAction from '@/components/common/CallToAction';
import Accordion from '@/components/startup/Accordions';
import Intro from '@/components/common/Intro';
import TraineeRegistrationForm from '@/components/join-as-a-trainee/TraineeRegistrationForm';

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
    const raw = t('FAQ.accordion', { returnObjects: true });
    const items = Array.isArray(raw) ? raw : [];
    const mid = Math.ceil(items.length / 2);
    const left = items.slice(0, mid);
    const right = items.slice(mid);

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

            <Intro
                title={t('title')}
                subtitle={t('subtitle')}
                description={t('description', { returnObjects: true })}
            />


            {/* Why Join */}
            <section className="w-full max-w-responsive mx-auto mt-9 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col justify-center">
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
            <section className="w-full max-w-responsive mx-auto mt-9 mb-16">
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
            <section className="w-full max-w-responsive mx-auto mt-9 mb-16">
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
            <section className="w-full max-w-responsive mx-auto pt-9 py-16">
                <h3 className="text-4xl font-header leading-loose text-center font-bold">
                    {t('FAQ', { returnObjects: true }).title}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
                    <div className="space-y-4">
                        {left.map((item: any, idx: number) => (
                            <details key={idx} className="bg-white rounded-lg p-4 border shadow-sm">
                                <summary className="font-medium cursor-pointer">{item.header}</summary>
                                <div className="mt-3 text-gray-700 space-y-2">
                                    {(Array.isArray(item.content) ? item.content : [String(item.content)]).map((c: string, i2: number) => (
                                        <p key={i2} className="text-sm leading-relaxed">{c}</p>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {right.map((item: any, idx: number) => (
                            <details key={idx} className="bg-white rounded-lg p-4 border shadow-sm">
                                <summary className="font-medium cursor-pointer">{item.header}</summary>
                                <div className="mt-3 text-gray-700 space-y-2">
                                    {(Array.isArray(item.content) ? item.content : [String(item.content)]).map((c: string, i2: number) => (
                                        <p key={i2} className="text-sm leading-relaxed">{c}</p>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction text={t("callToAction")} />

            <section className='max-w-responsive mx-auto lg:px-4 w-100'>
                <TraineeRegistrationForm lang={lang} />
            </section>
        </>
    );
}
