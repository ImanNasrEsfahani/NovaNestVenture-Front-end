
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
    <div className="flex flex-col bg-[#F7F3EE] p-8 font-barlow">
      <div className="flex flex-col justify-between space-y-5 md:flex-row md:gap-4 md:p-20">
        <div className="mt-5 flex flex-col gap-2 md:w-[344px]">
          <div className="h-[25px] text-justify text-xl font-medium text-[#AA8453]">
            {t('about', { returnObjects: true }).title}
            <br />
          </div>
          <div className={`mt-1 text-justify text-base  font-normal text-black`}>
            {t('about', { returnObjects: true }).text}
            <br />
          </div>
          <div className="mt-2 flex h-[22px] w-[126px] flex-row items-center justify-between text-black">
            <Link
              aria-label="Instagram"
              href={
                'https://instagram.com/novanestventure'
              }
              className="hover:text-primary"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              aria-label="Email"
              href={'mailto:info@NovaNestVenture.com'}
              className="hover:text-primary"
            >
              <Envelope />
            </Link>
            <Link
              aria-label="Whatsapp"
              href={'https://wa.me/+17789865432'}
              className="hover:text-primary"
              target="_blank"
            >
              <Whatsapp />
            </Link>
            <Link
              aria-label="Linkedin"
              href={'https://www.linkedin.com/company/novanestventure/'}
              className="hover:text-primary"
              target="_blank"
            >
              <LinkedIn />
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 md:mr-10">
          <div className="text-justify text-xl font-medium text-[#AA8453]">
            {t('explore', { returnObjects: true }).title}
            <br />
          </div>
          <div className="flex flex-col space-y-1">
            <Link
              href={'/'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('explore', { returnObjects: true }).text.home}
            </Link>
            <Link
              href={'/about'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('explore', { returnObjects: true }).text.about}
            </Link>
            <Link
              href={'/contact'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('explore', { returnObjects: true }).text.contact}
            </Link>
            <Link
              href={'/our-team'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('explore', { returnObjects: true }).text.ourTeam}
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1">
          <div className="text-xl font-medium text-[#AA8453]">{t('forms', { returnObjects: true }).title}</div>
          <div className="inline-flex flex-col items-start justify-start self-stretch">
            <Link
              href={'/StartupsForm'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('forms', { returnObjects: true }).text.startUp}
            </Link>
            <Link
              href={'/investor-registration'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('forms', { returnObjects: true }).text.investor}
            </Link>
            <Link
              href={'/entrepreneurs'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('forms', { returnObjects: true }).text.entrepreneur}
            </Link>
            <Link
              href={'/prtners'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('forms', { returnObjects: true }).text.prtners}
            </Link>
            <Link
              href={'/partner-membership'}
              className="max-w-fit text-base font-normal text-black hover:text-primary"
            >
              {t('forms', { returnObjects: true }).text.partners}
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1 md:ml-1 md:w-1/3">
          <div className="h-[30px] w-[93px]  text-xl font-medium text-[#AA8453]">
            {t('contact', { returnObjects: true }).title}
            <br />
          </div>
          <div className="text-justify text-base font-normal text-black">
            {t('contact', { returnObjects: true }).text.canada}
          </div>
          <div dir='ltr' className="text-justify text-base font-normal text-black">
            {t('contact', { returnObjects: true }).text.cNumber}
          </div>
        </div>
      </div>
      <div className="self-stretch border-t border-[#DDCEBA] pt-4 text-center text-[#DDCEBA]" dir='ltr'>
        © Copyright {GetYear()} by{' '}
        <Link href={'/'} className="text-[#DDCEBA]">
          NovaNestVenture
        </Link>
      </div>
    </div>
  );
}