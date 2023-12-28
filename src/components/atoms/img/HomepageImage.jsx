import Image from "next/image";

export default function HomepageImage() {
  return (
    <Image
      src="/hero1.jpeg"
      alt="derek-and-chelsea"
      width={500}
      height={500}
      priority={true}
      style={{ objectFit: 'contain' }}
    />
  );
}