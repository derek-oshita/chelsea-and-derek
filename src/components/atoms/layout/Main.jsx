import { BackgroundImage } from "@/components/atoms/img/BackgroundImage";

export const Main = ({ children }) => {
  return (
    <BackgroundImage>
      <main className="xxs:block sm:flex h-screen w-screen">
        {children}
      </main>
    </BackgroundImage>
  );
};