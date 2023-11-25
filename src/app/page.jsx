import Nav from "@/components/molecules/Nav";
import HomepageHero from "@/components/atoms/HomepageHero";
import MobileNavButton from "@/components/atoms/MobileNavButton";

export default function Home() {
  return (
    <main className="container xxs:block sm:flex max-w-full">
      <div id="button-container" className="container xxs:flex sm:hidden w-screen">
        <MobileNavButton />
      </div>
      <Nav/>
      <HomepageHero />
    </main>
  );
};