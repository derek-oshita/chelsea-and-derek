import Image from "next/image";

export default function HomepageImage() {
  return (

    <div className="md:w-1/2 flex md:justify-end p-8">
      <Image
        src="/hero1.jpeg"
        alt="derek-and-chelsea"
        width={500}
        height={500}
        priority={true}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}