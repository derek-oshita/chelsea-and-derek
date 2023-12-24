import { NavItemCell } from "@/components/atoms/nav/NavItemCell";

export const NavList = ({ navItems }) => {
  return (
    <div className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="container flex justify-end lg:flex-grow">
        { navItems.map(({ id, linkTo, title }) => {
          return (
            <NavItemCell
              key={id}
              linkTo={linkTo}
              title={title}
            />
          );
        }) }
      </div>
    </div>
  );
};