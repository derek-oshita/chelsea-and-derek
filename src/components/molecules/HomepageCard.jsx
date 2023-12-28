import { HomepageCardImage } from "@/components/atoms/HomepageCardImage";
import { HompageCardText } from "@/components/atoms/HompageCardText";

export const HomepageCard = () => {
  return (

    <div id="card-container" className="h-full w-full flex justify-center items-center">
      <div id="homepage-card" className="flex xs:flex-col md:flex-row rounded overflow-hidden md:shadow-lg">
        <HomepageCardImage />
        <HompageCardText />
      </div>
    </div>
  );
};