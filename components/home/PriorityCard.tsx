import Image from 'next/image';

export default function PriorityCard({
  title,
  image
}: {
  title: string;
  image: string;
}) {

  return (
    <div className="relative flex h-24 w-[40%] justify-center overflow-hidden border border-primary md:h-40 md:w-1/5 rounded-lg">
      {/* Background Image */}
      <Image
        loading="lazy"
        className="absolute bottom-2 -right-2 size-12 opacity-10 md:bottom-1 md:right-1 md:size-[145px]"
        src={image}
        alt=""
        width={500}
        height={500}
      />

      {/* Title Container */}
      <div className="inline-flex items-center justify-center gap-2.5">
        <div className="flex items-center justify-center text-center text-base">
          {title}
        </div>
      </div>

      {/* Small Image Overlay */}
      <Image
        loading="lazy"
        className="absolute left-2 top-2 size-8 md:size-[50px]"
        src={image}
        alt="NovaNest Venture Priority"
        width={500}
        height={500}
      />
    </div>
  );
}
