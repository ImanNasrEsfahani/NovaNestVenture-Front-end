import { Metadata } from 'next';
import Image from 'next/image';
import { useTranslation } from 'app/i18n';
import AccelerationCard from '@/components/acceleration/AccelerationCard';
import Banner from '@/components/common/Banner';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Acceleration',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};
export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'acceleration');

  return (
    <div>
      <div className="hidden md:inline">
        <Banner
          image="/static/images/acceleration/accleration-hero.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className="inline md:hidden">
        <Banner
          image="/static/images/acceleration/accleration-heromob.jpg"
          title={t('banner')}
          lang={lang}
        />
      </div>

      {/* TODO: Is it better to use i18n in components instead of pass it as props? */}
      <div className="max-w-[1600px] mx-auto mt-28 flex justify-between gap-8 px-10 font-gilda md:px-28 md:py-16">
        <div className=" w-full  md:w-[47%]">
          <span className={` text-3xl font-bold leading-tight md:text-5xl`}>
            {t('LandaAccelerator', { returnObjects: true })[0].title}
          </span>
          <span className={`block text-xl leading-tight md:text-3xl`}>
            {t('LandaAccelerator', { returnObjects: true })[0].subTitle}
          </span>
          <p
            className={`pt-8 text-justify font-barlow leading-8 ltr:text-lg rtl:text-base`}
          >
            {t('LandaAccelerator', { returnObjects: true })[0].text}
          </p>
        </div>
        <div className="relative hidden h-[320px] w-[45%] md:inline">
          <Image
            className="rounded-lg object-cover"
            src="/static/images/acceleration/acc-2.jpg"
            alt="lamp"
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        {/* TODO: make better names like ForughAccelerator */}
        <AccelerationCard
          addedClass="py-28"
          title={t('FORUGHACCELERATOR', { returnObjects: true })[0].title}
          slogan={t('FORUGHACCELERATOR', { returnObjects: true })[0].subTitle}
          imageClass={`rtl:text-right ltr:text-left top-11 pl-12 w-[92px] h-[44px] flex flex-row`}
          textUp={t('FORUGHACCELERATOR', { returnObjects: true })[0].textUp}
          textDown={t('FORUGHACCELERATOR', { returnObjects: true })[0].textDown}
          secondImageSrc="/static/images/acceleration/forogh.png"
          itemsList={t('FORUGHACCELERATOR', { returnObjects: true })[0].items}
        />
        <AccelerationCard
          addedClass=" pb-28"
          title={t('FARAZAMANACCELERATOR', { returnObjects: true })[0].title}
          slogan={
            t('FARAZAMANACCELERATOR', { returnObjects: true })[0].subTitle
          }
          imageClass={`rtl:right-1 ltr:left-1 top-8 `}
          textUp={t('FARAZAMANACCELERATOR', { returnObjects: true })[0].textUp}
          textDown={
            t('FARAZAMANACCELERATOR', { returnObjects: true })[0].textDown
          }
          secondImageSrc="/static/images/acceleration/40972929a38710f62895f472ac8a9d67.png"
        />
      </div>

      {/* <div className={`flex flex-col ${t('lng') === 'fa' && 'items-center'}`}>
          <span className="mt-12 font-gilda text-3xl text-primary">
            {t('LandaAcceleratorServices', { returnObjects: true })[0].title}
          </span>
          <AccelerationServices
            services={
              t('LandaAcceleratorServices', { returnObjects: true })[0].items
            }
          />
        </div>
        <div className="my-11 flex gap-2 text-center font-barlow text-xl leading-9 text-[#55422A] md:ml-[11.5rem] md:mr-[8.5rem] md:text-left ltr:tracking-[2px] rtl:md:text-right">
          <Circle />
          {t('text')}
        </div>
        <Button
          goto="/StartupsForm"
          size="visit"
          text={t('Register')}
          bgColor="Primary"
          lang={lang}
        /> */}
      {/* <ButtonRefactor text={t('Register')} href="/StartupsForm" /> */}
    </div>
  );
}
