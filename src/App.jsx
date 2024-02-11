import { RouterProvider } from 'react-router-dom';
import router from './routers/routers';
import TaskAddProvider from './contexts/TaskAddProvider';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <TaskAddProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: '12px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
      </TaskAddProvider>
    </>
  );
};

export default App;
