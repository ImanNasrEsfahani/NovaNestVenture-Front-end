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
            <p className="text-white font-medium font-header text-[16px]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
              {lang == 'en' ? 'NovaNest Venture' : 'نووا نست ونچر'}
            </p>
            <p className="text-white font-header font-medium text-3xl" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
