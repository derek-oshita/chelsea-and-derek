import Image from "next/image";

export const HomepageCardImage = () => {
  return (
    <section id="homepage-card-image" className="card-section">
      <Image
        src="/hero1.jpeg"
        alt="chelsea-mila-and-derek"
        width={450}
        height={450}
        priority
        style={{ objectFit: 'contain' }}
      />
    </section>
  );
};