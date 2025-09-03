'use client';

export default async function MagazineCardsContainer() {

  // const { t } = await getServerTranslation(lang, 'magazine');

  return (
    <div className="col-span-2 flex flex-col gap-16">
      {/* {cardsData?.map(({ title, description, thumbnail, slug, date} : { title: string, description: string | TrustedHTML, thumbnail: string, slug: string, date: string, file: string}, index: number) => (
        <PostCard
          slug={slug}
          key={index}
          image={thumbnail}
          date={date}
          title={title}
          description={description}
        />
      ))} */}
    </div>
  );
}
