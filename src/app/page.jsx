import Nav from "@/components/molecules/nav/Nav";
import { BackgroundImage } from "@/components/atoms/img-components/BackgroundImage";
import { Main } from "@/components/atoms/containers/Main";
import { HomepageGrid } from "@/components/atoms/layout/HomepageGrid";
import { TopNav } from "@/components/molecules/nav/TopNav";

export default function Home() {
  return (
    <BackgroundImage>
      <TopNav />
    </BackgroundImage>
  );
};