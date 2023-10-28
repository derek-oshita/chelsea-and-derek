import NavItemCell from "@/components/atoms/navItemCell";


export default function Nav({ children }) {
    const navItems = [
        {
            title: 'Home',
            linkTo: ''

        },
        {
            title: 'When and Where',
            linkTo: 'when-and-where'

        },
        {
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
                { navItems.map(({ linkTo, title}) => {
                    return (
                        <NavItemCell
                            linkTo={linkTo}
                            title={title}
                        />
                    );
                }) }
            </div>
        </nav>
    );
}