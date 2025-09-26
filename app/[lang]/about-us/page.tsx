import { Metadata } from 'next';
import AboutUs from '@/components/about/AboutUs';
import SubsidiaryCompanies from '@/components/about/SubsidiaryCompanies';
import StoryOfUs from '@/components/about/StoryOfUs';
import KeyDifferentiating from '@/components/KeyDifferentiating';
import Profile from '@/components/about/Profile';
import Banner from '@/components/common/Banner';
import { getServerTranslation } from 'app/i18n';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'NovaNest Venture | About',
  description:
    'Learn about NovaNest Venture, a forward-thinking company dedicated to innovation and excellence. Discover our mission, values, and the team behind our success. Join us on our journey towards a brighter future.',
};

export default function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = getServerTranslation(lang, "aboutUs");

  return (
    <>
      <div className='hidden md:inline'>
        <Banner
          image="/static/images/group.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      <div className='inline md:hidden'>
        <Banner
          image="/static/images/group-mobile.webp"
          title={t('banner')}
          lang={lang}
        />
      </div>
      
      
      <div className='max-w-responsive mx-auto'>
        <AboutUs lang={lang} />

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-16 my-24'>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='text-7xl font-bold font-header mb-4'>2017</p>
            <p className='text-base text-justify'>
              Beginning the Educational and Entrepreneurship Journey for Youth Our journey began in 2017 with the Landa Youth Business Academy. Over 250 young people aged 16 to 23 participated in programs that initially focused on robotics and technology and gradually expanded to entrepreneurship and startups. These young participants contributed to all startups developed within our organization and gained hands-on experience through real international projects. The academy continued its activities in Iran until 2025, preparing the next generation for a successful entry into the world of work and entrepreneurship.
            </p>
          </div>
          <div className='col-span-1'>
            <Image
              className="object-cover w-full rounded-xl"
              src="/static/images/about/story/2017-our-story-nova-nest-venture.png"
              alt="story of NovaNest Venture"
              width={661}
              height={404}
            />
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 my-24'>
          <div className='col-span-1'>
            <Image
              className="object-cover h-full rounded-xl"
              src="/static/images/about/story/2019-our-story-nova-nest-venture.png"
              alt="story of NovaNest Venture"
              width={661}
              height={404}
            />
          </div>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='text-7xl font-bold font-header mb-4'>2019</p>
            <p className='text-base text-justify'>
              Becoming a Knowledge-Based Accelerator in Iran Our educational activities evolved into Forough Accelerator, a knowledge-based accelerator recognized as one of the few in the country. It achieved the highest student employment among similar companies in Iran and collaborated with numerous international companies and startups.
            </p>
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 my-24'>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='text-7xl font-bold font-header mb-4'>2021</p>
            <p className='text-base text-justify'>
              Investing in Startups Focus shifted to investing in innovative and scalable startups with the official establishment of Landa Investment Holding in Toronto, Canada. The holding included 10 active subsidiary companies, with a special focus on artificial intelligence, genetics, technology supply and demand, tourism, and education. The holding supported startups in both Iran and Canada, helping them expand globally and achieve sustainable growth.
            </p>
          </div>
          <div className='col-span-1'>
            <Image
              className="object-cover h-full rounded-xl"
              src="/static/images/about/story/2021-our-story-nova-nest-venture.jpg"
              alt="story of NovaNest Venture"
              width={661}
              height={404}
            />
          </div>
        </div>

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 my-24'>
          <div className='col-span-1'>
            <Image
              className="object-cover h-full rounded-xl"
              src="/static/images/about/story/2021-our-story-nova-nest-venture.jpg"
              alt="story of NovaNest Venture"
              width={661}
              height={404}
            />
          </div>
          <div className='col-span-1 flex flex-col justify-center'>
            <p className='text-7xl font-bold font-header mb-4'>2025</p>
            <p className='text-base text-justify'>
              Official Establishment of NovaNest in Canada NovaNest was officially launched in Vancouver, Canada, providing professional services including Startup Visa and Provincial Entrepreneurship programs to international entrepreneurs. Our long-term goal is to become a global investment and accelerator hub, offering specialized and professional services to entrepreneurs anywhere in the world.
            </p>
          </div>
        </div>

        <SubsidiaryCompanies lang={lang}/>
        <StoryOfUs lang={lang}/>
        <KeyDifferentiating lang={lang} />
        <Profile lang={lang} />
      </div>
    </>
  );
}