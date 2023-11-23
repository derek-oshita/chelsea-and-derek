import Link from 'next/link';


export default function NavItemCell ({ linkTo, title }) {
  return (
    <div key={title} className="container p-4">
      <Link href={`/${linkTo}`}>
        <p  className="font-nav text-xs text-dark tracking-widest">{title}</p>
      </Link>
    </div>
  );
};