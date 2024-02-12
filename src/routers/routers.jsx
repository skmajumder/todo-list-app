import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import Error from '../ui/Error';
import Home from '../ui/Home';
import TaskLayout from '../ui/TaskLayout';
import TodoList from '../features/TodoList';
import CompletedList from '../features/CompletedList';
import InCompletedList from '../features/InCompletedList';
import Login from '../features/Login';
import Signup from '../features/Signup';
import PrivateRouter from './PrivateRouter';

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
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
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
        element: (
          <PrivateRouter>
            <TodoList />
          </PrivateRouter>
        ),
      },
      {
        path: '/todo/completed',
        element: (
          <PrivateRouter>
            <CompletedList />
          </PrivateRouter>
        ),
      },
      {
        path: '/todo/not-completed',
        element: (
          <PrivateRouter>
            <InCompletedList />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
