import useTasks from '../hooks/useTasks';
import { filterTaskWithPriority } from '../utils/helper';
import Task from './Task';
import TaskCommonInfo from './TaskCommonInfo';
import TaskNotFound from './TaskNotFound';

const InCompletedList = () => {
  const { allTodoList, priorityFilter } = useTasks();

  // * Reverse the order of the tasks (latest task first)
  const reversedTodoList = [...allTodoList].reverse();

  let notCompletedTasks = reversedTodoList.filter(
    (task) => task.isTaskCompleted !== true,
  );

  // * FIlter the not Completed task based on the priority value
  notCompletedTasks = filterTaskWithPriority(notCompletedTasks, priorityFilter);

  const totalTasks = allTodoList.length;

  // * Calculate the number of completed tasks
  const completedTasksNuber = allTodoList.filter(
    (task) => task.isTaskCompleted,
  ).length;

  // * Calculate the number of not completed tasks
  const notCompletedTasksNumber = totalTasks - completedTasksNuber;

  const taskNumber =
    totalTasks !== 0
      ? `Total task: ${totalTasks} | Not Completed: ${notCompletedTasksNumber}`
      : `Total task: ${totalTasks}`;

  if (!notCompletedTasksNumber) {
    return (
      <TaskNotFound>All task are completed 🚀, add new tasks.</TaskNotFound>
    );
  }

  return (
    <section className="space-y-8 px-4 py-20">
      <TaskCommonInfo taskNumber={taskNumber} />
      <div className="grid items-stretch gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {notCompletedTasks.map((todo) => (
          <Task task={todo} key={todo.id} />
        ))}
      </div>
    </section>
  );
};

export default InCompletedList;
