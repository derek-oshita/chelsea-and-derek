import NavItemCell from "@/components/atoms/NavItemCell";
import NavLogo from "@/components/atoms/NavLogo";
import NavList from "@/components/molecules/NavList";

// https://tw-elements.com/docs/standard/navigation/sidenav/

export default function Nav() {


  return (
    <nav
      id="sidenav-1"
      className="absolute left-0 top-0 z-[1035] h-full w-1/4 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
      data-te-sidenav-position="absolute"
    >
      <NavLogo/>
      <NavList/>
    </nav>
  );
}