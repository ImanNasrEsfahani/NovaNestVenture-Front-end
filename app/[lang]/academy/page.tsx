import { Metadata } from 'next';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import AcademyApplicantForm from '@/components/common/form/AcademyApplicantForm';

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

            <main className="max-w-responsive mx-auto mt-10 mb-6 px-6">
                <section className="text-base">
                    <div className="px-2 pt-9 pb-16 text-center">
                        <h1 className="text-3xl font-header md:text-5xl font-bold mb-2 text-gray-800">
                            {t('title')}
                        </h1>
                        <h2 className="text-lg md:text-2xl font-semibold mb-8 text-gray-500">
                            {t("subtitle", { returnObjects: true })}
                        </h2>

                        {t('description', { returnObjects: true }).map((paragraph: string, index: number) => (
                            <p key={index} className="text-slate-700 leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="max-w-respoinsive mx-auto grid gap-8 md:grid-cols-2 items-center pb-16">
                        <div>
                            {t('features', { returnObjects: true }).text.map((paragraph: string, index: number) => (
                                <p key={index} className="text-slate-700 leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}

                            <ul className="list-disc pl-5 md:pl-12 text-base space-y-2 mb-6">
                                {t('features', { returnObjects: true }).list.map((feature: string, index: number) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>


                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md">
                                <Image
                                    src="/static/images/academy/academy-illustration.jpeg"
                                    alt="NovaNest Academy"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-md object-cover shadow"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-center leading-loose md:w-3/4 mx-auto mb-4 lg:mb-4">
                        {t('callToAction')}
                    </p>
                </section>


                <section className='max-w-responsive mx-auto pb-24 lg:px-4 w-100'>
                    <AcademyApplicantForm
                        lang={lang}
                    />
                </section>

            </main>

        </>
    );
}
