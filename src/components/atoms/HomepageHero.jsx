import Image from "next/image";

export default function HomepageHero() {
  return (
    <div className="container h-full w-full columns-2">
      <div className="container w-full">
        <Image
          src="/hero1.jpeg"
          alt="geometric"
          width={0}
          height={0}
          priority={true}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="container w-full">
        <Image
          src="/hero2.jpg"
          alt="geometric"
          width={0}
          height={0}
          priority={true}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}