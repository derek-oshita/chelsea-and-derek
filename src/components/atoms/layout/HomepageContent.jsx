import HomepageImage from "@/components/atoms/img/HomepageImage";
import { Clock } from "@/components/organisms/Clock";

const WEDDING_DATE = new Date('2024-10-05');

export const HomepageContent = () => {
  return(
    <div id="homepage-content-container" className="h-full w-full flex xxs:flex-col md:flex-row md:gap-2 content-center items-center">
      <HomepageImage/>
      <Clock expireOn={WEDDING_DATE}/>
    </div>
  );
};