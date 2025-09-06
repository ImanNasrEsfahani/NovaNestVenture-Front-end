import Image from 'next/image';
import Link from 'next/link';
import StartupsArrowLeft from '../icons/home/StartupsArrowLeft';

export default function LatestStartupsCard({
  image,
  title,
  description,
  link,
}: {
  // TODO: don't pass lang, use zustend
  image: string;
  title: string;
  description: string;
  link: string;
  lang: string;
}) {
  return (
    <Link href={link} target={link} >
      <div className="group relative size-full col-span-1 border transition-all border-black hover:shadow-lg rounded-lg">
        {/* Image Container */}
        <div className="w-full " />

          {/* Image */}
          <Image
            className="w-1/2 h-44 mx-auto object-contain transition-all group-hover:scale-110 my-6 "
            loading="lazy"
            alt={image}
            src={image}
            width={500}
            height={500}
          />

        {/* Title */}

        <div className={`p-3 font-gilda text-2xl font-normal text-neutral-800 `}>
        {/* <div className={`absolute ltr:font-gilda rtl:font-EBGaramond text-2xl font-normal text-neutral-800 ${lang === "en" ? "left-4 top-[130px] md:top-[250px]" : "right-5 top-[125px] md:top-[255px]"}`}> */}
          {title}
        </div>

        {/* Decorative Lines */}
        <div className={`border border-neutral-800`}></div>

        {/* Description */}
        <div className={`font-barlow leading-5 font-normal p-3 mb-12 text-neutral-800 `}>
          {description}
        </div>

        {/* Link and Icon */}
        <div className="absolute inline-flex ltr:right-2 bottom-2 size-9 mx-auto gap-2.5 bg-neutral-800 rounded-lg rtl:left-2 rtl:rotate-180">
          <StartupsArrowLeft />
        </div>
      </div>
    </Link>
  );
}
