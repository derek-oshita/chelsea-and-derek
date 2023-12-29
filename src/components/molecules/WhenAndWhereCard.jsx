import { CardContainer } from "@/components/atoms/layout/CardContainer";
import { WhenAndWhereCardVideo } from "@/components/atoms/WhenAndWhereCardVideo";
import { WhenAndWhereCardText } from "@/components/WhenAndWhereCardText";

export const WhenAndWhereCard = () => {
  const ID = 'when-and-where';
  return (
    <CardContainer id={ID}>
      <WhenAndWhereCardVideo />
      <WhenAndWhereCardText />
    </CardContainer>
  );
};