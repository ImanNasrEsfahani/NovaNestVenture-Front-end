'use client';
import Image from 'next/image';
import ButtonRefactor from '../common/ButtonRefactor';

export default function HomeCardsSection({
  smallTitle,
  text,
  images,
  reverse,
  link,
  titles,
  buttonText
}: {
  smallTitle: string;
  text: string;
  images: Array<{ src: string; alt: string }>;
  reverse: boolean;
  link: string;
  titles: string;
  buttonText: string;
}) {
  return (
    <div
      className={`flex flex-col-reverse ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-x-10 items-center justify-between last:border-none`}
    >
      <div className="flex flex-col h-full items-start justify-between gap-12 rtl:gap-16 md:w-1/2">
        <div className="flex flex-col items-start gap-4">
          <span className="font-gilda text-1xl md:text-1xl">{smallTitle}</span>
          <span className="lrt:tracking-[6.5px] font-gilda font-bold text-4xl md:text-5xl">
            {titles}
          </span>
        </div>
        <p className="md:text-md text-justify font-EBGaramond text-base leading-[30px] first:mb-0 md:w-full ">
          {text}
        </p>
        <div className="w-[45%] md:w-[35%]">
          <ButtonRefactor text={buttonText} type="link" href={link} />
        </div>
      </div>
      <div
        className={`${reverse ? 'md:justify-start' : 'md:justify-end'} space-x-4 rtl:space-x-reverse flex w-full h-full md:w-1/2 md:pb-0`}
      >
        {images.map((image, index) => (
          <div
            className={`relative h-72 md:h-[26.5rem] w-full max-w-xs`}
            key={index}
          >
            <Image
              loading="lazy"
              className="rounded-lg object-cover"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 110vw, (max-width: 1200px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
