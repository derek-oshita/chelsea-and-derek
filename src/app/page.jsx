import Nav from "@/components/molecules/Nav";
import HomepageHero from "@/components/atoms/HomepageHero";

export default function Home() {
  return (
    <main>
      <section className="flex">
        <Nav/>
        <HomepageHero />
      </section>
    </main>
  );
};