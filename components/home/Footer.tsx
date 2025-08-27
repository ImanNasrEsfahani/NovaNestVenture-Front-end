
import Link from 'next/link';
import Instagram from '../icons/footer/Instagram';
import Envelope from '../icons/footer/Envelope';
import Whatsapp from '../icons/footer/Whatsapp';
import LinkedIn from '../icons/footer/LinkedIn';
import { useTranslation } from 'app/i18n';

export default async function Footer(
  { lang }: { lang: string }
) {

  const { t } = await useTranslation(lang, "footer")

  function GetYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div className="bg-[#F7F3EE] font-barlow">
      <div className="max-w-[1600px] mx-auto p-4  flex flex-wrap justify-between space-y-5">
        <div className="mt-5 flex flex-col w-full xl:w-2/5 gap-2">
          <div className="text-justify text-xl font-medium text-[#AA8453] pb-2">
            {t('about', { returnObjects: true }).title}
          </div>
          <div className="mt-1 text-justify text-base  font-normal text-black pb-2">
            {t('about', { returnObjects: true }).text}
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
          <div className="text-xl font-medium text-[#AA8453] pb-2">
            {t('explore', { returnObjects: true }).title}
          </div>
          <Link
            href={'/'}
            className="pt-1 hover:text-primary"
          >
            {t('explore', { returnObjects: true }).text.home}
          </Link>
          <Link
            href={'/about'}
            className="pt-1 hover:text-primary"
          >
            {t('explore', { returnObjects: true }).text.about}
          </Link>
          <Link
            href={'/contact'}
            className="pt-1 hover:text-primary"
          >
            {t('explore', { returnObjects: true }).text.contact}
          </Link>
          <Link
            href={'/our-team'}
            className="pt-1 hover:text-primary"
          >
            {t('explore', { returnObjects: true }).text.ourTeam}
          </Link>
        </div>
        <div className="col-span-1 flex flex-col w-full md:w-1/3 xl:w-1/5 xl:text-center">
          <div className="text-xl font-medium text-[#AA8453] pb-2">{t('forms', { returnObjects: true }).title}</div>
          <Link
            href={'/StartupsForm'}
            className="pt-1 hover:text-primary"
          >
            {t('forms', { returnObjects: true }).text.startUp}
          </Link>
          <Link
            href={'/investor-registration'}
            className="pt-1 hover:text-primary"
          >
            {t('forms', { returnObjects: true }).text.investor}
          </Link>
          <Link
            href={'/entrepreneurs'}
            className="pt-1 hover:text-primary"
          >
            {t('forms', { returnObjects: true }).text.entrepreneur}
          </Link>
          <Link
            href={'/prtners'}
            className="pt-1 hover:text-primary"
          >
            {t('forms', { returnObjects: true }).text.prtners}
          </Link>
          <Link
            href={'/partner-membership'}
            className="pt-1 hover:text-primary"
          >
            {t('forms', { returnObjects: true }).text.partners}
          </Link>
        </div>
        <div className="col-span-1 flex flex-col w-full md:w-1/3 xl:w-1/5 xl:text-center">
          <div className="text-xl font-medium text-[#AA8453] pb-2">
            {t('contact', { returnObjects: true }).title}
          </div>
          <div className="pt-1 text-black">
            {t('contact', { returnObjects: true }).text.canada}
          </div>
          <Link
            href="tel:0017789865432"
            className="pt-1 hover:text-primary"
          >
            {t('contact', { returnObjects: true }).text.cNumber}
          </Link>
        </div>
      </div>
      <div className="max-w-[1600px] p-4 border-t border-[#DDCEBA] pt-4 text-center text-[#DDCEBA]">
        © Copyright {GetYear()} by{' '}
        <Link href={'/'} className="text-[#DDCEBA]">
          NovaNestVenture
        </Link>
      </div>
    </div>
  );
}