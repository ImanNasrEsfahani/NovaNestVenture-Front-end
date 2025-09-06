import Image from 'next/image';

import Link from 'next/link';
import ButtonRefactor from '../common/ButtonRefactor';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function ContactUs() {
  // TODO: use daisyUI for styling
  return (
    <div className="flex flex-col items-center justify-between bg-neutral-50 px-12 text-justify md:h-[644px] md:flex-row md:px-36">
      <div className="flex flex-col items-center justify-center px-1 py-10 md:h-[476px] md:w-[515px]">
        <p className=":text-justify text-black md:text-xl">
          At NovaNest Venture, we welcome strategic affiliations with international
          firms and qualified influencers alike. As an approved affiliate, you
          will receive co-branded support and future representations that wield
          substantial influence within the business landscape. To become an
          affiliate, please complete our free questionnaire for our confidential
          review.
        </p>
        <Link href={`${base}/partner-membership`}>
          <ButtonRefactor text="Join Us" />
        </Link>
      </div>
      <div className="ma:my-0 relative  ml-5 mr-2 mt-5 flex gap-20 md:mb-0 md:h-full">
        <div className="md:h-58 absolute top-0 z-10 h-16  w-full" />
        <div className="via-transparent-white absolute bottom-0 z-10 h-16  w-full md:h-60" />
        <div className="flex flex-col justify-around ">
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/1.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/22.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/3.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/4.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="spin-image-top">
            <Image
              className=""
              src="/static/images/Home/universities/5.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className=""
              src="/static/images/Home/universities/6.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className=""
              src="/static/images/Home/universities/77.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
          <div className="spin-image-top">
            <Image
              className=""
              src="/static/images/Home/universities/88.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start md:mt-10">
          <div className="spin-image">
            <Image
              className=""
              src="/static/images/Home/universities/9.png"
              alt="t"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
