import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
            image="/static/images/acceleration/accleration-hero.webp"
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

        <main className="max-w-responsive mx-auto my-20 px-6 sm:px-8">
            <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center p-8 md:p-12">
                <div>
                <h1 className="text-4xl font-semibold font-header mb-4">
                    NovaNest Academy
                </h1>

                <p className="text-slate-700 leading-relaxed mb-4">
                    At NovaNest Venture, we provide a nurturing place for individuals to discover and grow their interests and skills efficiently. Our academy operates as a dynamic environment that identifies and evaluates the potential of talented individuals, particularly the youth, and invests in their development and creative ideas.
                </p>

                <p className="text-slate-700 leading-relaxed mb-6">
                    By providing comprehensive programs and resources, and through a combination of mentoring, skill-building workshops, and exposure to various opportunities, NovaNest Venture equips participants with the tools and knowledge necessary to thrive and succeed in their chosen fields.
                </p>

                <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-6">
                    <li>Hands-on projects with international mentors</li>
                    <li>Workshops and skill-building sessions</li>
                    <li>Mentorship, feedback and career guidance</li>
                    <li>Opportunities to showcase your ideas</li>
                </ul>

                <p className="text-slate-700 mb-6">
                    If you are a teenager or young adult interested in joining the NovaNest Academy, working alongside international mentors on real projects, and gaining valuable hands-on experience, you can submit your application through the link below.
                </p>

                <div className="flex flex-wrap gap-3">
                    <Link
                    href={`${base}/${lang}/academy/apply`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-md shadow-sm transition"
                    >
                    Apply to NovaNest Academy
                    </Link>

                    <a
                    href={`${base}/${lang}/contact`}
                    className="btn btn-neutral text-white normal-case font-light transition duration-150 ease-in-out hover:bg-primary"
                    >
                    Contact Us
                    </a>
                </div>
                </div>

                <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    <Image
                    src="/static/images/academy/academy-illustration.png"
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


        <section className='max-w-responsive mx-auto py-24 px-4 w-100 lg:px-16'>
            <AcademyApplicantForm
            lang={lang}
            />
        </section>
    </>
  );
}
