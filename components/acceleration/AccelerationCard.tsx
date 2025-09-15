// import PrimaryDot from '@/components/icons/acceleration/PrimaryDot';
import Image from 'next/image';
import { getServerTranslation } from 'app/i18n';

// TODO: define props in types file and import it
type Props = {
  lang: string;
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
  lang,
  addedClass,
  title,
  slogan,
  textUp,
  textDown,
  secondImageSrc,
  itemsList
}: Props) {

  const { t } = getServerTranslation(lang, 'acceleration');

  return (
    <>
      <div className={`relative flex items-center ${addedClass} px-10 md:mx-20 gap-20`}>

      <div className='relative w-1/4 hidden md:inline'>
        <Image
          className="w-full"
          src={secondImageSrc}
          alt="ACCELERATOR"
          width={521}
          height={4221}
          loading="lazy"
        />
      </div>


      <div className='w-full md:w-3/4'>
        <div className='flex items-center justify-between md:flex-row'>
          <div className="flex flex-col md:flex-row">

              <div>
                <span className="font-bold font-header text-md md:text-3xl block">
                  {title}
                </span>
                <span className="font-bold font-header text-md md:text-3xl block">
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
                    className="font-header text-lg ltr:text-right xl:text-2xl"
                  >
                    {t('AcceleratorProcess', { returnObjects: true })[0].title}
                  </span>
                )}
              </div>
              <ul>
                {itemsList?.map((item, index) => (
                  <li
                    key={index}
                    className={`ltr:text-normal rtl:text-right lg:text-lg`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ul>
                {itemsList?.map((item, index) => (
                  <li
                    key={index}
                    className={`ltr:text-normal rtl:text-right lg:text-lg`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-lg md:text-2xl rtl:text-right  pl-2 md:pl-0 font-header">
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
