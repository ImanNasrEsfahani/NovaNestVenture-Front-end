
import Image from 'next/image';

export default function MagazineStartUpsCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-16">
      {/* Image */}
      <div className="flex justify-center">
        <Image
          loading="lazy"
          className=""
          src={image}
          alt={title}
          width={320}
          height={420}
        />
      </div>

      {/* Date */}
      <div className="flex flex-col justify-start px-20">
        <h2 className="mt-4 text-2xl font-bold text-slate-950">
          12 DECEMBER 2022
        </h2>

        {/* Title */}
        <h2 className="mb-6 mt-1 text-2xl font-bold text-yellow-600">
          {title}
        </h2>
      </div>

      {/* Description */}
      <div className="flex justify-start px-20">
        <p className="text-justify font-bold text-slate-950">{description}</p>
      </div>
    </div>
  );
}
