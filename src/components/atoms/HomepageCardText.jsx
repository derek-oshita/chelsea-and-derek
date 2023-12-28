import { Clock } from "@/components/organisms/Clock";

export const HomepageCardText = () => {
  const WEDDING_DATE = new Date('2024-10-05');
  return (
    <section>
      <article>
        <Clock expireOn={WEDDING_DATE} />
      </article>
      <article className="xxs:p-8 xs:py-0 md:p-8 font-primary text-center md:text-left xxs:text-xs lg:text-sm tracking-widest">
        <p>OCTOBER 5, 2024</p>
        <p>BIG SUR, CA</p>
      </article>
    </section>
  );
};