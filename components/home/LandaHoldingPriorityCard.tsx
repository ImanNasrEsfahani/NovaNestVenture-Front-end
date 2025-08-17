import Image from 'next/image';


export default function LandaHoldingPriorityCard({
  title,
  image
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="relative flex h-24 w-[47%] justify-center overflow-hidden border border-primary md:h-40 md:w-[23%] rounded-lg">
      {/* Background Image */}
      <Image
        loading="lazy"
        className="absolute bottom-2 -right-2 h-12 w-12 opacity-10 md:bottom-1 md:right-1 md:h-[145px] md:w-[145px]"
        src={image}
        alt=""
        width={500}
        height={500}
      />

      {/* Title Container */}
      <div className="inline-flex items-center justify-center gap-2.5">
        <div className="flex w-10 items-center justify-center text-center font-gilda text-base font-normal text-black md:w-52 md:text-2xl">
          {title}
        </div>
      </div>

      {/* Small Image Overlay */}
      <Image
        loading="lazy"
        className="absolute left-2 top-2 h-8 w-8 md:h-[50px] md:w-[50px]"
        src={image}
        alt="NovaNest Venture Priority"
        width={500}
        height={500}
      />
    </div>
  );
}
