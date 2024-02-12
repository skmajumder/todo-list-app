import { taskNavigation } from '../constants';
import LinkButton from './LinkButton';

const TaskNav = () => {
  return (
    <>
      {taskNavigation.map((navLink) => (
        <LinkButton
          key={navLink.id}
          to={navLink.link}
          extraclass="rounded-lg border border-[#FF4F5A] px-5 py-2 text-sm text-[#FF4F5A] duration-300 ease-in hover:bg-[#ff4f5be1] hover:text-white focus:outline-none focus:ring focus:ring-[#ff4f5bbf] active:bg-[#ff4f5be1]"
        >
          {navLink.title}
        </LinkButton>
      ))}
    </>
  );
};

export default TaskNav;
