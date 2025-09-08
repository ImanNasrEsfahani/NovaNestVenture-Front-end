import { MagazineData } from '@/types/global';

interface PageProps {
  params: { lang: string; slug: string };
}

// (Optional) implement if you still need static generation
// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}blog/list/?format=json`);
//   const list: { slug: string }[] = await res.json();
//   return list.map(item => ({ slug: item.slug, lang: 'en' })); // adjust languages
// }

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const host = process.env.NEXT_PUBLIC_DJANGO_HOST_URL;
  if (!host) {
    return <div className="text-red-600">Missing NEXT_PUBLIC_DJANGO_HOST_URL</div>;
  }

  const res = await fetch(
    `${host}blog/details/${encodeURIComponent(slug)}/?format=json`,
    { cache: 'no-store' } // or { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    return <div className="text-red-600">Failed to load article (status {res.status})</div>;
  }

  const cardData: MagazineData = await res.json();

  return (
    <div>
      <h1>{cardData?.title}</h1>
      <p>{cardData?.date}</p>
      <div
        className="text-justify font-barlow text-[#6B6B6B]"
        dangerouslySetInnerHTML={{ __html: cardData?.description ?? '' }}
      />
    </div>
  );
}
