import NavItemCell from "@/components/atoms/NavItemCell";

// https://tw-elements.com/docs/standard/navigation/sidenav/

export default function Sidenav() {
  const navItems = [
    {
      id: 'home',
      title: 'HOME',
      linkTo: ''

    },
    {
      id: 'when-and-where',
      title: 'WHEN AND WHERE',
      linkTo: 'when-and-where'

    },
    {
      id: 'rsvp',
      title: 'RSVP',
      linkTo: 'rsvp'
    },
  ];

  return (
    <nav
      id="sidenav-1"
      className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
      data-te-sidenav-position="absolute">
      <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
        { navItems.map(({ id, linkTo, title}) => {
          return (
            <NavItemCell
              key={id}
              linkTo={linkTo}
              title={title}
            />
          );
        }) }
      </ul>
    </nav>
  );
}