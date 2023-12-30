import { CardContainer } from "@/components/atoms/layout/CardContainer";
import { GoogleMapComponent } from "@/components/organisms/GoogleMapComponent";

export const StayNearbyCard = () => {
  const ID = 'stay-nearby';
  return (
    <CardContainer id={ID}>
      <GoogleMapComponent />
    </CardContainer>
  );
};