import { getServerTranslation } from 'app/i18n';

export default function Intro({lang}: {lang: string}) {

    const { t } = getServerTranslation(lang, 'ourTeam');

    return (
        <section className="max-w-responsive mx-auto flex flex-col text-center items-center pt-24 pb-12 px-6">
            <h1 className="text-3xl font-header md:text-5xl font-bold mb-4 text-gray-800 text-center">
                {t('title', { returnObjects: true }).title}
            </h1>

            {t('description', { returnObjects: true }).map((p: string, i: number) => (
                <p key={i} className="max-w-5xl text-lg leading-loose mb-6">
                    {p}
                </p>
            ))}
        </section>
    );
};