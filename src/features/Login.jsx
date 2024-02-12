import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import useAuth from '../hooks/useAuth';
import GoogleSignup from '../components/GoogleSignup';

const Login = () => {
  const {
    user,
    userEmail,
    userPassword,
    handleUserEmail,
    handleUserPassword,
    handleUserLogin,
    handleGoogleSignIn,
  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (user) {
    return navigate('/');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mb-4 mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
          <p className="text-center">
            Default email: example@gmail.com <br /> password: react--todo
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => handleUserLogin(e, navigate)}
        >
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="userEmail" className="sr-only">
                Email address
              </label>
              <input
                id="userEmail"
                value={userEmail}
                name="userEmail"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => handleUserEmail(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <label htmlFor="userPassword" className="sr-only">
                Password
              </label>
              <input
                id="userPassword"
                name="userPassword"
                value={userPassword}
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                onChange={(e) => handleUserPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center">
          <hr className="w-1/4 bg-gray-300" />
          <p className="mx-3 text-gray-500">Or</p>
          <hr className="w-1/4 bg-gray-300" />
        </div>

        <GoogleSignup onSubmit={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Login;
