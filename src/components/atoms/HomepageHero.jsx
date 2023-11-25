import Image from "next/image";

export default function HomepageHero() {
  return (
    <div className="container h-full w-full xxs:columns-1 sm:columns-3 p-4">
      <div className="container w-full h-full">
        <Image
          src="/hero1.jpeg"
          alt="geometric"
          width={300}
          height={300}
          priority={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="container xxs:hidden sm:block  w-full h-full">
        <Image
          src="/hero1.jpeg"
          alt="geometric"
          width={300}
          height={300}
          priority={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="container xxs:hidden sm:block  w-full h-full">
        <Image
          src="/hero1.jpeg"
          alt="geometric"
          width={300}
          height={300}
          priority={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}