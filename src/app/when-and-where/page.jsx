import { Nav } from "@/components/organisms/Nav";
import { ContentWrapper } from "@/components/atoms/layout/ContentWrapper";
import { Main } from "@/components/atoms/layout/Main";
import { WhenAndWhereCard } from "@/components/molecules/WhenAndWhereCard";

export default function WhenAndWhere() {
  return(
    <ContentWrapper>
      <Nav />
      <Main>
        <WhenAndWhereCard />
      </Main>
    </ContentWrapper>
  );
};