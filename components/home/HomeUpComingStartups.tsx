import React from 'react';
import UpcomingStartupsCard from './UpcomingStartupsCard';
import { getServerTranslation } from 'app/i18n';

export default async function HomeUpComingStartups({ lang }: { lang: string }) {

  const { t } = await getServerTranslation(lang, 'mainPage');

  const renderCards = (
    cardData: Array<{
      image: string;
      subTitle: string;
      text: string;
      goto: string;
      buttonText: string;
    }>
  ) => {
    return cardData.map(
      ({ image, subTitle, text, goto, buttonText }, index: number) => (
        <UpcomingStartupsCard
          image={image}
          subTitle={subTitle}
          text={text}
          goto={goto}
          buttonText={buttonText}
          key={index}
        />
      )
    );
  };

  return (
    <div className="mb-8 mt-10 min-h-[400px] md:mt-0 w-full overflow-hidden">
      <div className="my-4 font-header flex flex-col justify-start gap-6 md:items-center md:py-16 md:pt-12">
        <div className="pt-10 w-full px-6">
          <p className="pt-12 pb-1 md:pb-3">
            {t('upcomingStartups', { returnObjects: true }).NovaNestVenture}
          </p>
          <p className=" font-bold pb-0 md:pb-12 text-2xl text-black md:text-5xl ">
            {t('upcomingStartups', { returnObjects: true }).title}
          </p>
        </div>
        <div className="flex flex-col justify-center md:gap-8 md:flex-row ">
          {renderCards(t('upcomingStartups', { returnObjects: true }).cards)}
        </div>
      </div>
    </div>
  );
}
