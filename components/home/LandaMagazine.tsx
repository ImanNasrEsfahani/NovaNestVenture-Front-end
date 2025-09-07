
import LandaMagazineCard from '../magazine/LandaMagazineCard';
// TODO: import from i18n instead of statics
import { cardData2 } from '../../app/[lang]/statics';
import ButtonRefactor from '../common/ButtonRefactor';

export default function LandaMagazine({ params }: { params: { lang: string } }) {

  const headingFont = params.lang === 'fa' ? 'font-markazi' : 'font-gilda';

  return (
    // TODO: create commponent for show repeated parts. because codes are almost same and just written few times
    <div className="hidden md:block">
      {/* hide component on mobile */}
      <div className="flex justify-center bg-neutral-800 py-5">
        <div className="flex flex-col">
          <div className={`my-10 ${headingFont} text-3xl font-normal text-white md:ml-16 md:text-[64px]`}>
            NovaNest Venture MAGAZINE
          </div>
          <div className="flex flex-row items-center justify-center">
            <button className="mr-3 flex size-12 items-center justify-center rounded-full border border-white">
              {/* TODO:  create component for svg*/}
              <svg
                className="size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="grid h-[570px] grid-cols-3 gap-4 overflow-auto">
              {cardData2.map((data, index) => (
                <LandaMagazineCard
                  key={index}
                  title={data.title}
                  image={data.image}
                  type={data.type}
                  date={data.date}
                />
              ))}
            </div>
            <button className="ml-3 flex size-12 items-center justify-center rounded-full border border-white">
              {/* Right Arrow */}
              <svg
                className="size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <ButtonRefactor text="Read More" />
        </div>
      </div>
    </div>
  );
}
