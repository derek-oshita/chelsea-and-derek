import Image from "next/image";
import Link from "next/link";

export const NavLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          src="/top-nav-logo.svg"
          alt="geometric-logo"
          width={54}
          height={54}
        />
        <span className="font-primary text-lg text-dark tracking-widest m-2">DEREK AND CHELSEA</span>
      </div>
    </Link>

  );
};