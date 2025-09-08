'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { getServerTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

interface SlideContent {
  label: string;
  href: string;
}

interface Slide {
  image: {
    src: string;
    alt: string;
  };
  content: SlideContent[];
}

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function Hero2() {
  const lang = useLang().lang;
  const { t } = await getServerTranslation(lang, 'mainPage');
  const slides = t('heroSlides', { returnObjects: true }) as Slide[];
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="size-full"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative size-full">
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                className="object-cover size-full"
              />
              <div className="absolute bottom-1/3 left-0 w-full grid md:grid-cols-2 gap-8 lg:gap-24 xl:gap-32">
                {slide.content.map((item, idx) => (
                  <div className="flex justify-center items-center w-full" key={idx}>
                    {item ? (
                      <Link 
                        href={`${base}${item.href}`}
                        className="px-8 py-4 md:px-8 md:py-4 bg-white/90 text-black no-underline rounded font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:scale-105 md:text-base text-sm"
                      >
                        {item.label}
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
