'use client'

import HomeCardsSection from './HomeCardsSection';
import { HomeCardsProps } from '@/types/global';

export default function HomeCards({
  smallTitle,
  titles,
  text,
  images,
  reverse,
  link,
  buttonText
}: HomeCardsProps) {
  return (
    <div>
       <HomeCardsSection smallTitle={smallTitle} text={text} images={images} reverse={reverse} link={link} titles={titles} buttonText={buttonText}/>
    </div>
  );
}