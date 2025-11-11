import { Metadata } from 'next';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import CallToAction from '@/components/common/CallToAction';
import Accordion from '@/components/startup/Accordions';
import Intro from '@/components/common/Intro';
import TraineeRegistrationForm from '@/components/join-as-a-trainee/TraineeRegistrationForm';
import Priority from '@/components/home/Priority';

// const base = process.env.NEXT_PUBLIC_BASE_URL || "";

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
    const raw = t('FAQ.accordion', { returnObjects: true }) || [];
    const items = Array.isArray(raw) ? raw : [];
    const mid = Math.ceil(items.length / 2);
    const left = items.slice(0, mid);
    const right = items.slice(mid);

    return (
        <>
            <div className="hidden md:inline">
                <Banner
                    image="/static/images/acceleration/accleration-hero.png"
                    title={t('banner')}
                    lang={lang}
                    backgroundPosition="top"
                    backgroundSize="cover"
                />
            </div>
            <div className="inline md:hidden">
                <Banner
                    image="/static/images/acceleration/accleration-heromob.png"
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
                <h3 className="text-center text-3xl font-semibold text-gray-800 mb-2">{t('why.title')}</h3>
                <p className="text-center text-gray-700 pl-4 mb-12">{t('why.description')}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="flex items-center justify-center">
                        <ul className="grid gap-1 text-gray-700 list-inside pl-4">
                            {(t('why.list', { returnObjects: true }) || []).map((text: string, idx: number) => (
                                <li key={idx} className="flex">
                                    • {text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="w-full rounded-lg overflow-hidden shadow">
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

                {/* Timeline Stages */}
                <div className="space-y-6 lg:space-y-8">
                    {(t("process.steps", { returnObjects: true }) || []).map((stage: any, index: number) => (
                        <div key={stage.id} className="relative">
                            {/* Timeline connector */}
                            {index < (t("process.steps", { returnObjects: true }) || []).length - 1 && (
                                <div
                                    className={`absolute left-8 top-20 bottom-0 w-0.5 ${stage.id === 1 ? 'bg-green-300' : stage.id === 2 ? 'bg-blue-300' : 'bg-orange-300'
                                        } hidden lg:block translate-y-8`}
                                    style={{ height: 'calc(100% + 2rem)' }}
                                />
                            )}

                            {/* Stage Card */}
                            <div className={`border-2 ${stage.borderColor} ${stage.bgColor} rounded-2xl p-6 lg:p-8 relative`}>
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                                    {/* Left Content */}
                                    <div className="flex-1">
                                        <div className="flex items-start gap-4 mb-4">
                                            {/* Icon */}
                                            <div className={`${stage.iconBgColor} rounded-full text-white p-3 w-16 h-16 flex-shrink-0`}>
                                                <div dangerouslySetInnerHTML={{ __html: stage.icon }} />
                                            </div>

                                            {/* Title Section */}
                                            <div className="flex-1">
                                                <div className={`${stage.number === 1 ? 'text-green-600' :
                                                        stage.number === 2 ? 'text-blue-600' :
                                                            'text-orange-600'
                                                    } text-6xl font-bold mb-4`}>
                                                    Stage {stage.number}
                                                </div>
                                                <h2 className="text-2xl font-bold mb-1">{stage.title}</h2>
                                                <h3 className="text-lg text-gray-700 font-bold mb-2">{stage.subtitle}</h3>
                                                <p className="text-gray-700 text-lg mb-2">{stage.duration}</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        {stage.text.map((feature: string, index: number) => (
                                            <p key={`feat-p-${index}`} className="text-base text-gray-900 ml-16">{feature}</p>
                                        ))}

                                        {/* Achivement */}
                                        <div className="ml-16 mt-6">
                                            <p className="text-lg font-bold mb-2">{stage.achivementTitle}</p>
                                            <ul className="list-disc list-inside space-y-1 pl-2">
                                                {stage.achivement.map((highlight: string, i: number) => (
                                                    <li key={i} className="text-base text-gray-900">{highlight}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Right Image */}
                                    <div className="lg:w-64 flex-shrink-0">
                                        <div className="size-full relative overflow-hidden rounded-xl">
                                            <Image
                                                src={stage.imageUrl}
                                                alt={stage.title}
                                                className="w-full h-full object-cover"
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 256px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* <div className="grid gap-6 md:grid-cols-3">
                    {(t("process.steps", { returnObjects: true }) || []).map((step: any, index: number) => (
                        <article key={index} className="p-5 bg-white rounded-lg shadow-sm border">
                            <h4 className="font-semibold text-lg mb-4">{step.title}</h4>
                            <h6 className="font-semibold text-base text-gray-900 mb-4">{step.subtitle}</h6>
                            <ul className="text-gray-700 list-inside text-sm pl-2 space-y-2">
                                {step.text.map((feature: string, index: number) => (
                                    <li key={`feat-l-${index}`}>{feature}</li>
                                ))}
                            </ul>

                            <div className="text-lg mt-4">{step.achivementTitle}</div>
                            <ul className="text-gray-700 list-inside text-sm pl-2 space-y-2">
                                {step.achivement.map((feature: string, index: number) => (
                                    <li key={`feat-l-${index}`}>{feature}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div> */}
            </section>

            {/* Learning Opportunities */}
            <Priority
                Priorities={t('opportunities.title', { returnObjects: true }) || {}}
                cardData={(t('opportunities.list', { returnObjects: true }) || []) as Array<{ title: string; image: string }>}
            />

            {/* FAQ */}
            <section className="w-full max-w-responsive mx-auto pt-9 py-16">
                <h3 className="text-4xl font-header leading-loose text-center font-bold">
                    {t('FAQ.title')}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
                    <div className="space-y-4">
                        <Accordion data={left} />
                    </div>

                    <div className="space-y-4">
                        <Accordion data={right} />
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
