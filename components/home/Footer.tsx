import Link from 'next/link';
import Instagram from '@/components/icons/footer/Instagram';
import Envelope from '@/components/icons/footer/Envelope';
import Whatsapp from '@/components/icons/footer/Whatsapp';
import LinkedIn from '@/components/icons/footer/LinkedIn';
import { getServerTranslation } from 'app/i18n';

interface FooterItem {
  text: string;
  link: string;
}

interface FooterText {
  [key: string]: FooterItem;
}

const base = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function Footer({
  lang
}: {
  lang: string;
}) {

  const { t } = getServerTranslation(lang, "footer")

  function GetYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div className="bg-[#F7F3EE] font-barlow">
      <div className="max-w-responsive mx-auto p-6  flex flex-wrap justify-between space-y-5">
        <div className="mt-5 flex flex-col w-full xl:w-2/5 gap-2">
          <div className="text-justify text-xl font-medium text-primary pb-2">
            {t('about.title')}
          </div>
          <div className="mt-1 text-justify text-sm font-normal text-black pb-2">
            {t('about.text')}
          </div>
          <div className="mt-2 flex flex-row items-center text-black gap-4">
            <Link aria-label="Instagram" href={'https://instagram.com/novanestventure'} className="hover:text-primary" target="_blank">
              <Instagram />
            </Link>
            <Link aria-label="Email" href={'mailto:info@NovaNestVenture.com'} className="hover:text-primary">
              <Envelope />
            </Link>
            <Link aria-label="Whatsapp" href={'https://wa.me/+17789865432'} className="hover:text-primary" target="_blank">
              <Whatsapp />
            </Link>
            <Link aria-label="Linkedin" href={'https://www.linkedin.com/company/novanestventure/'} className="hover:text-primary" target="_blank">
              <LinkedIn />
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col w-full md:w-1/3 xl:w-1/5 xl:text-center">
          <div className="text-xl font-medium text-primary pb-2">
            {t('explore.title')}
          </div>
          {(t('explore', { returnObjects: true }).text as Array<{ title: string; link: string }>).map((item, index) => (
            <Link
              key={index}
              href={`${base}${item.link}`}
              className="pt-1 hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col w-full md:w-1/3 xl:w-1/5 xl:text-center">
          <div className="text-xl font-medium text-primary pb-2">{t('forms', { returnObjects: true }).title}</div>
          {Object.entries(t('forms', { returnObjects: true }).text as FooterText).map(([key, value]) => (
            <Link
              key={key}
              href={`${base}${value.link}`}
              className="pt-1 hover:text-primary"
            >
              {value.text}
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col w-full md:w-1/3 xl:w-1/5 xl:text-center">
          <div className="text-xl font-medium text-primary pb-2">
            {t('contact', { returnObjects: true }).title}
          </div>
          <div className="pt-1 text-black">
            {t('contact', { returnObjects: true }).text.addressLineOne}
          </div>
          <div className="text-black">
            {t('contact', { returnObjects: true }).text.addressLineTwo}
          </div>
          <Link
            href="tel:0017789865432"
            className="pt-2 hover:text-primary"
          >
            {t('contact', { returnObjects: true }).text.cNumber}
          </Link>
          <Link
            href="mailto:info@NovaNestVenture.com"
            className="pt-2 hover:text-primary"
          >
            {t('contact', { returnObjects: true }).text.email}
          </Link>
        </div>
      </div>
      <div className="max-w-responsive mx-auto p-4 border-t border-tableHeader text-center text-tableHeader">
        © Copyright {GetYear()} by{' '}
        <Link href={`${base}`} className="text-tableHeader">
          NovaNestVenture
        </Link>
      </div>
    </div>
  );
}