'use client';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
// import { getInitialProps } from 'react-i18next';

export default function AboutUsLandaHolding() {
  const lang = useLang().lang;

  const { t } = useTranslation(lang, 'aboutUs');

  return (
    // <div className="flex flex-col items-center justify-between bg-[#FAFAFA] pt-5 md:pr-[6.5rem] lg:flex-col xl:flex-row">
    // <div className="space-y-2 md:ml-20 px-6 py-2 text-black md:px-0 md:max-w-[200px]">
    //   <p className="font-gilda text-3xl font-semibold">
    //     {t('aboutLandaHolding', { returnObjects: true })[0].title}
    //   </p>
    //   <p className="mb-20  ml-0 mt-4 text-justify font-barlow font-normal tracking-wide rtl:text-base  md:mt-8 lg:w-[687px]">
    //     {t('aboutLandaHolding', { returnObjects: true })[0].text}
    //   </p>
    // </div>
    // <Image
    //   className="brightness-95 contrast-[1.15] drop-shadow-md"
    //   loading="lazy"
    //   src="/static/images/About/team.jpg"
    //   width={661}
    //   height={404}
    //   quality={100}
    //   alt="Landa Team"
    //   objectFit="cover"
    // />
    // </div>
    <div className="flex-col w-full mt-24 mb-20">
      <div className="flex flex-col-reverse items-stretch justify-between md:flex-row md:gap-8 mb-10 md:mb-0">
        <div className=" flex flex-col justify-between font-gilda text-black md:px-0 md:w-[50%]">
          <p className=" text-2xl md:text-4xl font-bold text-black mb-2 md:mb-0">
            {t('aboutLandaHolding', { returnObjects: true })[0].title}
          </p>
          <p className="text-[16px] md:text-lg text-justify">
            {t('aboutLandaHolding', { returnObjects: true })[0].text}
          </p>
        </div>
        <div className="relative object-contain mx-auto h-48 w-full md:w-[46%] md:h-[340px] mb-6 md:mb-0">
          <Image
            className="rounded-xl"
            loading="lazy"
            layout="fill"
            src="/static/images/About/team.webp"
            alt="NovaNest Venture Team"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-between md:my-16">
        <div className="relative h-48 w-full md:h-[340px] md:w-[46%] mb-6 md:mb-0">
          <Image
            className="object-cover w-full rounded-xl"
            src="/static/images/About/story/1.webp"
            alt="story of NovaNest Venture"
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col justify-between font-gilda md:px-0 md:rtl:pr-12 md:order-last md:w-[50%] md:pt-0">
          <span className=" text-2xl md:text-4xl font-bold mb-2 md:mb-0">
            {t('TheStoryOfLanda', { returnObjects: true })[0].title}
          </span>
          <div className="flex flex-col text-[16px] md:text-lg text-justify text-[#000]">
            <p>{t('TheStoryOfLanda', { returnObjects: true })[0].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
