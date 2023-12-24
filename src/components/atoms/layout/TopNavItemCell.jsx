import Link from "next/link";


export const TopNavItemCell = ({ linkTo, title }) => {
  return (
    <div className="text-sm lg:flex-grow">
      <Link href={`/${linkTo}`}>
        <p  className="font-primary text-dark tracking-widest">{title}</p>
      </Link>
    </div>
  );
};