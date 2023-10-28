import Link from 'next/link';


export default function NavItemCell ({ linkTo, title }) {
    return (
        <div key={title} className="container px-4 bg-white text-black">
            <Link href={`/${linkTo}`}>{title}</Link>
        </div>
    );
};