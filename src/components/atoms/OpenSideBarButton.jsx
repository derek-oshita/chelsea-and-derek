export default function OpenSideBarButton() {
  return (
  // <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  //     <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  //         <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2"/>
  //     </svg>
  //     <span>Download</span>
  // </button>


    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      data-te-sidenav-toggle-ref
      data-te-target="#sidenav-1"
      aria-controls="#sidenav-1"
      aria-haspopup="true"
    >
      <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"/>
        </svg>
      </span>
    </button>
  );
};