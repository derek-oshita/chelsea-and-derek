import NavItemCell from "@/components/atoms/NavItemCell";

export default function NavList() {
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
  );
}