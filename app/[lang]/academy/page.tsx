import { Metadata } from 'next';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';
import Banner from '@/components/common/Banner';
import AcademyApplicantForm from '@/components/common/form/AcademyApplicantForm';
import CallToAction from '@/components/common/CallToAction';

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
            
            <main className="max-w-responsive mx-auto px-6 lg:px-8 py-12">
                {/* Intro */}
                <section className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-5xl font-header font-bold text-gray-800 mb-3">
                        NovaNest Academy
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-semibold mb-6">
                        Learn, Experience, and Grow with Real Startup Teams
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        At NovaNest Academy, we believe real learning happens through practical experience.
                        Teenagers and young adults work in a professional, dynamic environment — developing
                        practical skills through real projects alongside experienced local and international
                        mentors. Our mission is to discover talent, develop skills, and prepare young
                        professionals for successful careers.
                    </p>
                </section>

                <hr className="my-8" />

                {/* Why Join */}
                <section className="mb-12">
                    <div className="flex items-start gap-8 flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Join NovaNest Academy?</h2>
                            <p className="text-gray-700 mb-6">
                                Learning goes beyond the classroom — it happens through hands-on experience.
                            </p>

                            <ul className="grid gap-3 text-gray-700 list-none">
                                {[
                                    'Work in a dynamic, innovative, and youthful environment',
                                    'Develop practical business skills',
                                    'Opportunities for growth in an international team',
                                    'Collaborate with successful entrepreneurs and investors',
                                    'Participate for free in crash courses organized by the academy',
                                    'Learn to use professional tools like Trello, Google Workspace, and Microsoft Office',
                                    'Gain mentorship from experienced local and international professionals',
                                    'Work on international projects and gain global experience',
                                    'Receive an official certificate of internship completion and potential placement in NovaNest’s core team',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="mt-1 text-primary-600 font-bold">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-1/2 flex items-center justify-center">
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

                <hr className="my-8" />

                {/* Recruitment & Progression */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recruitment and Progression Process</h3>

                    <div className="grid gap-6 md:grid-cols-3">
                        <article className="p-5 bg-white rounded-lg shadow-sm border">
                            <h4 className="font-semibold mb-2">Phase 1: Trial Period (Up to 3 Months)</h4>
                            <ul className="text-gray-700 list-inside space-y-2">
                                <li>Introduces candidates to the work environment, team values, and responsibilities</li>
                                <li>Performance evaluated to determine suitability for next stage</li>
                                <li>Evaluation based on performance, teamwork, and commitment</li>
                                <li>Working hours are flexible; choose weekly hours and days</li>
                            </ul>
                        </article>

                        <article className="p-5 bg-white rounded-lg shadow-sm border">
                            <h4 className="font-semibold mb-2">Phase 2: Internship Period (Up to 6 Months)</h4>
                            <ul className="text-gray-700 list-inside space-y-2">
                                <li>Develop essential skills while working on real projects</li>
                                <li>Internship does not guarantee employment</li>
                                <li>Upon completion, participants receive an official certificate</li>
                            </ul>
                        </article>

                        <article className="p-5 bg-white rounded-lg shadow-sm border">
                            <h4 className="font-semibold mb-2">Phase 3: Official Employment</h4>
                            <ul className="text-gray-700 list-inside space-y-2">
                                <li>Top performers may join NovaNest’s core team</li>
                                <li>Employment includes salary, benefits, and growth opportunities</li>
                                <li>Work on international projects as part of the professional team</li>
                            </ul>
                        </article>
                    </div>
                </section>

                <hr className="my-8" />

                {/* Learning Opportunities */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Learning Opportunities</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                        {[
                            'Software development and programming',
                            'Graphic design and UI/UX',
                            'Digital marketing and sales',
                            'Content creation and media management',
                            'Project management',
                            'Finance, accounting, and data analysis',
                        ].map((area, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-lg border">
                                <p className="text-gray-800 font-medium">{area}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="my-8" />

                {/* FAQ */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h3>

                    <div className="space-y-4">
                        {[
                            {
                                q: 'Who can apply?',
                                a: 'Any motivated teenager or young adult interested in learning and working in a dynamic startup environment. No restrictions on field of study or prior experience.',
                            },
                            {
                                q: 'Is prior experience required?',
                                a: 'No. Motivation and willingness to learn are more important. Experience is a plus.',
                            },
                            {
                                q: 'Is this opportunity only for residents of Canada?',
                                a: 'No. Applicants worldwide are welcome. Some positions may require physical presence in Canada.',
                            },
                            {
                                q: 'Is the trial period mandatory?',
                                a: 'Yes. All applicants must complete the trial to get familiar with the team and workflow.',
                            },
                            {
                                q: 'Are internships paid?',
                                a: 'Internship is typically unpaid but provides professional training and real project experience.',
                            },
                            {
                                q: 'How to increase chances of official employment?',
                                a: 'Demonstrate commitment, continuous learning, and strong performance in projects.',
                            },
                        ].map((item, idx) => (
                            <details key={idx} className="bg-white rounded-lg p-4 border shadow-sm">
                                <summary className="font-medium cursor-pointer">{item.q}</summary>
                                <p className="mt-3 text-gray-700">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                <hr className="my-8" />

                {/* CTA */}
                <section className="mb-12 text-center">
                    <div className="max-w-xl mx-auto">
                        <h4 className="text-2xl font-semibold mb-3">Take your first step into the real world of startups!</h4>
                        <p className="text-gray-700 mb-6">
                            Complete the form below to join NovaNest Academy as a trainee and start your hands-on learning journey.
                        </p>
                        <CallToAction text={['Apply now — start your trainee journey today!']} />
                    </div>
                </section>

            </main>





            <hr />
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

                    <CallToAction text={t("callToAction")} />
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
