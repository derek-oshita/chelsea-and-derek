import Image from "next/image";

export default function HomepageHero() {
  return (
    <div className="grid-item-container">
      <Image
        src="/hero1.jpeg"
        alt="derek-and-chelsea"
        width={300}
        height={300}
        priority={true}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}