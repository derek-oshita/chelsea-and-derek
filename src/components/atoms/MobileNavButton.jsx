// https://flowbite.com/docs/components/buttons/

export default function MobileNavButton({  }) {
  return(
    <>
      <button className="w-auto ml-auto border px-5 py-3 text-base font-medium text-center text-white rounded-full">
        <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </button>
    </>
  );
}