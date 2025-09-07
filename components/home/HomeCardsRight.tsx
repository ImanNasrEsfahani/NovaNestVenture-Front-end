'use client'
import Image from 'next/image';
import { useLang } from 'stores/langStore';

export default function HomeCardsRight({
  images,
}: {
  titles: string;
  images: Array<{ src: string; alt: string }>;
  link: string;
}) {
  const lang = useLang().lang;

  console.log('lang => ', lang);

  return (
    <div className="flex flex-col self-start md:self-center">
      <div className="mt-9 flex flex-col items-start space-y-2 md:mt-0 md:items-center">
        <div className="flex flex-col gap-2 rtl:flex-row-reverse">
          {/* <span className="lrt:tracking-[6.5px] ${headingFont} text-4xl md:text-6xl">
            {titles}
          </span> */}
        </div>
      </div>
      <div className="flex space-x-7 pb-20 rtl:mt-11 rtl:space-x-reverse md:pb-0">
        {images.map((image, index) => (
          <div
            className={`relative hidden h-96 w-64 ${
              lang === 'en' ? 'ltr:md:mt-20' : 'last:mt-[5.25rem]'
            } md:mb-20 md:block md:first:mt-20`}
            key={index}
          >
            <Image
              loading="lazy"
              className="rounded-lg"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
