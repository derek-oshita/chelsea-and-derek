import { Nav } from "@/components/organisms/Nav";
import { ContentWrapper } from "@/components/atoms/layout/ContentWrapper";
import { BackgroundVideo } from "@/components/atoms/img/BackgroundVideo";
import { Main } from "@/components/atoms/layout/Main";


export default function WhenAndWhere() {
  return(
    <ContentWrapper>
      <Nav />
      <Main>
        <BackgroundVideo />
      </Main>
    </ContentWrapper>
  );
};