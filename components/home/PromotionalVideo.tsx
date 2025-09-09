import Play from '@/components/icons/PlayButton/Play';
export default function PromotionalVideo() {

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute size-1 bg-primary opacity-20 rounded-full" />
        <div
          style={{
            backgroundImage:
              "url('/static/images/home/promotional-video/blurred-co-working.webp')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.8)',
          }}
          className="relative h-[300px] md:h-[400px]"
        >
          <div className="absolute inset-0 left-1/2 top-1/2 flex h-[300px] w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-black bg-opacity-40 md:h-[400px]">
            <div className="w-155 h-23 font-condensed text-xs font-normal leading-[2.5px] tracking-[2.5px] text-white md:text-base">
              NovaNest Venture
            </div>
            <div className="w-373 my-4 h-12 font-header text-4xl font-normal tracking-[1.6px] text-white">
              Promotional Video
            </div>
            <div className="h-w-24 font-futura b4 relative w-24 rounded-full border-2 border-primary p-6 text-center font-light text-white opacity-100">
              <div className="circle absolute left-1/2 top-1/2 -z-10 size-1 rounded-full  bg-white"></div>
              <Play />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
