import { useState } from 'react';
import Logo from './../assets/logo.svg';
import LinkButton from './LinkButton';

const NavMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  return (
    <header className="container p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <LinkButton to={'/'}>
            <img src={Logo} alt="Logo" className="mr-2 h-auto" />
          </LinkButton>
        </div>

        {/* Login and Signup Buttons */}
        <nav className="hidden space-x-4 md:flex">
          <LinkButton to={'#'} extraclass="rounded px-4 py-2 text-[#FF4F5A]">
            Login
          </LinkButton>
          <LinkButton to={'#'} extraclass="rounded px-4 py-2 text-black">
            Signup
          </LinkButton>
        </nav>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-[#FF4F5A] focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div
        id="mobile-menu"
        className={`mt-4 border border-[#FF4F5A] p-4 text-white md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}
      >
        {/* Mobile Login and Signup Buttons */}
        <nav className="flex flex-col space-y-4">
          <LinkButton to={'#'} extraclass="rounded px-4 py-2 text-[#FF4F5A]">
            Login
          </LinkButton>
          <LinkButton to={'#'} extraclass="rounded px-4 py-2 text-black">
            Signup
          </LinkButton>
        </nav>
      </div>
    </header>
  );
};

export default NavMenu;
