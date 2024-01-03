import { ContentWrapper } from "@/components/atoms/layout/ContentWrapper";
import { Nav } from "@/components/organisms/Nav";
import { Main } from "@/components/atoms/layout/Main";
import { RSVPCard } from "@/components/molecules/cards/RSVPCard";


export default function RSVP () {
  return(
    <ContentWrapper>
      <Nav />
      <Main>
        <RSVPCard />
      </Main>
    </ContentWrapper>
  );
};