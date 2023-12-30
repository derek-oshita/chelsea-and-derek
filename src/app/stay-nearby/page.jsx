import { ContentWrapper } from "@/components/atoms/layout/ContentWrapper";
import { Nav } from "@/components/organisms/Nav";
import { Main } from "@/components/atoms/layout/Main";
import { StayNearbyCard } from "@/components/molecules/cards/StayNearbyCard";

export default function StayNearby() {
  return(
    <ContentWrapper>
      <Nav />
      <Main>
        <StayNearbyCard />
      </Main>
    </ContentWrapper>
  );
};