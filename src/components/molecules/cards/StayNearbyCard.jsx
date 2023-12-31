import { GoogleMapComponent } from "@/components/organisms/GoogleMapComponent";

export const StayNearbyCard = () => {
  const ID = 'stay-nearby';
  return (
    <div id={`${ID}-card-container`} className="h-full w-full flex justify-center items-center">
      <div id={`${ID}-card`} className="flex flex-col shadow-lg rounded">
      </div>
      <GoogleMapComponent />
    </div>
  );
};