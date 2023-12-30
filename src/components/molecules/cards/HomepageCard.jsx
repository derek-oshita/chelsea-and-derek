import { HomepageCardImage } from "@/components/atoms/HomepageCardImage";
import { HomepageCardText } from "@/components/atoms/HomepageCardText";
import { CardContainer } from "@/components/atoms/layout/CardContainer";

export const HomepageCard = () => {
  const ID = 'homepage';
  return (
    <CardContainer id={ID}>
      <HomepageCardImage />
      <HomepageCardText />
    </CardContainer>
  );
};