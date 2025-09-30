import { getServerTranslation } from 'app/i18n';

export default function Intro({lang}: {lang: string}) {

    const { t } = getServerTranslation(lang, 'pnp');

    return (
        <section className="max-w-responsive mx-auto flex flex-col text-center items-center pt-24 pb-32 px-6">
            <h1 className="text-3xl font-header md:text-5xl font-bold mb-4 text-gray-800 text-center">
                {t('Intro', { returnObjects: true }).title}
            </h1>
            <span className="text-lg md:text-2xl font-semibold mb-6 text-gray-500 text-center">
                {t('Intro', { returnObjects: true }).subtitle}
            </span>
            <p className="max-w-5xl text-lg leading-loose mb-6">
                {t('Intro', { returnObjects: true }).description}
            </p>
        </section>
    );
};