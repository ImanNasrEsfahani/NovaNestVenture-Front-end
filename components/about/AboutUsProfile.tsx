import AboutusPersonalTabs from './AboutusPersonalTabs';
import { getServerTranslation } from 'app/i18n';
// import Certificate from '@/components/investment/Certificate';
// import Link from '@/components/icons/Link';
// import ButtonRefactor from '@/components/common/ButtonRefactor';
//import FeaturesCardsContainer from '../investment/FeaturesCardsContainer';

export default function AboutUsProfile({lang}: {lang: string}) {
  const { t } = getServerTranslation(lang, 'aboutUs');

  return (
    <div className="mb-32 flex w-full flex-col justify-center">
      <div className=" flex flex-col justify-center py-10">
        {/* TITLE */}
        {/* <div className="flex flex-col justify-items-center text-black ">
          <h2 className="tracking-0 font-condensed text-xl font-normal uppercase leading-normal md:text-2xl ltr:tracking-widest">
            {t('professionals')}
          </h2>
          <h1 className="rtl:tracking-0 ${headingFont} text-3xl  font-normal uppercase leading-normal md:text-4xl my-2">
            {t('boardOfDirectors')}
          </h1>
        </div> */}

        <div className="mb-8 flex flex-col justify-between gap-24 md:flex-row md:gap-10">
          {/* TODO: complete this section */}
          {t('boardMemebers', { returnObjects: true }).map(
            (
              {
                name,
                image,
                links,
                position
              }: {
                name: string;
                image: string;
                links: {
                  linkedin: string;
                  email: string;
                  website: string;
                  instagram: string;
                };
                position: string;
              },
              index: number
            ) => (
              <AboutusPersonalTabs
                key={index}
                image={image}
                name={name}
                position={position}
                linkedIn={links.linkedin}
                email={links.email}
                website={links.website}
                instagram={links.instagram}
              />
            )
          )}
        </div>

      </div>
      {/* <div className="grid grid-cols-1 mt-10 items-center gap-6 px-12  py-10 md:grid-cols-2 md:gap-24 md:px-32  md:py-6 md:pt-20 bg-[#FAFAFA]">
        <div className="flex flex-col gap-6">
          <span className="ltr:${headingFont} rtl:font-EBGaramond text-bold text-2xl w-[300px] md:w-[500px] text-primary md:text-4xl flex justify-center">
            {t('certificate')}
          </span>
          <div className="flex size-full ltr:pr-8 md:pl-10 md:mt-4 md:ml-0 md:mr-0 rtl:pl-8">
            <Certificate />
            <Link size={32} addedClass="-ml-10 mb-3 z-10" />
          </div>
        </div>
        <div className="flex flex-col pt-12 px-2 items-center justify-center space-y-5 rtl:space-y-reverse">
          <p className="text-justify font-barlow pb-12 ltr:leading-8 rtl:text-lg rtl:leading-10">
            {t('focusText')}
          </p>
          <Button
            goto="/"
            size="not"
            text={lang === "en" ? "Federal Canada Corporation Information" : "اطلاعات شرکت فدرال کانادا"}
            bgColor="Primary"
            lang={lang}
          />
          <ButtonRefactor text={t('buttonTitle')} />
        </div>
      </div> */}
    </div>
  );
}

