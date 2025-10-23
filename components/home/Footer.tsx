import Link from 'next/link';
import Instagram from '@/components/icons/footer/Instagram';
import Envelope from '@/components/icons/footer/Envelope';
import Whatsapp from '@/components/icons/footer/Whatsapp';
import LinkedIn from '@/components/icons/footer/LinkedIn';
import Facebook from '@/components/icons/footer/Facebook';
import { getServerTranslation } from 'app/i18n';

interface FooterItem {
  text: string;
  link: string;
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
        <div className="mt-5 flex flex-col justify-between w-full lg:w-2/5">
          <div>
            <h4 className="text-justify text-xl font-medium text-primary pb-2">{t('about.title')}</h4>
            <p className="text-justify font-normal pb-2">{t('about.text')}</p>
          </div>
          <div className="mt-2 pb-1 flex flex-row items-center gap-4">
            <Link aria-label="Instagram" href={'https://instagram.com/novanest.venture'} className="hover:text-primary" target="_blank">
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
            <Link aria-label="Facebook" href={'https://www.facebook.com/people/NovaNest-Venture/pfbid02MEtyGfDFbdWqRF4mTkxieN1iwrtYwTG48x13C72J89gBFDxjpbSKJNpxQLchGa59l/'} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </Link>
          </div>
        </div>
        <div className="mt-5 flex flex-col w-full lg:w-1/3 xl:w-1/5 xl:text-center">
          <div className="text-xl font-medium text-primary pb-2">
            {t('explore.title')}
          </div>
          {(t('explore', { returnObjects: true }).text as Array<{ title: string; link: string }>).map((item, index) => (
            <Link
              key={index}
              href={`${base}${item.link}`}
              className={`hover:text-primary ${index > 0 ? 'pt-1' : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="mt-5 flex flex-col w-full md:w-1/3 xl:w-1/5 xl:text-center">
          <div className="text-xl font-medium text-primary pb-2">{t('forms', { returnObjects: true }).title}</div>
          {(t('forms', { returnObjects: true }).text as Array<{ title: string; link: string }>).map((item, index) => (
            <Link
              key={index}
              href={`${base}${item.link}`}
              className={`hover:text-primary ${index > 0 ? 'pt-1' : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="mt-5 flex flex-col w-full md:w-1/3 xl:w-1/5 xl:text-center">
          <div className="text-xl font-medium text-primary pb-2">
            {t('contact', { returnObjects: true }).title}
          </div>

          {(t('contact', { returnObjects: true }).text as Array<{ type: 'text' | 'link'; title: string; link?: string }>).map(
            (item, index) =>
              item.type === 'link' && item.link ? (
                <Link
                  key={item.title}
                  href={item.link}
                  className={`hover:text-primary ${index > 0 ? 'pt-1' : ''} `}
                >
                  {item.title}
                </Link>
              ) : (
                <div key={item.title} className={`${index > 0 ? 'pt-1' : ''}`}>
                  {item.title}
                </div>
              )
          )}
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