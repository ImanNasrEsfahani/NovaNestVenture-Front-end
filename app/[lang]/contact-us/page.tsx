import { Metadata } from 'next';
import { getServerTranslation } from 'app/i18n';
import ContactUsForm from '@/components/common/form/ContactUsForm';
import ContactUsDescription from '@/components/common/ContactUsDescription';
import './contact.css';
import AboutUsNovaNest from '@/components/about/AboutUs';
import SubsidiaryCompanies from '@/components/about/SubsidiaryCompanies';
import StoryOfLanda from '@/components/about/StoryOfUs';
import KeyDifferentiating from '@/components/contact-us/KeyDifferentiating';
import AboutUsProfile from '@/components/about/Profile';
import AboutUs from '@/components/about/AboutUs';

export const metadata: Metadata = {
  title: 'NovaNest Venture | Contact',
  description:
    'Contact NovaNest Venture to get in touch with our dedicated team. Whether you have questions, inquiries, or partnership opportunities, we are here to assist you. Reach out to us today.'
};

export default function ContactUsPage({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, 'contact');
  const { t: tAcademy } = getServerTranslation(lang, 'academy');

  // Renamed the component for better naming
  return (
    <div>
      <div className="relative h-screen md:h-[520px]">
        {/* Background Image with Blur and Overlay */}
        <div
          style={{
            backgroundImage: `url(/static/images/contact/contactbanner.webp)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="absolute hidden inset-0 h-full md:h-[520px]  "
        ></div>

        <div
          style={{
            backgroundImage: `url(/static/images/contact/mobile-baner.webp)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="absolute inset-0 h-full md:h-[520px]  "
        >
          <span className="get-shadow absolute z-10 top-[40rem] md:top-96 left-[10%] text-4xl text-white md:text-8xl font-header">
            {t('banner')}
          </span>
        </div>
      </div>
      

      <div className='px-8 md:px-24 max-w-responsive mx-auto'>
        <AboutUs
          lang={lang}
          translations={{
              AboutUs: tAcademy('AboutUsNovaNest.title'),
              AboutUsContent: tAcademy('AboutUsNovaNest.text')
          }} 
        />
        <SubsidiaryCompanies lang={lang}/>
        <StoryOfLanda lang={lang}/>
        <KeyDifferentiating lang={lang} />
        <AboutUsProfile lang={lang} />
      </div>

      {/* Main Content Grid */}
      {/* ContactUsDescription Component */}
      {/* TODO: hardcode delete */}
      <div className='container max-w-responsive mx-auto grid grid-cols-1 gap-12 px-5 py-8 font-barlow text-black md:py-28 md:flex items-center md:flex-row md:justify-between lg:px-28'>
        <ContactUsDescription lang={lang} />
        <ContactUsForm lang={lang} />
      </div>
    </div>
  );
}
