import HomepageImage from "@/components/atoms/img/HomepageImage";
import { Clock } from "@/components/organisms/Clock";

const WEDDING_DATE = new Date('2024-10-05');

export const HomepageContent = () => {
  return(
    <div className="grid grid-cols-3">
      <HomepageImage/>
      <HomepageImage/>
      <Clock expireOn={WEDDING_DATE}/>
    </div>
  );
};