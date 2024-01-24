import { GoogleMapComponent } from "@/components/organisms/GoogleMapComponent";
import { CardContainer } from "@/components/atoms/layout/CardContainer";

export const StayNearbyCard = () => {
  const ID = 'stay-nearby';
  return (
    <CardContainer id={ID}>
      <GoogleMapComponent />
    </CardContainer>
  );
};