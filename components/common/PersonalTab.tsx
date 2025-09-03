import Link from 'next/link';
import Image from 'next/image';

export default function PersonalTab({
  image,
  name,
  position,
  linkedIn
}: {
  image: string;
  name: string;
  position: string;
  linkedIn: string;
}) {
  return (
    <div className="relative flex h-[320px] w-[300px] flex-col justify-between rounded-sm">
      {/* Background Image */}
      <Image
        className="object-cover"
        src={image}
        alt="NovaNest Venture People"
        layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        loading="lazy"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.32)] via-[rgba(0,0,0,0)] to-transparent"></div>

      {/* LinkedIn Link */}
      <div className="z-10 flex flex-col space-y-2 self-start p-4">
        <Link
          // TODO: why use / instead of #?
          href={linkedIn || '/'}
        >
          <span className="text-2xl text-white px-2 pb-1 font-bold rounded-full bg-[#222222e3]">
            in
          </span>
        </Link>
      </div>

      {/* Text Content */}
      <div className="z-10 flex flex-col items-center px-3 pb-4 text-white">
        <span className=" font-barlow text-lg font-normal">{name}</span>
        <div className="flex w-[65%] items-center justify-center border-t-2 font-light">
          <span className="border-t-3 font-barlow font-light">{position}</span>
        </div>
      </div>
    </div>
  );
}
