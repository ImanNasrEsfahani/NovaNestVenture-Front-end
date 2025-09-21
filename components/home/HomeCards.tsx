'use client'

import HomeCardsSection from './HomeCardsSection';
import { HomeCardsInterface } from '@/types/global';

export default function HomeCards({
  smallTitle,
  titles,
  text,
  images,
  reverse,
  link,
  buttonText
}: HomeCardsInterface) {
  return (
    <div className="mb-40">
       <HomeCardsSection smallTitle={smallTitle} text={text} images={images} reverse={reverse} link={link} titles={titles} buttonText={buttonText}/>
    </div>
  );
}