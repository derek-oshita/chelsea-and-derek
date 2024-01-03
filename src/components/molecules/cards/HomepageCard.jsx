import { HomepageCardText } from "@/components/atoms/HomepageCardText";
import { CardContainer } from "@/components/atoms/layout/CardContainer";
import { ImageComponentForCard } from "@/components/ImageComponentForCard";

export const HomepageCard = () => {
  const ID = 'homepage';
  return (
    <CardContainer id={ID}>
      <ImageComponentForCard src="/img/hero1.jpeg" alt="chelsea-mila-and-derek" />
      <HomepageCardText />
    </CardContainer>
  );
};