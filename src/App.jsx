import { RouterProvider } from 'react-router-dom';
import router from './routers/routers';
import TaskAddProvider from './contexts/TaskAddProvider';

const App = () => {
  return (
    <>
      <TaskAddProvider>
        <RouterProvider router={router} />
      </TaskAddProvider>
    </>
  );
};

export default App;
