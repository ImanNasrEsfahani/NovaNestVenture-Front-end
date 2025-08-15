'use client'
// import PrimaryDot from '../icons/acceleration/PrimaryDot';
import Image from 'next/image';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

// TODO: define props in types file and import it
type Props = {
  addedClass: string;
  title: string;
  slogan: string;
  imageClass: string;
  textUp: string;
  textDown: string;
  secondImageSrc: string;
  itemsList?: Array<string>;
};

export default function AccelerationCard({
  addedClass,
  title,
  slogan,
  textUp,
  textDown,
  secondImageSrc,
  itemsList
}: Props) {
  const lang = useLang().lang;

  const { t } = useTranslation(lang, 'acceleration');

  return (
    <>
      <div className={`relative flex items-center ${addedClass} px-10 md:mx-20 gap-20`}>

      <div className='relative w-[25%] hidden md:inline'>
        <Image
          className="w-full"
          src={secondImageSrc}
          alt="ACCELERATOR"
          width={521}
          height={4221}
          loading="lazy"
        />
      </div>


      <div className='w-full md:w-[75%]'>
        <div className='flex items-center justify-between md:flex-row'>
          <div className="flex flex-col md:flex-row">

              <div>
                <span className=" font-bold font-gilda text-md md:text-3xl block">
                  {title}
                </span>
                <span className=" font-bold font-gilda text-md md:text-3xl block">
                  {slogan}
                </span>
              </div>


          </div>
        </div>
        <div className="ltr:text-normal mt-6 flex flex-col pb-3 font-barlow leading-[24px] rtl:text-right md:ml-48 lg:ml-20 xl:ml-0">
          <p className={`${t('lng') && ''}`}>{textUp}</p>
          <p className={` block ${t('lng') && ''}`}>{textDown}</p>
        </div>


        {itemsList && (
          <div className="flex justify-between flex-col md:flex-row mt-8">
            <div className='flex flex-col font-barlow text-xs  md:text-sm lg:text-sm xl:text-sm  mb-8 md:mb-0'>
              <div className="flex justify-start ">
                {itemsList && (
                  <span
                    className={` font-gilda text-lg ltr:text-right xl:text-2xl`}
                  >
                    {t('AcceleratorProcess', { returnObjects: true })[0].title}
                  </span>
                )}
              </div>
              {itemsList?.map((item, index) => (
                <span
                  key={index}
                  className={`ltr:text-normal rtl:text-right lg:text-lg`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className='text-lg md:text-2xl rtl:text-right  pl-2 md:pl-0 font-gilda'>
              {t('CharacteristicsOfEntrepreneurship', { returnObjects: true }).title}
              <ul role="list" className="w-full list-disc md:text-lg text-sm  md:pb-0 rtl:text-right">
              <li>{t('itemsCharecter', { returnObjects: true }).item1}</li>
              <li>{t('itemsCharecter', { returnObjects: true }).item2}</li>
              <li>{t('itemsCharecter', { returnObjects: true }).item3}</li>
              </ul>
            </div>
          </div>

        )}
      </div>



      </div>
    </>
  );
}
