import { Metadata } from 'next';
import { useTranslation } from 'app/i18n';
import ContactUsForm from '@/components/common/form/ContactUsForm';
import ContactUsDescription from '@/components/common/ContactUsDescription';
import './contact.css';

export const metadata: Metadata = {
  title: 'Landa Holding | Contact',
  description:
    'Contact Landa Holding to get in touch with our dedicated team. Whether you have questions, inquiries, or partnership opportunities, we are here to assist you. Reach out to us today.'
};

export default async function ContactUsPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'contact');
  // Renamed the component for better naming
  return (
    <div>
      <div className="relative h-screen md:h-[520px]">
        {/* Background Image with Blur and Overlay */}
        <div
          style={{
            backgroundImage: `url(/static/images/Contact/contactbanner.webp)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="absolute hidden inset-0 h-full md:h-[520px]  "
        ></div>

        <div
          style={{
            backgroundImage: `url(/static/images/Contact/mobile-baner.webp)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="absolute inset-0 h-full md:h-[520px]  "
        >
          <span className="get-shadow absolute z-10 top-[40rem] md:top-[24rem] left-[10%] text-4xl text-white md:text-8xl font-gilda  ">
            {t('banner')}
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      {/* ContactUsDescription Component */}
      {/* TODO: hardcode delete */}
      <div className='container max-w-[1600px] mx-auto grid grid-cols-1 gap-12 px-5 py-8 font-barlow text-black md:py-28 md:flex items-center md:flex-row md:justify-between lg:px-28'>
        <ContactUsDescription />
        <ContactUsForm />
      </div>
    </div>
  );
}
