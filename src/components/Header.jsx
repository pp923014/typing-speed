import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the mobile menu is open
  const menuRef = useRef(null); // Ref to menu for detecting outside clicks
  const buttonRef = useRef(null); // Ref for the hamburger button

  // Close the menu when clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside of the menu and button, close the menu
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    
    // Cleanup on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Typing Speed Test
        </Link>
        <div className="relative md:flex md:items-center md:space-x-6">
          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} ref={menuRef}>
            <ul className="bg-white shadow-md w-full">
              <li className="mx-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li className="mx-4">
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li className="mx-4">
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
