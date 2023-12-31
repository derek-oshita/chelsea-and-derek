'use client';

export const WhenAndWhereCardText = () => {
  return (
    <section>
      <article className="font-primary text-center md:text-left text-dark tracking-widest mb-2">
        <h2 className="text-lg p-2">WHEN</h2>
        <p className="text-sm px-2 py-y tracking-wide">Saturday</p>
        <p className="text-sm px-2 py-y tracking-wide">October 5th, 2024</p>
      </article>
      <article className="font-primary text-center md:text-left text-dark tracking-widest mb-2">
        <h2 className="text-lg p-2">WHERE</h2>
        {/*<p className="text-sm px-2 py-y tracking-wide">Loma Vista Gardens</p>*/}

        <a href="https://www.lomavistagardens.com/" target="_blank" rel="noopener noreferrer" >
          <strong className="text-sm px-2 py-y tracking-wide">Loma Vista Gardens</strong>
        </a>
        <p className="text-sm px-2 py-y tracking-wide">47540 CA-1</p>
        <p className="text-sm px-2 py-y tracking-wide">Big Sur, CA 93920</p>
      </article>
    </section>
  );
};