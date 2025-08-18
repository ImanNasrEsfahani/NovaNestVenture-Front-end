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
        backgroundImage: `url('/static/images/Home/Hero/${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-bgset={`/static/images/Home/Hero/${backgroundImage} [(max-width: 640px)] | /static/images/Home/Hero/${backgroundImage}`}
      className="relative h-[calc(100vh)] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-70"
        // This div will serve as the overlay
      ></div>

      <div className="relative z-10 mt-64 flex w-fit flex-col justify-center gap-8 md:mx-24 md:justify-start md:ltr:ml-10 ">
        {/* <div
          className={`${
            showLanda ? 'block w-fit' : 'hidden'
          } get-shadow px-2 text-center font-gilda text-3xl font-bold text-white drop-shadow-2xl md:ml-6 md:px-0 md:text-center md:text-[90px]`}
          // } text-center md:text-center px-2 md:px-0 ltr: rtl:font-EBGaramond font-gilda text-3xl font-bold text-white md:text-6xl md:ml-6 md:tracking-[12px] rtl:tracking-normal`}
        >
          {title}
        </div> */}
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
      {/* <div className="absolute top-2/3 mt-20 flex items-center justify-center bg-[#DDCEBA] p-4  ltr:left-0 ltr:rounded-br-2xl rtl:right-0 rtl:rounded-bl-2xl md:top-3/4 md:w-[700px] md:rtl:right-0">
        <div
          className={`text-bold text-center font-barlow text-xl font-semibold leading-10 text-white text-opacity-95 ltr:tracking-[4px] md:font-gilda md:text-5xl`}

          // className={`text-center md:ltr:font-gilda md:rtl:font-EBGaramond font-barlow  font-semibold text-bold leading-10 text-white text-opacity-95 md:text-5xl text-xl ltr:tracking-[4px]`}
        >
          {subTitle ? subTitle : ''}
        </div>
      </div> */}
      {/* <Image
        loading="lazy"
        className="absolute bottom-0 ml-24 mr-12 h-[365px] w-[300px] ltr:-right-32 rtl:-left-32 sm:h-[365px] sm:w-[500px] md:mx-0 md:h-[365px] md:w-[500px] ltr:md:right-0 md:rtl:left-0 md:rtl:right-auto xl:h-[560px] xl:w-[420px]"
        src="/static/images/Vector 58 (1).png"
        alt="NovaNestVenture"
        width={500}
        height={500}
      /> */}
    </div>
  );
}
