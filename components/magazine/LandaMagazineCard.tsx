import Image from 'next/image';
import Link from 'next/link';


export default function LandaMagazineCard({
  title,
  image,
  type,
  date,
}: {
  title: string;
  image: string;
  type: string;
  date: string;
}) {
  return (
    <Link href={'/'}>
      <div className="group relative h-[476px] w-[391px]">
        {/* Image */}
        <Image
          loading="lazy"
          src={image}
          alt={image}
          width={500}
          height={500}
        />

        {/* Date Container */}
        <div className="absolute left-8 top-8 inline-flex h-[84px] w-[46px] flex-col items-center justify-start gap-[15px] border border-white px-1 py-2.5">
          <div className="h-[17px] w-[31px] font-gilda text-[15px] font-normal text-white">
            {date.substr(0, 3).toLowerCase()}
          </div>
          <div className="h-8 w-[38px] font-gilda text-[32px] font-normal text-white">
            {date.substr(4)}
          </div>
        </div>

        {/* Details Container */}
        <div className="absolute left-10 top-[397px] inline-flex h-36 w-[306px] flex-col items-start justify-start gap-[7px] bg-stone-100 px-11 py-[13px] group-hover:top-[280px] group-hover:transition-all">
          {/* Type */}
          <div className="font-condensed text-base font-normal tracking-[5.60px] text-stone-500">
            {type}
          </div>

          {/* Title */}
          <div className="w-[218px] font-gilda text-[32px] font-normal text-black">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}
