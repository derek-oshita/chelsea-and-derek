import Image from "next/image";

export default function Loading() {
  return (
    <div className="container w-full h-full flex justify-center items-center">
      <Image
        src="/geometric_loading.svg"
        alt="geometric"
        width={0}
        height={0}
        sizes="20vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}