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
