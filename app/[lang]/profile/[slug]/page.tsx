import React from 'react';
import EnvelopeMediaIconNew from '@/components/icons/socialMediaIcons/EnvelopeMediaIconNew';
import InstagramIconNew from '@/components/icons/socialMediaIcons/InstagramIconNew';
import LinkedinIconNew from '@/components/icons/socialMediaIcons/LinkedinIconNew';
import WhatsappIconNew from '@/components/icons/socialMediaIcons/WhatsappIconNew';
import Image from 'next/image';
import Link from 'next/link';
import { ProfileData } from '@/types/global';

export default async function Page({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const empty: ProfileData = {
    first_name: '',
    last_name: '',
    websites: [],
    job_title: '',
    instagram: '',
    email: '',
    linkedin: '',
    whatsapp: '',
    thumbnail: ''
  };

  let data: ProfileData = empty;

  try {
    const host = process.env.NEXT_PUBLIC_DJANGO_HOST_URL;
    if (host) {
      const res = await fetch(
        `${host}user/profile/${encodeURIComponent(slug)}?format=json`,
        { cache: 'no-store' } // or: next: { revalidate: 300 }
      );
      if (res.ok) {
        data = await res.json();
      }
    }
  } catch (e) {
    // swallow error (minimal change)
  }

  return (
    <div className="max-w-responsive mx-auto flex h-screen justify-center w-full py-24 md:px-40">
      <section className="flex flex-col items-center justify-between w-full px-4 md:w-3/5">
        {/* top */}
        <div className="flex flex-col items-center">
          <div className="px-3 flex items-center justify-center rounded-full">
            <Image
              src={data.thumbnail || '/static/images/our-team/header.webp'}
              width={200}
              height={200}
              alt="thumbnail"
            />
          </div>
          <p className="my-3 text-xl">
            {data.first_name} {data.last_name}
          </p>
          <p className="text-gray-500">{data.job_title}</p>
        </div>
        {/* top */}
        {/* middle */}
        <div className="w-full">
          <ul className="w-full space-y-4">
            {data.websites?.map((website: any, index: number) => (
              <Link
                key={index}
                href={website.url || 'https://landaholding.com'}
                className="hover:text-primary"
                target="_blank"
              >
                <li className="mt-3 flex justify-between items-center px-2 py-3 shadow-lg">
                  <div className="size-10 flex items-center justify-center">
                    {website.logo && (
                      <Image
                        src={website.logo}
                        width={100}
                        height={100}
                        alt="logo"
                      />
                    )}
                  </div>
                  <div className="flex">
                    <p className="m-auto text-lg">{website.title}</p>
                  </div>
                  <div className="w-10" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* middle */}
        {/* down */}
        <div>
          {/* TODO: change default address */}
          <div className="mt-2 flex h-[22px] w-[200px] flex-row items-center justify-between">
            <Link
              aria-label="Instagram"
              href={data.instagram || 'https://instagram.com'}
              className="hover:text-primary"
              target="_blank"
            >
              <InstagramIconNew className="bi bi-instagram size-8" />
            </Link>
            <Link
              aria-label="Email"
              href={data.email ? `mailto:${data.email}` : '#'}
              className="hover:text-primary"
              target="_blank"
            >
              <EnvelopeMediaIconNew
                className="bi bi-envelope size-8"
                width="16"
                height="16"
              />
            </Link>
            <Link
              aria-label="Whatsapp"
              href={data.whatsapp || 'https://whatsapp.com'}
              className="hover:text-primary"
              target="_blank"
            >
              <WhatsappIconNew
                width="16"
                height="16"
                className="bi bi-whatsapp size-8"
              />
            </Link>
            <Link
              aria-label="Linkedin"
              href={data.linkedin || 'https://linkedin.com'}
              className="hover:text-primary"
              target="_blank"
            >
              <LinkedinIconNew
                width="16"
                height="16"
                className="bi bi-linkedin size-8"
              />
            </Link>
          </div>
        </div>
        {/* down */}
      </section>
    </div>
  );
}