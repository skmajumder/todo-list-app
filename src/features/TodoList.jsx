import useTasks from '../hooks/useTasks';
import Task from './Task';

const TodoList = () => {
  const { allTodoList } = useTasks();

  // * Reverse the order of the tasks (latest task first)
  const reversedTodoList = [...allTodoList].reverse();

  const totalTasks = allTodoList.length;

  // * Calculate the number of completed tasks
  const completedTasks = allTodoList.filter(
    (task) => task.isTaskCompleted,
  ).length;

  // * Calculate the number of not completed tasks
  const notCompletedTasks = totalTasks - completedTasks;

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
          Total task: {totalTasks} | Completed: {completedTasks} | Not
          Completed: {notCompletedTasks}
        </p>
      </div>
      <div className="grid items-stretch gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {reversedTodoList.map((todo) => (
          <Task task={todo} key={todo.id} />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
