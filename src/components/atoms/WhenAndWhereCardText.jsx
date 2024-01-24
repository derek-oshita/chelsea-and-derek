'use client';

export const WhenAndWhereCardText = () => {
  return (
    <section className="bg-white">
      <article className="font-primary text-center md:text-left text-dark tracking-widest mb-2">
        <h2 className="text-lg p-2">WHEN</h2>
        <p className="text-sm px-2 tracking-wide">Saturday</p>
        <p className="text-sm px-2 tracking-wide">October 5th, 2024</p>
      </article>
      <article className="font-primary text-center md:text-left text-dark tracking-widest mb-2">
        <h2 className="text-lg p-2">WHERE</h2>
        <a className="text-sm px-2 tracking-wide" href="https://www.lomavistagardens.com/" target="_blank" rel="noopener noreferrer" >
          Loma Vista
        </a>
        <p className="text-sm px-2 tracking-wide">Gardens</p>
        <p className="text-sm px-2 tracking-wide">47540 CA-1</p>
        <p className="text-sm px-2 tracking-wide">Big Sur, CA 93920</p>
      </article>
    </section>
  );
};