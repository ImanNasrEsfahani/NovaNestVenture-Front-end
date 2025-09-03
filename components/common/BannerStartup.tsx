'use client'
import { getServerTranslation } from 'app/i18n/client';
import Image from 'next/image';

export default function BannerStartUp({
  image,
  title,
  logo,
  lang
}: {
  image: string;
  title: string;
  logo: string;
  lang: string;
}) {
  const { t } = getServerTranslation(lang, 'aboutUs');

  return (
    <div className="relative md:h-[520px]">
      {/* Background Image with Blur and Overlay */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="absolute inset-0  blur-[2px] md:h-[650px] lg:h-[512px]"
      ></div>

      <div
        className="relative flex h-[650px] items-center justify-center lg:h-[512px]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Adding overlay with transparency
      >
        {/* Content Overlay */}
        <div className="relative flex h-[650px] items-stretch justify-center lg:justify-start">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:m-auto lg:m-auto">
            {/* Text Content */}
            <p
              className={`font-condensed text-xl font-normal text-neutral-50 ltr:tracking-[5.60px]`}
            >
              {t('NovaNestVenture')}
            </p>
            <p className="font-gilda text-[32px] font-normal text-neutral-50 md:text-[50px] lg:text-[50px] xl:text-[50px]">
              {title}
            </p>
            <Image src={logo} alt={title} width={230} height={230} />
          </div>
        </div>
      </div>
    </div>
  );
}
