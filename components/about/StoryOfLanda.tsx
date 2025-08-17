'use client';
import Image from 'next/image';

import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function StoryOfLanda() {
  const lang = useLang().lang;

  const { t } = useTranslation(lang, 'aboutUs');

  return (
    <div className="flex flex-col  grid-cols-2 gap-12 pb-10 pt-24">
      {/* top */}
      <div className="flex flex-col justify-between gap-5 pb-14  text-black sm:py-14 lg:flex-row">
        <div className="flex flex-col w-full md:w-[48%] md:text-justify">

          <span className="font-gilda text-2xl md:text-4xl font-bold mb-0 md:mb-10 text-black">
            {t('LANDAStartups', { returnObjects: true })[0].title}
          </span>
          <ul className="mt-5 flex flex-col space-y-3 font-barlow">
            {/* <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].StartupAcademy}
              </span>
              :
              <span className="">
                {t('LANDAStartups', { returnObjects: true })[0].StartupAcademy}
              </span>
            </li> */}
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].LandaTrip}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].LandaTrip}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].DiacoCenter}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].DiacoCenter}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].VisionRaft}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].VisionRaft}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].LandaHandicraft}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].LandaHandicraft}
            </li>
            <li className="list-disc marker:text-primary">
              <span className="font-bold text-primary">
                {t('LANDAStartups', { returnObjects: true })[1].landaGene}
              </span>
              :{t('LANDAStartups', { returnObjects: true })[0].landaGene}
            </li>
          </ul>
        </div>
        {/* top - left */}
        <div className="flex flex-col text-justify w-full md:w-[48%]">
          <div className="relative hidden md:block h-[310px] w-screen md:h-[740px] md:w-[300px] lg:w-[449px] xl:w-[589px] ">
            <div className='h-[200px]'>            
              <Image
                className="h-[1200px] hidden md:block w-full object-cover rounded-xl"
                src="/static/images/About/story/aboutus.webp"
                alt="story of NovaNest Venture"
                layout="fill"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
          {/* <div className="mt-4 order-first px-10 md:px-0 md:pl-0 md:order-last">
            <span className="mb-5 mt-9 font-gilda text-3xl text-primary">
              {t('TheStoryOfLanda', { returnObjects: true })[0].title}
            </span>
            <div className="flex flex-col space-y-4 font-barlow text-[#000]">
              <p>{t('TheStoryOfLanda', { returnObjects: true })[0].text}</p>
              <div className="flex flex-col"></div>
            </div>
          </div> */}

          <div className="font-gilda text-2xl font-bold md:text-5xl pt-10">
            {t('VISIONMission', { returnObjects: true }).title}
          </div>

      <div className=' flex justify-between gap-8 '>
        <div className='relative hidden md:block h-[310px] w-screen md:h-[310px] md:w-[48%]'>
          <Image
            className="hidden md:block object-cover w-full rounded-xl"
            src="/static/images/About/story/1.webp"
            alt="story of NovaNest Venture"
            layout="fill"
          />
        </div>
        
        <div className='text-lg w-full md:w-[48%] text-justify'>
          {t('VISIONMission', { returnObjects: true }).text}
        </div>
      </div>




          {/* <div className='md:px-32'>
       <div className='md:text-4xl font-gilda md:mb-16 gri'>
  {t('VISIONMission', { returnObjects: true }).title}
   </div>
   <div className="relative h-[310px] w-screen md:h-[319px] md:w-[661px]"> 
            <Image
              className="object-cover w-full rounded-xl"
              src="/static/images/About/story/1.png"
              alt="story of NovaNest Venture"
              layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
   <div>
   {t('VISIONMission', { returnObjects: true }).text}
   </div>
      </div> */}

          {/* top - left */}
          {/* TODO: make a for loop for this section instead of duplicate code */}
          {/* TODO: Why use [0],[1] for all translations? */}
          {/* top - right */}

          {/* top - right */}

          {/* top */}

          {/* down */}
          {/* <div className="flex w-full flex-col gap-12 text-[#000] md:flex-col md:px-32 lg:flex-row xl:flex-col">
        <div className="flex flex-col px-10 font-barlow sm:px-0 md:w-full">
          <span className="font-gilda text-3xl text-primary">
            {t('VisionOfTheLanaHolding', { returnObjects: true })[0].title}
          </span>
          <div className="mt-5 flex flex-col space-y-4 text-justify">
            <p>
              {t('VisionOfTheLanaHolding', { returnObjects: true })[0].text}
            </p>
          </div>
        </div>
        <div className="flex flex-col px-10 font-barlow sm:px-0 md:w-full">
          <span className="font-gilda text-3xl text-primary">
            {t('Our mission and purpose', { returnObjects: true })[0].title}
          </span>
          <div className="mt-5 flex flex-col space-y-4 text-justify">
            <p>
              {t('Our mission and purpose', { returnObjects: true })[0].text}
            </p>
          </div>
        </div>
      </div> */}
      {/* down */}




    </div>
  );
}