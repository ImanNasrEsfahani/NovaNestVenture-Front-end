import Image from 'next/image';
import { ServicesInterface } from '@/types/global';

export default function AccelerationServices({
  services
}: {
  services: ServicesInterface[];
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 border-b-2 pb-14 md:grid-cols-3 md:gap-11">
      {services.map((service, index) => (
        <div
          className="relative flex h-[115px] w-full items-center justify-center overflow-hidden rounded-sm bg-[#F7F3EE] font-barlow text-xl text-[#2B2115] md:w-[343px]"
          key={index}
        >
          <span>{service.title}</span>
          <Image
            className="absolute -bottom-8 -left-3 opacity-25"
            src={`/static/images/acceleration/${service.image}`}
            alt="forough"
            width={109}
            height={109}
          />
        </div>
      ))}
    </div>
  );
}
