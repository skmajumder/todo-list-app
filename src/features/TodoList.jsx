import { HiMiniPencilSquare, HiTrash } from 'react-icons/hi2';
import { IoCheckbox } from 'react-icons/io5';
import useTasks from '../hooks/useTasks';

const TodoList = () => {
  const { allTodoList } = useTasks();
  
  const totalTasks = allTodoList.length;

  return (
    <section className="space-y-8 px-4 py-20">
      <div className="flex items-center justify-center gap-10">
        <button className="rounded-lg border border-[#FF4F5A] px-5 py-2 text-sm text-[#FF4F5A] duration-300 ease-in hover:bg-[#ff4f5be1] hover:text-white focus:outline-none focus:ring focus:ring-[#ff4f5bbf] active:bg-[#ff4f5be1]">
          All task
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
          Total task: {totalTasks}
        </p>
      </div>
      <div className="grid items-stretch gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col space-y-4 rounded-md border-t-8 border-t-green-500 bg-white p-4 shadow-md">
          <div>
            <h3 className="mb-1 text-base font-medium capitalize">
              Task title
            </h3>
            <p className="text-xs uppercase tracking-wider text-slate-700">
              Priority: Low
            </p>
          </div>
          <p className="mb-1 pb-3 text-sm font-normal leading-relaxed text-black">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            commonly used in the graphic, print
          </p>
          <div className="!mt-auto flex items-center justify-between border-t pt-3">
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
            <span className="text-slate-400">|</span>
            <p className="text-sm font-medium text-slate-700">
              <span className="mr-1 inline-block h-3 w-3 rounded-full border border-red-700 bg-red-700"></span>
              Uncompleted
            </p>
          </div>
        </article>

        <article className="flex flex-col space-y-4 rounded-md border-t-8 border-t-yellow-500 bg-white p-4 shadow-md">
          <div>
            <h3 className="mb-1 text-base font-medium capitalize">
              Task title
            </h3>
            <p className="text-xs uppercase tracking-wider text-slate-700">
              Priority: Medium
            </p>
          </div>
          <p className="mb-1 pb-3 text-sm font-normal leading-relaxed text-black">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="!mt-auto flex items-center justify-between border-t pt-3">
            <div className="flex items-center justify-start gap-5">
              <button type="button" title="Edit task">
                <HiMiniPencilSquare />
              </button>
              <button type="button" title="Delete task">
                <HiTrash />
              </button>
            </div>
            <span className="text-slate-400">|</span>
            <p className="text-sm font-medium text-slate-700">
              <span className="mr-1 inline-block h-3 w-3 rounded-full border border-green-700 bg-green-700"></span>
              Completed
            </p>
          </div>
        </article>

        <article className="flex flex-col space-y-4 rounded-md border-t-8 border-t-red-500 bg-white p-4 shadow-md">
          <div>
            <h3 className="mb-1 text-base font-medium capitalize">
              Task title
            </h3>
            <p className="text-xs uppercase tracking-wider text-slate-700">
              Priority: High
            </p>
          </div>
          <p className="mb-1 pb-3 text-sm font-normal leading-relaxed text-black">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print.
          </p>
          <div className="!mt-auto flex items-center justify-between border-t pt-3">
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
            <span className="text-slate-400">|</span>
            <p className="text-sm font-medium text-slate-700">
              <span className="mr-1 inline-block h-3 w-3 rounded-full border border-red-700 bg-red-700"></span>
              Uncompleted
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TodoList;
