import useTasks from '../hooks/useTasks';
import { filterTaskWithPriority } from '../utils/helper';
import Task from './Task';
import TaskCommonInfo from './TaskCommonInfo';
import TaskNotFound from './TaskNotFound';

const TodoList = () => {
  const { allTodoList, priorityFilter } = useTasks();

  const totalTasks = allTodoList.length;

  // * Reverse the order of the tasks (latest task first)
  let reversedTodoList = [...allTodoList].reverse();

  // * Calculate the number of completed tasks
  const completedTasks = reversedTodoList.filter(
    (task) => task.isTaskCompleted,
  ).length;

  // * FIlter the task based on the priority value
  reversedTodoList = filterTaskWithPriority(reversedTodoList, priorityFilter);

  // * Calculate the number of not completed tasks
  const notCompletedTasks = totalTasks - completedTasks;

  const taskNumber =
    totalTasks !== 0
      ? `Total task: ${totalTasks} | Completed: ${completedTasks} | Not
  Completed: ${notCompletedTasks}`
      : `Total task: ${totalTasks}`;

  if (totalTasks === 0) {
    return (
      <TaskNotFound>
        Task Time: Ready, Set, Go! <br /> Your Tasks Await: Seize the Day and
        Finish Strong!
      </TaskNotFound>
    );
  }

  return (
    <section className="space-y-8 px-4 py-20">
      <TaskCommonInfo taskNumber={taskNumber} />
      <div className="grid items-stretch gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {reversedTodoList.map((todo) => (
          <Task task={todo} key={todo.id} />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
