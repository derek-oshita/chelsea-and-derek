import { HomepageCardImage } from "@/components/atoms/HomepageCardImage";
import { HomepageCardText } from "@/components/atoms/HomepageCardText";

export const HomepageCard = () => {
  return (
    <div id="card-container" className="h-full w-full flex justify-center items-center">
      <div id="homepage-card" className="flex flex-col md:flex-row md:shadow-lg rounded overflow-hidden ">
        <HomepageCardImage />
        <HomepageCardText />
      </div>
    </div>
  );
};