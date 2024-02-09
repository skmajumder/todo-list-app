import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import Error from '../ui/Error';
import Home from '../ui/Home';
import TaskLayout from '../ui/TaskLayout';
import Todo from '../features/Todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/todo',
    element: <TaskLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/todo',
        element: <Todo />,
      },
    ],
  },
]);

export default router;
