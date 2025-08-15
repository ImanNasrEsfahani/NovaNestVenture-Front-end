'use client';

export default async function Banner({
  image,
  title,
  lang
}: {
  image: string;
  title: string;
  lang: string;
}) {
  return (
    <div className="relative h-screen md:h-[550px]">
      {/* Background Image with Blur and Overlay */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="absolute inset-0 h-full flex items-center px-4 md:px-20"
      >
        <div className="h-auto w-full">
          <div className="h-auto w-full flex flex-col items-start gap-4">
            <p className="text-white font-medium font-gilda text-[16px]">
              {lang == 'en' ? 'Landa Holding' : 'هلدینگ لاندا'}
            </p>
            <p className="text-white font-gilda font-medium text-3xl md:text-[64px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
