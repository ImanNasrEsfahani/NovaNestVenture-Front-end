'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const slides = [
  {
    image: { src: "/static/images/Home/Hero/image1.jpg", alt: "Slide 1" },
    content: [
      { label: "Investment", href: "/investment" },
      { label: "Acceleration", href: "/acceleration" },
    ],
  },
  {
    image: { src: "/static/images/Home/Hero/image2.jpg", alt: "Slide 2" },
    content: [
      { label: "Startup", href: "/startup" },
      { label: "PNP", href: "/pnp" },
    ],
  },
  {
    image: { src: "/static/images/Home/Hero/image3.jpg", alt: "Slide 3" },
    content: [
      { label: "Programs", href: "/programs" },
      { label: "Mentorship", href: "/mentorship" },
    ],
  },
];


export default function Hero2() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 300000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img 
                src={slide.image.src} 
                alt={slide.image.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-1/3 left-0 w-full flex justify-center items-center gap-8 lg:gap-24 xl:gap-32 md:flex-row flex-col">
                {slide.content.map((item, idx) => (
                  <div className="flex justify-center items-center" key={idx}>
                    {item ? (
                      <Link 
                        href={item.href} 
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
