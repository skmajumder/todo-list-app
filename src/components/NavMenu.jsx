import { useState } from 'react';
import LinkButton from './LinkButton';
import { logo } from '../assets';
import { navigationMenu } from '../constants';
import useAuth from '../hooks/useAuth';

const NavMenu = () => {
  const { user, logout } = useAuth();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white px-4 py-3">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <LinkButton to={'/'}>
            <img src={logo} alt="Logo" className="mr-2 h-auto" />
          </LinkButton>
        </div>

        <nav className="hidden space-x-4 md:flex">
          {user ? (
            <>
              {/* TODO app */}
              <LinkButton
                to={'/todo'}
                extraclass="rounded px-4 py-2 bg-[#FF4F5A] text-white hover:!text-white"
              >
                Dashboard
              </LinkButton>
              <button
                onClick={logout}
                className="rounded bg-[#FF4F5A] px-4 py-2 text-white hover:!text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {navigationMenu.map((menu) => (
                <LinkButton
                  key={menu.id}
                  to={menu.link}
                  extraclass="rounded px-4 py-2 text-[#FF4F5A]"
                >
                  {menu.title}
                </LinkButton>
              ))}
            </>
          )}
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
          {user ? (
            <>
              <LinkButton
                to={'/todo'}
                extraclass="rounded px-4 py-2 bg-[#FF4F5A] text-white hover:!text-white"
              >
                Dashboard
              </LinkButton>
              <button
                onClick={logout}
                className="rounded bg-[#FF4F5A] px-4 py-2 text-white hover:!text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {navigationMenu.map((menu) => (
                <LinkButton
                  key={menu.id}
                  to={menu.link}
                  extraclass="rounded px-4 py-2 text-black"
                >
                  {menu.title}
                </LinkButton>
              ))}
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavMenu;
