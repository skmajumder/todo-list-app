import { logo } from '../assets';
import { footerNav, footerNavTwo } from '../constants';
import LinkButton from './LinkButton';

const Footer = () => {
  return (
    <footer className="px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-2 mb-5 md:col-span-1 md:mb-0 lg:col-span-2 lg:mb-0">
          <img src={logo} alt="Logo" className="mb-8" />
          <p className="mb-1 text-sm">DK Tech Company Uma Street</p>
          <p className="text-sm text-slate-700">Lost City, Aincard</p>
        </div>
        <div>
          <h4 className="mb-4 text-xl font-medium text-[#FF4F5A]">Menu</h4>
          <ul className="space-y-2">
            {footerNav.map((nav) => (
              <li key={nav.id}>
                <LinkButton to={nav.link} extraclass="!text-black">
                  {nav.title}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xl font-medium text-[#FF4F5A]">
            Useful Links
          </h4>
          <ul className="space-y-2">
            {footerNavTwo.map((nav) => (
              <li key={nav.id}>
                <LinkButton to={nav.link} extraclass="!text-black">
                  {nav.title}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
