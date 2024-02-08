import { Link, useNavigate } from 'react-router-dom';

const LinkButton = ({ children, to, extraclass }) => {
  const navigate = useNavigate();

  const linkBtnClass =
    'text-sm text-[#FF4F5A] hover:text-[#ff4f5be2] hover:underline';

  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={linkBtnClass}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={`${extraclass} ${linkBtnClass}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
