
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsProfileCard({
  image,
  title,
  description,
  links
}: {
  image: string;
  title: string;
  description: string;
  links: Record<string, string>;
}) {
  return (
    <div className="container mx-auto mb-6 h-fit w-fit border bg-whiteGold shadow-lg">
      <Link href="#">
        <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px]">
          <Image
            loading="lazy"
            alt={`${title} Image`}
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={image}
          />
        </div>
      </Link>

      <div className="mt-6 flex items-center justify-center space-x-3 p-2">
        {/* Add descriptive alt text for icons */}
        <Link href={links.whatsapp}>
          <Image
            loading="lazy"
            alt="Icon 1"
            src="/static/images/03bc78eaab3dcbbdddec7554e9d34351.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.linkedin}>
          <Image
            loading="lazy"
            alt="Icon 2"
            src="/static/images/6fd49ad10f9b1a9ab4224d4d900d8355.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.email}>
          <Image
            loading="lazy"
            alt="Icon 3"
            src="/static/images/aeb307f84efb8c124b331799a6f734e6.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.website}>
          <Image
            loading="lazy"
            alt="Icon 4"
            src="/static/images/c897906edf05703723098f4a66032d9b.png"
            width={25}
            height={25}
          />
        </Link>
      </div>

      <div>
        <div className="text-center font-gilda">
          <p className="font-Barlow mt-2 text-xl font-medium text-black">
            {title}
          </p>
          <p className="font-Barlow mb-[16px] mt-2 text-xs font-normal text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
