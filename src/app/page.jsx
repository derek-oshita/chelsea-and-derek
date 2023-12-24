import Nav from "@/components/molecules/Nav";
import HomepageHero from "@/components/atoms/HomepageHero";
import { BackgroundImage } from "@/components/atoms/BackgroundImage";
import { Main } from "@/components/atoms/containers/Main";
import { Countdown } from "@/components/organisms/Countdown";

const WEDDING_DATE = new Date('2024-10-05');

export default function Home() {
  return (
    <BackgroundImage>
      <Main>
        <Nav/>

        <HomepageHero/>
        <Countdown
          expireOn={WEDDING_DATE}
        />
      </Main>
    </BackgroundImage>
  );
};