import Image from "next/image";
import Link from "next/link";

export const NavLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          src="img/nav-logo.svg"
          alt="geometric-logo"
          width={54}
          height={54}
        />
        <span className="font-primary text-dark tracking-widest m-2 text-sm lg:text-xl 4xl:text-3xl">DEREK AND CHELSEA</span>
      </div>
    </Link>

  );
};