import { Clock } from "@/components/organisms/Clock";
import { WEDDING_DATE } from "@/data";

export const HomepageCardText = () => {
  return (
    <section>
      <article>
        <Clock expireOn={WEDDING_DATE} />
      </article>
      <article className="xxs:p-8 xs:py-0 md:p-8 font-primary text-center md:text-left xxs:text-xs lg:text-sm tracking-widest">
        <p>{WEDDING_DATE.toLocaleDateString()}</p>
        <p>BIG SUR, CA</p>
      </article>
    </section>
  );
};