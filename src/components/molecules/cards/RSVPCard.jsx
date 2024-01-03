import { CardContainer } from "@/components/atoms/layout/CardContainer";
import { RSVPForm } from "@/components/organisms/RSVPForm";
import { ImageComponentForCard } from "@/components/ImageComponentForCard";

export const RSVPCard = () => {
  const ID = 'rsvp';
  return (
    <CardContainer id={ID}>
      <ImageComponentForCard src="/img/hero_walking_tree_trunk.jpeg" alt="Derek walks chelsea along the tree trunk" />
      <RSVPForm />
    </CardContainer>
  );
};