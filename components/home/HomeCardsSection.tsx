'use client';
import Image from 'next/image';
import ButtonRefactor from '@/components/common/ButtonRefactor';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

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
      className={`flex flex-col-reverse ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-x-10 items-center justify-between`}
    >
      <div className="flex flex-col h-full items-start justify-between gap-16 md:w-1/2">
        <div className="flex flex-col items-start gap-4">
          <span className="font-header text-lg">{smallTitle}</span>
          <span className="font-header text-5xl font-bold">{titles}</span>
        </div>
        <p className="text-justify text-base first:mb-0 md:w-full ">
          {text}
        </p>
        <div className="max-w-container-xxs">
          <ButtonRefactor text={buttonText} type="link" href={`${base}${link}`} />
        </div>
      </div>
      <div
        className={`${reverse ? 'md:justify-start' : 'md:justify-end'} space-x-4 rtl:space-x-reverse flex size-full md:w-1/2 md:pb-0`}
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
