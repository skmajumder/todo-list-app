import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import Error from '../ui/Error';
import Home from '../ui/Home';

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
]);

export default router;
