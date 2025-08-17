
import Image from 'next/image';

export default function MagazineModernPostBottomCard({
  image,
  description,
}: {
  image: string;
  description: string;
}) {
  return (
    <div className="mb-1 px-4">
      <div className="flex justify-center">
        <Image
          loading="lazy"
          src={image}
          alt="NovaNest Venture"
          width={330}
          height={430}
        />
      </div>
      <div className="my-3 flex justify-start">
        <p className="text-bold px-6 text-justify text-slate-950">
          {description}
        </p>
      </div>
    </div>
  );
}
