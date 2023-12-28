import { Nav } from "@/components/organisms/Nav";
import { ContentWrapper } from "@/components/atoms/layout/ContentWrapper";
import { Main } from "@/components/atoms/layout/Main";
import { HomepageCard } from "@/components/molecules/HomepageCard";

export default function Home() {
  return (
    <ContentWrapper>
      <Nav />
      <Main>
        <HomepageCard />
      </Main>
    </ContentWrapper>
  );
};