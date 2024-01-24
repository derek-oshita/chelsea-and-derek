import Link from 'next/link';

export const NavItemCell = ({ id, title, linkTo }) => {
  const isRegistry = id === 'registry';
  if (isRegistry) {
    return (
      <a href={linkTo} target="_blank" rel="noopener noreferrer" >
        <p  className="font-primary block mt-4 mr-4 text-xs tracking-wider2 lg:text-xs lg:inline-block lg:mt-0 xl:text-sm xl:tracking-widest 4xl:text-xl ">{title}</p>
      </a>
    );
  } else {
    return (
      <Link href={`/${linkTo}`}>
        <p  className="font-primary block mt-4 mr-4 text-xs tracking-wider2 lg:text-xs lg:inline-block lg:mt-0 xl:text-sm xl:tracking-widest 4xl:text-xl ">{title}</p>
      </Link>
    );
  }
};