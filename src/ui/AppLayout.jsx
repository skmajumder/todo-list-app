import { Outlet } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

const AppLayout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};

export default AppLayout;
