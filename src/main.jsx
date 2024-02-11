import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TaskAddProvider from './contexts/TaskAddProvider';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './routers/routers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>,
);
