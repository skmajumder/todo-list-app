import { Outlet } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

const TaskLayout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};

export default TaskLayout;
