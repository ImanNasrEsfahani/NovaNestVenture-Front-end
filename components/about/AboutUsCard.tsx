import Image from 'next/image';
import Link from 'next/link';

import { AboutUsCardProps } from '../../types/global';
import ButtonRefactor from '../common/ButtonRefactor';
import { useLang } from 'stores/langStore';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

const AboutUsCard = ({
  title,
  text,
  image,
  reverse,
  description,
  link
}: AboutUsCardProps) => {

  const lang = useLang().lang

  return (
    <>
      {reverse && (
        <div className="flex flex-col-reverse justify-items-center leading-6 md:grid-cols-2 lg:grid">
          <div className="px-[30px] pb-5 leading-6 text-black md:ml-8 md:px-0">
            <p className="mt-3 text-center font-header text-3xl md:pr-8">
              {title}
            </p>
            <p className="text-normal  justify-left mt-5 font-barlow leading-6 ">
              {text}
            </p>
            <Link href={`${base}${link}`}>
              {/* <Button 
                text='Visit Now' 
                size={''} 
                type='button'
                bgColor="Primary"
                goto={''}
              /> */}
              <ButtonRefactor text="Visit Now" />
              {/* <button className=" justify-items-center mx-auto bg-primary text-white md:mt-24 mt-8  flex px-10 py-2 font-barlow">
                Visit Now
              </button> */}
            </Link>{' '}
          </div>
          <div className="col-span-1 md:pl-0">
            <div
              className="my-2 h-[160px] w-screen md:mt-2 md:h-[320px] md:w-[672px] lg:w-[610px] "
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <Image
                loading="lazy"
                alt={`Image for ${title}`}
                src={image}
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      )}
      {!reverse && (
        <div className="flex flex-col md:grid md:grid-cols-1 md:py-12">
          <div className="col-span-1">
            <div
              className="mb-2 h-[160px] md:mt-2  md:h-[357px] md:w-[670px] "
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <Image
                loading="lazy"
                alt={`Image for ${title}`}
                src={image}
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-span-1 mt-1 px-[30px] font-barlow leading-6	text-black">
            <p className="mt-3 text-center font-header text-3xl font-normal text-black">
              {title}
            </p>
            <p className="text-normal mt-5">{text}</p>
            <Link href={`${base}${link}`}>
              <button className=" mx-auto mt-8 flex justify-items-center bg-primary px-10  py-2 font-barlow text-white md:mt-24">
                Visit Now
              </button>
            </Link>
          </div>
          <p className="Display ml-[110px] text-sm	font-normal	leading-normal  text-black">
            {description}
          </p>
        </div>
      )}
    </>
  );
};

export default AboutUsCard;
