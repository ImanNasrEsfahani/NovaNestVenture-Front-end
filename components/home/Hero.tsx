import '../../app/[lang]/globals.css';

export default function Hero({
  titles,
  backgroundImage,
}: {
  titles: string[];
  subTitle?: string;
  backgroundImage: string;
  lang: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url('/static/images/home/hero/${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-bgset={`/static/images/home/hero/${backgroundImage} [(max-width: 640px)] | /static/images/home/hero/${backgroundImage}`}
      className="relative h-[calc(100vh)] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-70"
        // This div will serve as the overlay
      ></div>

      <div className="relative z-10 mt-64 flex w-fit flex-col justify-center gap-8 md:mx-24 md:justify-start md:ltr:ml-10 ">
        <ul className="mt-40 mx-12 flex list-disc flex-col gap-4 font-gilda text-xl tracking-wider text-[#FAFAFA] rtl:tracking-normal md:pt-24 md:text-4xl md:tracking-[3.6px]">
          {titles.map((title: string, index: number) => (
            <li
              key={index}
              className={`get-shadow marker:text-white`}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
