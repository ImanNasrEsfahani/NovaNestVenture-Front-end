import Banner from '@/components/common/Banner';
import SearchInput from '@/components/magazine/SearchInput';
import CategoriesContainer from '@/components/magazine/CategoriesContainer';
import TagsContainer from '@/components/magazine/TagsContainer';
import NovaNest from '@/components/icons/magazine/NovaNest';
import MagazineCardsContainer from '@/components/magazine/MagazineCardsContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Magazine',
  description:
    'Welcome to NovaNest Venture, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.',
};

export default async function MagazinePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  
  return (
    <div className="relative">
      <Banner
        image="/static/images/home/Magazine/magazine-hero.webp"
        title={`${lang == 'en' ? "MAGAZINE" : "مجله" }`}
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto my-32 grid grid-cols-3 gap-20">
        <MagazineCardsContainer/>
        <div className="col-span-1 flex flex-col gap-12">
          <SearchInput />
          <CategoriesContainer />
          <TagsContainer />
        </div>
      </div>
      <NovaNest />
    </div>
  );
}