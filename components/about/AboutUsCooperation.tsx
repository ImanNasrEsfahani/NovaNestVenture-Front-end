
import Image from 'next/image';
import Link from 'next/link';

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function AboutUsCooperation() {
  return (
    <div className="h-full bg-neutral-800 py-10 text-center text-white">
      <div className="text-center">
        <p className="tracking-widest">NovaNest Venture</p>
        {/* <p className="text-5xl not-italic leading-normal ${headingFont}">
          Cooperation
        </p> */}
      </div>
      <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:px-28">
        <div className="col-span-1">
          <p className="font-barlow text-xl font-semibold tracking-wide">
            Investment Center
          </p>
          <p className="pt-2 font-light lg:max-xl:mb-1 xl:px-32 2xl:mb-2">
            The NovaNest Venture Investors Association is composed of a group of
            individuals active in the field of investment who collaborate with
            each other based on their investment priorities and invest in
            startups and new businesses.
            <br />
            If you are also interested in investing in new and innovative
            businesses and increasing your capital in the most modern way, we
            have provided an opportunity for you.
          </p>
          <div className="pt-10">
            <span className="mr-3">More</span>
            <Link href={`${base}investor-registration`}>
              <Image
                loading="lazy"
                width={40}
                height={40}
                className="inline"
                src="/static/images/about/right-arrow2.png"
                alt="arrow"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <p className="font-barlow text-xl font-semibold tracking-wide">
            Entrepreneur Center
          </p>
          <p className="pb-1 pt-2 font-light md:max-lg:pb-6 xl:px-32 xl:max-2xl:mb-5">
            The Entrepreneur Center is a community of active individuals in the
            field of business and entrepreneurship who form a dynamic and
            powerful technological ecosystem together.
            <br />
            If you also have an interest in building a business or possess
            special skills, join us by completing the Entrepreneur Membership
            form.
          </p>
          <div className="pt-10 md:pt-16">
            <span className="mr-3">More</span>
            <Link href={`${base}pnp`}>
              <Image
                loading="lazy"
                width={40}
                height={40}
                className="inline"
                src="/static/images/about/right-arrow2.png"
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
