import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const currentLocation = useLocation();

  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }
  if (!user) {
    return <Navigate to={'/login'} state={{ from: currentLocation }} replace />;
  }
  return children;
};

export default PrivateRouter;
