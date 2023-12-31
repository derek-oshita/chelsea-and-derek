import Link from 'next/link';


export const NavItemCell = ({ linkTo, title }) => {
  return (
    <Link href={`/${linkTo}`}>
      <p  className="block mt-4 lg:inline-block lg:mt-0 mr-4 font-primary text-xs text-dark tracking-widest">{title}</p>
    </Link>
  );
};