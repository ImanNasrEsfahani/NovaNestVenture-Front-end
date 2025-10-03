import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getServerTranslation } from 'app/i18n';
import LanguageSwitch from "@/components/common/LanguageSwitch";

const base = process.env.NEXT_PUBLIC_BASE_URL || '';

type MenuEntry = { label: string; href: string };

export default function Navbar({ lang }: { lang: string }) {
  const { t } = getServerTranslation(lang, 'layout');
  const menuItems = (t('menuItems', { returnObjects: true }) as MenuEntry[]) ?? [];
  const submenuItems = (t('submenuItems', { returnObjects: true }) as MenuEntry[]) ?? [];
  const servicesLabel = lang === 'en' ? 'Services' : 'خدمات';

  return (
    <nav className="navbar fixed inset-x-0 top-0 z-40 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm text-white shadow-lg">
      <div className="max-w-responsive w-full mx-auto" >
        <div className="navbar-start gap-2 flex flex-grow lg:flex-none lg:!w-auto">
          <div className="dropdown items-center">
            <div
              tabIndex={0}
              role="button"
              aria-label={t('menuToggle', { defaultValue: 'Toggle navigation' })}
              className="btn btn-ghost btn-circle h-full lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] w-72 space-y-2 rounded-box bg-[rgba(255,255,255,0.9)] p-3 shadow"
            >
              <li>
                <details>
                  <summary className="font-medium text-base-content hover:text-primary">{servicesLabel}</summary>
                  <ul className="space-y-1 p-2">
                    {submenuItems.map(({ label, href }) => (
                      <li key={label}>
                        <Link href={`${base}${href}`} className="whitespace-nowrap text-base-content hover:text-primary">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <Link href={`${base}${href}`} className="whitespace-nowrap text-base-content hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-12">
                {/* <LanguageSwitch /> */}
              </li>
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost h-16 min-h-16 px-2 normal-case flex flex-grow lg:flex-none lg:!w-auto">
            <Image
              src="/static/images/nova-nest-venture-logo.svg"
              alt="Logo"
              width={150}
              height={64}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex flex-grow justify-center h-full">
          <ul className="menu menu-horizontal gap-6 p-0 m-0 h-full text-lg">
            <li className="dropdown dropdown-bottom dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-1 px-3 py-2 font-medium hover:text-primary"
                aria-haspopup="true"
              >
                {servicesLabel}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </div>
              <ul className="menu menu-lg dropdown-content mt-0 translate-y-1 w-80 space-y-1 rounded-box bg-[rgba(0,0,0,0.6)] shadow">
                {submenuItems.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={`${base}${href}`} className="px-2 py-3 text-white hover:text-primary hover:font-bold">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {menuItems.map(({ label, href }) => (
              <li key={label}>
                <Link href={`${base}${href}`} className="px-3 py-2 font-medium text-white hover:text-primary hover:font-bold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end hidden lg:flex flex-none !w-auto gap-2">
          {/* <LanguageSwitch /> */}
        </div>
      </div>
    </nav>
  );
}