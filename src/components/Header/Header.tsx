import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
}

interface HeaderProps {
  title: string;
  links: LinkItem[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <nav className="fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-8">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="md:order-2 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links?.map((link, id) => (
              <li className="uppercase" key={id}>
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse md:order-3"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Stoor
          </span>
        </Link>
        <div className="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="uppercase focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md dark:text-gray-400"
          >
            Cart
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;