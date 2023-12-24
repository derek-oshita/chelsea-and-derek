import NavItemCell from "@/components/atoms/NavItemCell";
import NavLogo from "@/components/atoms/NavLogo";
import NavList from "@/components/molecules/nav/NavList";

// https://tw-elements.com/docs/standard/navigation/sidenav/

export default function Nav() {


  return (
    <>
      {/* top nav */}
      {/*<nav id="topnav" className="xxs:block sm:hidden w-full bg-black">*/}
      {/*  Some items here*/}
      {/*</nav>*/}
      {/* side nav */}
      <nav id="side-nav" className="xxs:hidden sm:block h-full w-1/4 bg-white">
        <NavLogo/>
        <NavList/>
      </nav>
    </>
  );
}