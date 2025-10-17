import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type ButtonProps = {
  text: string;
  type?: 'simple-link' |'button' | 'reset' | 'submit' | 'link';
  href?: string;
  disabled?: boolean;
  bgColor?: 'primary' | 'secondary' | 'white' | 'black' | 'transparent';
};

export default function ButtonRefactor({
  text,
  type = 'button',
  href,
  disabled,
  bgColor
}: ButtonProps) {
  switch (type) {
    // If the type is 'Link'
    case 'simple-link':
      return (
        href && (
          <a href={href} className={`bg-${
                bgColor ? bgColor : 'black'
              } delay-50 flex h-[50px] w-full flex-wrap place-content-center rounded-xl text-white transition duration-150 ease-in-out hover:bg-primary py-4`}>
                {text} <ChevronRightIcon className="ml-4 mt-1 size-5 rtl:rotate-180" />
          </a>
        )
      );

    // If the type is 'Link'
    case 'link':
      return (
        href && (
          <Link href={href} className="group relative w-full overflow-hidden">
            <button
              disabled={disabled}
              className={`bg-${
                bgColor ? bgColor : 'black'
              } delay-50 flex h-[50px] w-full flex-wrap place-content-center rounded-xl text-white transition duration-150 ease-in-out hover:bg-primary`}
            >
              <div className="z-10 flex flex-row-reverse items-center gap-2 px-8 py-4">
                <ChevronRightIcon className="size-5 rtl:rotate-180" />
                <span className="text-md">{text}</span>
              </div>
            </button>
            {/* <span className="absolute inset-0 rounded bg-black transition-transform duration-500 group-hover:translate-x-0"></span> */}
          </Link>
        )
      );

    // If the type is 'button', 'submit', or 'reset'
    case 'button':
    case 'submit':
    case 'reset':
      return (
        // <Link href='https://www.ic.gc.ca/app/scr/cc/CorporationsCanada/fdrlCrpDtls.html?corpId=12980266'>
        <div className="group relative w-full overflow-hidden">
          <button
            type={type}
            className={`bg-${
              bgColor ? bgColor : 'black'
            } delay-50 flex h-[50px] w-full flex-wrap place-content-center rounded-xl p-2 text-white transition duration-150 ease-in-out hover:bg-primary`}
          >
            <div className="z-10 flex flex-row rtl:flex-row-reverse items-center gap-2">
              <span>{text}</span>
            </div>
          </button>
          <span className="text-md"></span>
        </div>
        // </Link>
      );

    // If the type is any other value
    default:
      // Render nothing
      return null;
  }
}
