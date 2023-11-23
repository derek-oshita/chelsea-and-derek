import NavItemCell from "@/components/atoms/NavItemCell";


export default function Nav({ children }) {
  const navItems = [
    {
      id: 'home',
      title: 'Home',
      linkTo: ''

    },
    {
      id: 'when-and-where',
      title: 'When and Where',
      linkTo: 'when-and-where'

    },
    {
      id: 'rsvp',
      title: 'RSVP',
      linkTo: 'rsvp'
    },
  ];


  return (
    <nav className="flex">
      <div className="container mx-auto">
          This is our logo
      </div>
      <div className="container flex mx-auto">
        { navItems.map(({ id, linkTo, title}) => {
          return (
            <NavItemCell
              key={id}
              linkTo={linkTo}
              title={title}
            />
          );
        }) }
      </div>
    </nav>
  );
}