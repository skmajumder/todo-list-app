import NavMenu from '../components/NavMenu';
import Main from '../components/Main';
import AddTask from '../features/AddTask';
import TodoList from '../features/TodoList';

const TaskLayout = () => {
  return (
    <>
      <NavMenu />
      <Main>
        <AddTask />
        <TodoList />
      </Main>
    </>
  );
};

export default TaskLayout;
