'use client';

import { useRef, useState } from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
// https://dev.to/tuasegun/submitting-custom-form-data-to-google-sheets-via-react-js-19al

export const RSVPForm = () => {
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    first: '',
    last: '',
  });

  const formRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current) })
      .then(() => {console.log("SUCCESSFULLY SUBMITTED");})
      .catch(err => console.log(err));
  };
  
  return (
    <section className="card-section w-full max-w-xs">
      <div className="w-full max-w-xs h-4/5">
        <form method="post" ref={formRef} name="google-sheet" className="bg-white px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="font-primary block text-xs text-dark tracking-widest mb-2" htmlFor="first">
              FIRST NAME
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first" name="first" type="text" />
          </div>
          <div className="mb-6">
            <label className="font-primary block text-xs text-dark tracking-widest mb-2" htmlFor="last">
              LAST NAME
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="last" name="last" type="text" />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};