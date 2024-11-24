export const IconMenu = ({ handler }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-menu-3 md:hidden"
      onClick={handler}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 6h10" />
      <path d="M4 12h16" />
      <path d="M7 12h13" />
      <path d="M4 18h10" />
    </svg>
  );
};