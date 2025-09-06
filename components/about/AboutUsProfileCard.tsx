
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
    <div className="container mx-auto mb-6 size-fit w-fit border bg-whiteGold shadow-lg">
      <Link href="#">
        <div className="relative size-[350px] md:size-[400px]">
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
            alt="instagram"
            src="/static/images/instagram-logo.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.linkedin}>
          <Image
            loading="lazy"
            alt="twitter"
            src="/static/images/twitter-logo.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.email}>
          <Image
            loading="lazy"
            alt="telegram"
            src="/static/images/telegram-logo.png"
            width={25}
            height={25}
          />
        </Link>
        <Link href={links.website}>
          <Image
            loading="lazy"
            alt="facebook"
            src="/static/images/face-book-logo.png"
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
