'use client';
import Image from 'next/image';
import ButtonRefactor from '../common/ButtonRefactor';

export default function Hero({
  showLanda,
  backgroundImage,
  leftImage,
  showButton,
  lang
}: {
  showLanda: boolean;
  buttonBg?: string;
  backgroundImage: string;
  leftImage: string;
  showButton?: boolean;
  lang: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPositionX: '65%'
      }}
      className="relative h-[calc(100vh)] overflow-hidden md:h-screen"
    >
      {/* TODO: delete hardcode i18n */}
      <div className="flex flex-col items-center justify-center space-y-5 py-36 md:h-screen">
        <div
          className={` ${
            showLanda ? 'block' : 'hidden'
          } text-center font-barlow text-2xl font-normal text-white md:text-4xl ${
            lang === 'en'
              ? 'tracking-[7px] md:tracking-[12.6px]'
              : 'tracking-normal'
          }`}
        >
          {lang === 'en' ? 'NovaNest Venture' : 'نوا نست ونچر'}
        </div>
        <div
          className={`text-center font-gilda text-4xl md:text-6xl ${
            lang === 'en' && 'tracking-[6.4px]'
          } text-whiteGold`}
        >
          {lang === 'en' ? 'Investment Center' : 'مرکز سرمایه گذاری'}
        </div>
        <div className="w-64">
          {showButton ? (
            <ButtonRefactor
              text={lang === 'en' ? 'Register Now' : 'همین حالا ثبت نام کنید'}
              href={`/${lang}/investor-registration`}
              type="link"
            />
          ) : (
            <></>
          )}
        </div>

        <Image
          loading="lazy"
          className="absolute -right-16 bottom-0 mr-0  h-[420px]  w-[385px] sm:h-[302px] sm:w-[305px] md:right-0 md:mr-0   md:h-[372px] md:w-[265px] xl:h-[560px] xl:w-[420px] "
          src={`${leftImage}`}
          alt="NovaNest Venture"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
