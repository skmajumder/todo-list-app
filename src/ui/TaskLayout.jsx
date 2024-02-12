import NavMenu from '../components/NavMenu';
import Main from '../components/Main';
import AddTask from '../features/AddTask';
import { Outlet } from 'react-router-dom';

const TaskLayout = () => {
  return (
    <>
      <NavMenu />
      <Main>
        <AddTask />
        <Outlet />
      </Main>
    </>
  );
};

export default TaskLayout;
