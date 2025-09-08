"use client"

import Footer from '../../components/home/Footer';
import Navbar from '../../components/common/Navbar';
import ScrollUpButton from '../../components/common/ScrollUpButton';
// import { dir } from 'i18next'
import { languages } from 'app/i18n/setting'
import './globals.css';
import { useLang } from 'stores/langStore';
// import { EB_Garamond } from 'next/font/google'

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  const lang = useLang().lang;

  return (
    <html lang={lang} dir={lang ? 'rtl' : 'ltr'}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-text" >
        <Navbar>
          <main className='mx-auto'>
            {children}
          </main>
          <Footer />
          <ScrollUpButton />
        </Navbar>
      </body>
    </html>
  );
}