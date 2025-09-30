import Image from 'next/image';

export default function PriorityCard({
  title,
  image
}: {
  title: string;
  image: string;
}) {

  return (
    <div className="w-full h-36 relative flex items-center justify-center overflow-hidden border border-primary rounded-lg">
      <Image
        loading="lazy"
        src={image}
        alt=""
        width={500}
        height={500}
        className="absolute bottom-2 -right-2 max-w-28 max-h-28 opacity-10 md:bottom-0"
      />

      <div className="z-20 text-base text-center">{title}</div>
      <Image
        loading="lazy"
        src={image}
        alt="NovaNest Venture Priority"
        width={500}
        height={500}
        className="absolute left-2 top-2 max-w-16 max-h-16 lg:max-w-12 lg:max-h-12 z-10"
      />
    </div>
  );
}
