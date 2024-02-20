import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaSun } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  interface Ilink {
    href: string;
    label: string;
  }
  const links: Ilink[] = [
    {
      href: "/finance",
      label: "Finance",
    },
    {
      href: "/entertainment",
      label: "Entertainment",
    },
    {
      href: "/sports",
      label: "Sports",
    },
    {
      href: "/technology",
      label: "Technology",
    },
  ];
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 drop-shadow">
      <nav className="wrapper h-14 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <h2 className="font-[Inter] flex gap-1 items-center text-yellow-50">
              <FaSun className="text-yellow-500" />
              Sunrise News
            </h2>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div>
          <ul className="hidden lg:flex space-x-4">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  className="font-[Inter] text-white hover:text-yellow-500 transition-colors"
                  to={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <IoIosMenu
          className="block lg:hidden ml-auto text-[24px] text-white"
          onClick={() => setDropDown((prev) => !prev)}
        />
        {/* Mobile Menu */}
        {dropDown && (
          <div className="navMenu bg-blue-500 drop-shadow-sm-lg">
            <ul className="flex lg:hidden flex-col gap-4 ">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    className="font-[Inter] text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setDropDown((prev) => !prev)}
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <HiOutlineX
              onClick={() => setDropDown((prev) => !prev)}
              className="text-white absolute top-5 right-7 text-[20px]"
            />
          </div>
        )}
        <div>
          <SearchBar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
