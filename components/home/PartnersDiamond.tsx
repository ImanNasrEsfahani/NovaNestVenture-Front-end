import Image from 'next/image';
import Link from 'next/link';


export default function PartnersDiamond({
  backgroundImage,
  name,
}: {
  backgroundImage: number;
  name: string;
}) {
  return (
    <Link
      className="group relative flex size-[120px] shrink-0 rotate-45 items-center justify-center overflow-hidden rounded-lg bg-whiteGold"
      href={'/'}
    >
      <div className="size-[100px]">
        <div className="-rotate-45">
          <Image
            className="object-contain"
            src={`/static/images/home/contact/${backgroundImage}.png`}
            alt="r"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="-rotate-45 text-center uppercase text-white">
          {name}
        </span>
      </div>
    </Link>
  );
}
