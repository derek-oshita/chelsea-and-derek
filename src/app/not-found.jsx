import { Nav } from "@/components/organisms/Nav";
import { ContentWrapper } from "@/components/atoms/layout/ContentWrapper";
import { Main } from "@/components/atoms/layout/Main";

export default function NotFound () {
  return(
    <ContentWrapper>
      <Nav />
      <Main>
        <div id="not-found" className="flex flex-col justify-center h-screen w-screen">
          <div className="text-center w-screen"><h3 className="font-primary text-white md:text-6xl lg:text-7xl tracking-widest">404</h3></div>
          <div className="text-center w-screen"><h3 className="font-primary text-white md:text-6xl lg:text-7xl tracking-wider">NOT FOUND</h3></div>
        </div>
      </Main>
    </ContentWrapper>
  );
};