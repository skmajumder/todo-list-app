import TaskNav from '../components/TaskNav';
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

  const taskNumber =
    totalTasks !== 0
      ? `Total task: ${totalTasks} | Completed: ${completedTasks} | Not
  Completed: ${notCompletedTasks}`
      : `Total task: ${totalTasks}`;

  if (totalTasks === 0) {
    return (
      <section className="space-y-8 px-4 py-20">
        <div className="flex items-center justify-center gap-10">
          <TaskNav />
        </div>
        <div className="flex items-center justify-center">
          <h2 className="mb-7 text-center text-xl font-medium leading-tight text-slate-900 md:mb-7 md:text-2xl md:leading-tight lg:mb-7 lg:text-2xl lg:leading-tight">
            Task Time: Ready, Set, Go! <br />
            Your Tasks Await: Seize the Day and Finish Strong!
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8 px-4 py-20">
      <div className="flex items-center justify-center gap-10">
        <TaskNav />
      </div>
      <div className="flex items-center justify-start">
        <p className="block cursor-pointer text-sm font-medium text-slate-700">
          {taskNumber}
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
