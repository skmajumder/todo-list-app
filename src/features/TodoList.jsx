import { HiMiniPencilSquare, HiTrash } from 'react-icons/hi2';
import { IoCheckbox } from 'react-icons/io5';

const TodoList = () => {
  return (
    <section className="space-y-8 px-4 py-20">
      <div className="flex items-center justify-center gap-10">
        <button className="rounded-md bg-[#FF4F5A] px-5 py-2 text-sm text-white duration-300 ease-in hover:bg-[#ff4f5be1] focus:outline-none focus:ring focus:ring-[#ff4f5bbf] active:bg-[#ff4f5be1]">
          All Task
        </button>
        <button className="rounded-lg border border-[#FF4F5A] px-5 py-2 text-sm text-[#FF4F5A] duration-300 ease-in hover:bg-[#ff4f5be1] hover:text-white focus:outline-none focus:ring focus:ring-[#ff4f5bbf] active:bg-[#ff4f5be1]">
          Uncompleted
        </button>
        <button className="rounded-lg border border-[#FF4F5A] px-5 py-2 text-sm text-[#FF4F5A] duration-300 ease-in hover:bg-[#ff4f5be1] hover:text-white focus:outline-none focus:ring focus:ring-[#ff4f5bbf] active:bg-[#ff4f5be1]">
          Completed
        </button>
      </div>
      <div className="flex items-center justify-start">
        <p className="block cursor-pointer text-sm font-medium text-slate-700">
          Total task: 10
        </p>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-5">
        <div className="space-y-4 rounded-md border-t-4 border-t-green-500 bg-white p-4 shadow-md">
          <div>
            <h3 className="mb-1 text-base font-medium capitalize">
              Task title
            </h3>
            <p className="text-xs uppercase tracking-wider text-slate-700">
              Priority: Low
            </p>
          </div>
          <p className="mb-1 border-b pb-3 text-sm font-normal leading-relaxed text-black">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="flex items-center justify-start gap-5">
            <button type="button" title="Edit task">
              <HiMiniPencilSquare />
            </button>
            <button type="button" title="Delete task">
              <HiTrash />
            </button>
            <button type="button" title="Mark as complete">
              <IoCheckbox />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
