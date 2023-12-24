import Link from 'next/link';


export default function NavItemCell ({ linkTo, title }) {
  return (
    <div key={title} className="container w-full text-center p-4">
      <Link href={`/${linkTo}`}>
        <p  className="font-primary text-xs text-dark tracking-widest">{title}</p>
      </Link>
    </div>
  );
};