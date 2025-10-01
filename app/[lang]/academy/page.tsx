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
            />
        </div>
        <div className="inline md:hidden">
            <Banner
            image="/static/images/acceleration/accleration-heromob.jpg"
            title={t('banner')}
            lang={lang}
            />
        </div>

        <main className="max-w-responsive mx-auto mt-10 mb-6 px-6">
            <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center">
            <div>
                <h1 className="text-4xl font-semibold font-header mb-4">
                {t('title')}
                </h1>

                {t('description', { returnObjects: true }).map((paragraph: string, index: number) => (
                <p key={index} className="text-slate-700 leading-relaxed mb-4">
                    {paragraph}
                </p>
                ))}

                <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-6">
                {t('features', { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                ))}
                </ul>

                <p className="text-slate-700 mb-6 lg:mb-4">
                {t('callToAction')}
                </p>
            </div>

                <div className="flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <Image
                        src="/static/images/academy/academy-illustration.jpg"
                        alt="NovaNest Academy"
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-md object-cover shadow"
                        priority={false}
                        />
                    </div>
                </div>
            </div>
            </section>
        </main>


        <section className='max-w-responsive mx-auto pb-24 lg:px-4 w-100'>
            <AcademyApplicantForm
            lang={lang}
            />
        </section>
    </>
  );
}
