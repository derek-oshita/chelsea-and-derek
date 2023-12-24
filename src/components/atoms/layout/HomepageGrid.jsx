import HomepageHero from "@/components/atoms/img-components/HomepageHero";
import { Clock } from "@/components/organisms/Clock";

const WEDDING_DATE = new Date('2024-10-05');

export const HomepageGrid = () => {
  return(
    <div className="grid grid-cols-3">
      <HomepageHero/>
      <HomepageHero/>
      <Clock expireOn={WEDDING_DATE}/>
    </div>
  );
};