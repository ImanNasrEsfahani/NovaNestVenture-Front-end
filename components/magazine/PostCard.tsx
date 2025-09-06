import Image from 'next/image';

import Link from 'next/link';
import ButtonRefactor from '../common/ButtonRefactor';
import Button from '../common/Button';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function PostCard({
  slug,
  image,
  date,
  title,
  description,
}: {
  slug: string;
  image: string;
  date: string;
  title: string;
  description: string | TrustedHTML;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        className="rounded-sm object-cover"
        src={image}
        alt="NovaNest Venture magazine post"
        width={850}
        height={384}
      />

      <span className="font-condensed tracking-[2.4px] text-primary">
        {date}
      </span>
      <Link
        href={`${base}/magazine/${slug}`}
        className="font-gilda text-xl tracking-[2.8px] hover:text-primary"
      >
        {title}
      </Link>
      <div className='text-justify font-barlow text-[#6B6B6B]' dangerouslySetInnerHTML={{ __html: description }} />
      <Button
        goto={`/magazine/${slug}`}
        text="Read More"
        size="notVisit"
        bgColor="Primary"
      />
      <ButtonRefactor text="Read More" />
    </div>
  );
}
