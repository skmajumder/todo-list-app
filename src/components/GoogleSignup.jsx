import { useNavigate } from 'react-router-dom';

const GoogleSignup = ({ onSubmit }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => onSubmit(navigate)}
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      Continue with Google
    </button>
  );
};

export default GoogleSignup;
