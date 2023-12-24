import { Nav } from "@/components/organisms/Nav";
import { ContentWrapper } from "@/components/atoms/layout/ContentWrapper";
import { Main } from "@/components/atoms/layout/Main";
import { HomepageContent } from "@/components/atoms/layout/HomepageContent";

export default function Home() {
  return (
    <ContentWrapper>
      <Nav />
      <Main>
        <HomepageContent />
      </Main>
    </ContentWrapper>
  );
};