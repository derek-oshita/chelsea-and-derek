import NavItemCell from "@/components/atoms/NavItemCell";

export const TopNavList = () => {
  const navItems = [
    {
      id: 'when-and-where',
      title: 'WHEN AND WHERE',
      linkTo: 'when-and-where'

    },
    {
      id: 'stay-nearby',
      title: 'STAY NEARBY',
      linkTo: 'stay-nearby'
    },
    {
      id: 'rsvp',
      title: 'RSVP',
      linkTo: 'rsvp'
    },
  ];

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