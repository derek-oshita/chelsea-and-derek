import NavItemCell from "@/components/atoms/NavItemCell";
import NavLogo from "@/components/atoms/NavLogo";
import NavList from "@/components/molecules/NavList";

// https://tw-elements.com/docs/standard/navigation/sidenav/

export default function Nav() {


  return (
    <nav id="sidenav" className="h-full w-1/4">
      <NavLogo/>
      <NavList/>
    </nav>
  );
}