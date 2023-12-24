import Image from "next/image";

export default function NavLogo() {
  return(
    <div className="container items-center pb-4">
      <div className="container w-full px-4">
        <Image
          src="/geometric_logo.svg"
          alt="geometric-logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="container text-center w-full px-4">
        <p className="font-primary text-lg text-dark tracking-widest m-1">DEREK</p>
        <p className="font-primary text-lg text-dark tracking-widest m-1">AND</p>
        <p className="font-primary text-lg text-dark tracking-widest m-1">CHELSEA</p>
      </div>
    </div>
  );
}

// https://svgsilh.com/tag/geometric-2.html