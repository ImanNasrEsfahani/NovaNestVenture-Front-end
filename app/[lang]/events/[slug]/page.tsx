import Banner from '@/components/common/Banner';
import { Metadata } from 'next';

import Image from 'next/image';
import Calender from '@/components/icons/Panel/Calender';
import Instagram from '@/components/icons/footer/Instagram';
import Whatsapp from '@/components/icons/footer/Whatsapp';
import LinkedIn from '@/components/icons/footer/LinkedIn';
import ButtonRefactor from '@/components/common/ButtonRefactor';
import LocationIcon from '@/components/icons/LocationIcon';
import TagIcon from '@/components/icons/TagIcon';

export const metadata: Metadata = {
  title: 'Landa Holding | Event',
  description:
    'Welcome to Landa Holding, where innovation meets excellence. Explore our diverse portfolio, discover our commitment to sustainable growth, and join us on a journey towards a brighter future.'
};

export default function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  // const pathname = usePathname();
  // const slug = pathname?.replace('/magazine/', '');
  // const [cardData, setCardData] = useState<MagazineData>();
  // useEffect(() => {
  //   async function fetchTags() {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}blog/details/${slug}/?format=json`
  //     );
  //     const data = await response.json();
  //
  //     setCardData(data);
  //   }
  //   fetchTags();
  // }, [slug]);

  const cardData = [
    {
      title: 'Landa Holding | Event',
      date: {
        start: '2021-09-01',
        end: '2021-09-01',
        startTime: '10:00',
        endTime: '12:00'
      },
      tags: ['tag1', 'tag2', 'tag3'],
      location: 'Tehran',
      map: '/static/images/map.png',
      description1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      description2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      thumbnail: '/static/images/EventsBanner.webp',
      people: [
        {
          title: 'Dr.Hasanpour',
          image: '/static/images/EventsBanner.webp'
        },
        {
          title: 'Dr.Hasanpour',
          image: '/static/images/EventsBanner.webp'
        },
        {
          title: 'Dr.Hasanpour',
          image: '/static/images/EventsBanner.webp'
        },
        {
          title: 'Dr.Hasanpour',
          image: '/static/images/EventsBanner.webp'
        }
      ],
      description3:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    }
  ];

  return (
    <div>
      <Banner
        image="/static/images/EventsBanner.png"
        title="UPCOMING EVENTS"
        lang={lang}
      />
      <div className="max-w-[1600px] mx-auto my-16 rounded-sm border p-6 shadow-md">
        <div className="flex justify-between gap-20">
          <div className="flex w-2/3 flex-col gap-4">
            {cardData.map((card, index) => {
              return (
                <div key={index} className='flex flex-col gap-4'>
                  <p className="font-barlow">{card.description1}</p>
                  <p className="font-barlow">{card.description2}</p>
                  <div className="mb-12 mt-5 grid grid-cols-2 justify-around gap-10 font-gilda md:grid-cols-4">
                    {card.people.map((person, index) => {
                      return (
                        <div key={index} className="flex gap-2">
                          <div className="relative h-8 w-8">
                            <Image
                              className="rounded-full object-cover"
                              src={person.image}
                              alt={person.title}
                              layout="fill"
                            />
                          </div>
                          {person.title}
                        </div>
                      );
                    }, [])}
                  </div>
                  <p className="font-barlow">{card.description3}</p>
                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <input
                      className="h-[50px] w-[350px] rounded-md border border-[#E5E5E5] bg-[#FAFAFA] p-5"
                      type="text"
                      placeholder="Full Name"
                    />
                    <input
                      className="h-[50px] w-[350px] rounded-md border border-[#E5E5E5] bg-[#FAFAFA] p-5"
                      type="text"
                      placeholder="email"
                    />
                    <input
                      className="h-[50px] w-[350px] rounded-md border border-[#E5E5E5] bg-[#FAFAFA] p-5"
                      type="text"
                      placeholder="Number"
                    />
                    {/* <select className="h-[50px] w-[350px] rounded-md border border-[#E5E5E5] bg-[#FAFAFA] pl-5">
                      <option value="Select a number" disabled defaultChecked>
                        Select a number
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select> */}
                  </div>
                  {/* <Button
                    size="visit"
                    text="Register"
                    bgColor="Primary"
                    lang={lang}
                  /> */}
                  <ButtonRefactor text="Register" />
                </div>
              );
            })}
          </div>
          {cardData.map((card, index) => {
            return (
              <div key={index} className="md:w-1/3">
                <Image
                  src={card.map}
                  alt={card.title}
                  width={505}
                  height={320}
                />
                <div className="mt-6 flex flex-col gap-4 text-primary">
                  <div className="flex items-center gap-2 font-gilda">
                    <LocationIcon />
                    <span>{card.location}</span>
                  </div>

                  <div key={index} className="flex gap-4">
                    {card.tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 font-gilda"
                        >
                          <TagIcon />
                          <span key={index}>{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-2 font-gilda">
                    <Calender />
                    <span>{card.date.startTime}</span>
                    <span>{card.date.start}</span>
                  </div>
                  <div className="flex gap-2 font-gilda">
                    <Calender />
                    <span>{card.date.endTime}</span>
                    <span>{card.date.end}</span>
                  </div>
                  <button className="h-[50px] w-[174px] self-center rounded-sm border border-black px-4 md:self-end">
                    Add To Calender
                  </button>
                </div>
                <div className="mt-10 rounded-sm bg-[#F8F5F0] p-6 font-gilda">
                  <span className="text-xl">Event sharing</span>
                  <div className="my-6 flex gap-5">
                    <Instagram />
                    <Whatsapp />
                    <LinkedIn />
                  </div>
                  <div className="flex gap-2">
                    <input
                      className="h-[50px] w-[350px] border border-[#E5E5E5] bg-[#FAFAFA] p-5"
                      type="text"
                      placeholder="https://ddkksso.ddkke.aalhb.com"
                    />
                    <button className="h-[50px] w-[118px] self-end rounded-sm border border-black p-2 text-xs">
                      Copy the link
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
