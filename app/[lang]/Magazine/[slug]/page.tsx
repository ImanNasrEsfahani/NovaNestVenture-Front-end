'use client';
import { MagazineData } from '@/types/global';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const preData: MagazineData = {
  title: "",
  description: "",
  thumbnail: "",
  slug: "",
  date: "",
  file: "",
}

export default function Page() {
  const pathname = usePathname();
  const slug = pathname?.replace('/magazine/', '');

  const [cardData, setCardData] = useState<MagazineData>(preData);
  useEffect(() => {
    async function fetchTags() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}blog/details/${slug}/?format=json`
      );
      const data = await response.json();

      setCardData(data);
    }
    fetchTags();
  }, [slug]);

  return (
    <div>
      {/* <Image src={cardData?.thumbnail} alt='thumbnail'/> */}
      <h1>{cardData?.title}</h1>
      <p>{cardData?.date}</p>
      <div
        className="text-justify font-barlow text-[#6B6B6B]"
        dangerouslySetInnerHTML={{ __html: cardData?.description ?? "" }}
      />
    </div>
  );
}
