import {
  SportsInterface,
  LogosInterface,
  ImagesInterface,
  CardsList
} from '@/types/global';

const cardData2: SportsInterface[] = [
  {
    title: 'Benefits of Spa Treatments',
    image:
      '/static/images/home/magazine/annie-spratt-hWJsOnaWTqs-unsplash 1.webp',
    type: 'Acceleration',
    date: 'apr 27'
  },
  {
    title: 'Fitness Center',
    image:
      '/static/images/home/magazine/remy_loz-3S0INpfREQc-unsplash (1) 1.webp',
    type: 'Investment',
    date: 'apr 27'
  },
  {
    title: 'Benefits of Spa Treatments',
    image:
      '/static/images/home/magazine/emile-perron-xrVDYZRGdw4-unsplash 1.webp',
    type: 'Investment',
    date: 'apr 27'
  }
];

const partners1: LogosInterface[] = [
  {
    number: 1,
    alt: 'evimo'
  },
  {
    number: 2,
    alt: 'azad'
  },
  {
    number: 3,
    alt: 'nekoei'
  },
  {
    number: 4,
    alt: 'evimo'
  },
  {
    number: 5,
    alt: 'evimo'
  },
  {
    number: 6,
    alt: 'evimo'
  }
];

const partners2: LogosInterface[] = [
  {
    number: 7,
    alt: 'evimo'
  },
  {
    number: 8,
    alt: 'evimo'
  },
  {
    number: 9,
    alt: 'evimo'
  },
  {
    number: 10,
    alt: 'evimo'
  },
  {
    number: 11,
    alt: 'evimo'
  }
];

const partners3: LogosInterface[] = [
  {
    number: 12,
    alt: 'evimo'
  },
  {
    number: 13,
    alt: 'evimo'
  },
  {
    number: 14,
    alt: 'evimo'
  },
  {
    number: 15,
    alt: 'evimo'
  }
];

const images: ImagesInterface[] = [
  {
    src: '/static/images/academy/gallery/all/1.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/2.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/3.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/4.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/5.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/6.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/7.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/8.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/9.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/10.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/11.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/12.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/13.png'
  },
  {
    src: '/static/images/academy/gallery/all/14.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/15.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/16.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/17.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/18.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/19.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/20.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/21.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/22.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/23.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/24.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/25.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/26.png'
  },
  {
    src: '/static/images/academy/gallery/all/27.jpg'
  },
  {
    src: '/static/images/academy/gallery/all/28.jpg'
  }
];

const cards: CardsList[] = [
  {
    title: 'Investment Center',
    text: 'We assist startups by providing their investments to help them grow and transition their businesses into the business markets to expand them internationally. We collaborate with a group of international investors who invest in various projects and businesses based on their investment priorities. At NovaNest Investment Center, all the required investments for starting and developing your business will be provided, allowing you to prosper and achieve profitability as soon as possible.',
    image: '/static/images/about/card1.png',
    reverse: true,
    link: '/en/investor-registration'
  },
  {
    title: 'Acceleration Center',
    text: 'After completing the mentioned stages, the NovaNest Acceleration Center comes into action. This center has been established with the aim of accelerating your startup. The purpose of founding this center is to undertake all necessary actions for the growth and acceleration of your business until reaching ultimate success. One of the initial steps of the NovaNest Acceleration Center is analyzing and checking competitors. One of our initiatives at NovaNest Venture is creating a co-working space for both internal and external startups. Our co-working space is designed to foster teamwork, allowing startups to collaborate directly with existing startups and also hold brainstorming sessions together for projects.',
    image: '/static/images/about/card2.png',
    reverse: false,
    link: '/startups-form'
  },
  {
    title: 'Academy',
    text: "The first step after joining the NovaNest Academy is to discover each individual's interests. We believe that in order to progress, every person should take steps in their interested field because pursuing one's passions always brings better results. With the help of our experienced and specialized staff, we can identify each person's interests and train them according to their passion. The most up-to-date method of education in the world is mentoring. This method of education is both theoretical and practical, providing specialized training to individuals based on their skills and interests. By selecting the best mentors, we offer the best education to teenagers. Additionally, after assessing their interests, teenagers can actively participate and gain experience in the relevant profession within our organization.",
    image: '/static/images/about/card3.png',
    reverse: true,
    link: '/academy'
  }
];

export {
  cardData2,
  partners1,
  partners2,
  partners3,
  images,
  cards,
};
