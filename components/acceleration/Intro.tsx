import { getServerTranslation } from 'app/i18n';

type Props = { lang: string };

export default function Intro({ lang }: Props) {
    const { t } = getServerTranslation(lang, 'acceleration');

    return (
        <div className="flex justify-center items-center pt-32 pb-16">
            <div className="max-w-[75%] mx-auto text-center">
                <h2 className="text-3xl font-header md:text-5xl font-bold mb-6 text-gray-800">
                    {t("Intro", { returnObjects: true }).title}
                </h2>
                <h3 className="text-lg md:text-2xl font-semibold mb-8 text-gray-500">
                    {t("Intro", { returnObjects: true }).subtitle}
                </h3>
                <p className="text-lg leading-loose text-gray-700 mb-8">{t("Intro", { returnObjects: true }).description}</p>
            </div>
        </div>
    );
}