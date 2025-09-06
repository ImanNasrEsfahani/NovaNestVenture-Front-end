'use client';
import Image from 'next/image';
import Link from 'next/link';


export default function Logo({ route }: { route: 'holding' | 'academy' }) {
  return (
    <div className="m-2 flex h-full items-center justify-start px-2 text-left">
      <Link href={route === 'holding' ? '/' : '/academy'}>
        <div className="flex flex-col items-end md:flex-row">
          <Image
            loading="lazy"
            className="size-10 md:h-14 md:w-12"
            src={
              route === 'holding'
                ? '/static/images/nova-nest-venture-logo.svg'
                : '/static/images/academy/logo.svg'
            }
            alt="Logo"
            width={125}
            height={106}
          />
          <span
            className={`${route === 'academy' ? 'text-lime-400' : 'text-primary'
              } text-[12px] font-bold tracking-[0.375px] md:text-xl`}
          >
            {route === 'academy' ? 'Academy' : 'NovaNest'}
          </span>
        </div>
      </Link>
    </div>
  );
}
