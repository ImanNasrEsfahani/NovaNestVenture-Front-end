'use client';
import LatestStartupsCard from './LatestStartupsCard';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function LatestStartups() {
  const lang = useLang().lang;

  const { t } = getServerTranslation(lang, 'mainPage');

  return (
    <div>
      <div className="flex flex-col pt-28 md:pt-16">
        <div className="flex flex-col">
          <div className="flex-col items-start justify-start md:self-start">
            <div className=" flex flex-col items-center md:items-start mb-6 md:mb-12">
              <div
                className={`ltr:tracking-0 md:tracking-0 ps-1 font-condensed text-xl font-normal text-neutral-800 md:text-base ltr:tracking-[3.5px]`}
              >
                {/* {t('NovaNestVenture')} */}
              </div>
              <p className="font-gilda ">{t('NovaNestVenture')}</p>
              <div
                className={`ltr:tracking-0 md:tracking-0 ltr:font-gilda rtl:font-EBGaramond text-4xl font-bold text-black md:mt-3 md:text-[44px] ltr:tracking-[3.5px]`}
              >
                {t('LatestStartups')}
              </div>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-8 flex-wrap grid-rows-1 items-stretch">
            {t('LatestStartupsList', { returnObjects: true }).map(
              (
                {
                  image,
                  title,
                  description,
                  link
                }: {
                  image: string;
                  title: string;
                  description: string;
                  link: string;
                },
                index: number
              ) => (
                <LatestStartupsCard
                  key={index}
                  title={title}
                  image={image}
                  description={description}
                  link={link}
                  lang={t('lng')}
                />
              )
            )}
          </div>
          <div className="my-14 h-auto w-[224px] p-2 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
