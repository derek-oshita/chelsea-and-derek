import { CardContainer } from "@/components/atoms/layout/CardContainer";

export const RSVPCard = () => {
  const ID = 'rsvp';
  return (
    <CardContainer id={ID}>
      <section className="bg-white h-full flex justify-center items-center">
        <article className="font-primary text-center md:text-left text-dark tracking-widest">
          <h1 className="text-lg p-4">COMING SOON...</h1>
        </article>
      </section>
    </CardContainer>
  );
};