import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/favicon2.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-teal-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-8" src={Icon} alt="Tux" />
              <span className="text-white text-lg font-bold ml-2 hidden md:block">
                Switch to Linux
              </span>
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-teal-600 px-3 py-2 rounded-md text-lg font-bold"
            >
              &#9776;
            </button>
          </div>
          <div
            className={`md:hidden ${
              showMenu ? "block" : "hidden"
            } absolute inset-x-0 top-16 bg-teal-500 text-center`}
          >
            <div className="text-lg">
              <Link
                to="/"
                className="block py-2 px-4 text-white hover:bg-teal-600"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 px-4 text-white hover:bg-teal-600"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-4 text-white hover:bg-teal-600"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:flex md:items-center">
            <Link
              to="/"
              className="text-white text-lg font-bold ml-4 hover:bg-teal-600 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg font-bold ml-4 hover:bg-teal-600 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg font-bold ml-4 hover:bg-teal-600 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
