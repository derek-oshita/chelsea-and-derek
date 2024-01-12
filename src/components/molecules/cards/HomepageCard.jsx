'use client';
import { HomepageCardText } from "@/components/atoms/HomepageCardText";
import { CardContainer } from "@/components/atoms/layout/CardContainer";
import { ImageComponentForCard } from "@/components/molecules/ImageComponentForCard";

export const HomepageCard = () => {
  const ID = 'homepage';
  const images = [
    { src: '/img/hero1.jpg', alt: 'chelsea-mila-and-derek' },
    { src: '/img/hero2.jpg', alt: 'chelsea-and-derek-on-a-tree' },
    { src: '/img/hero3.jpg', alt: 'chelsea-and-derek-walking-mila' },
    { src: '/img/hero4.jpg', alt: 'chelsea-mila-and-derek-on-a-tree' },
  ];

  return (
    <CardContainer id={ID}>
      <ImageComponentForCard src={images[0].src} alt={images[0].alt} />
      <HomepageCardText />
    </CardContainer>
  );
};