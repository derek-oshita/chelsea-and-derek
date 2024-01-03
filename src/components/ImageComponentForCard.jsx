import Image from "next/image";

export const ImageComponentForCard = ({ src, alt }) => {
  return (
    <section className="card-section">
      <Image
        src={src}
        alt={alt}
        width={450}
        height={450}
        priority
        style={{ objectFit: 'contain' }}
      />
    </section>
  );
};