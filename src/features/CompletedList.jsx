import useTasks from '../hooks/useTasks';
import { filterTaskWithPriority } from '../utils/helper';
import Task from './Task';
import TaskCommonInfo from './TaskCommonInfo';
import TaskNotFound from './TaskNotFound';

const CompletedList = () => {
  const { allTodoList, priorityFilter } = useTasks();

  // * Reverse the order of the tasks (latest task first)
  const reversedTodoList = [...allTodoList].reverse();

  let completedTasks = reversedTodoList.filter(
    (task) => task.isTaskCompleted !== false,
  );

  // * FIlter the completed task based on the priority value
  completedTasks = filterTaskWithPriority(completedTasks, priorityFilter);

  const totalTasks = allTodoList.length;

  // * Calculate the number of completed tasks
  const completedTasksNuber = allTodoList.filter(
    (task) => task.isTaskCompleted,
  ).length;

  const taskNumber =
    totalTasks !== 0
      ? `Total task: ${totalTasks} | Completed: ${completedTasksNuber}`
      : `Total task: ${totalTasks}`;

  if (!completedTasksNuber) {
    return (
      <TaskNotFound>
        Not Completed Task found. <br /> Your ToDo&apos;s Miss You: Give Them
        Some Love Today! 🎉 <br /> Take Charge, Unleash Your Productivity:
        Conquer Your Tasks! 🚀
      </TaskNotFound>
    );
  }

  return (
    <section className="space-y-8 px-4 py-20">
      <TaskCommonInfo taskNumber={taskNumber} />
      <div className="grid items-stretch gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {completedTasks.map((todo) => (
          <Task task={todo} key={todo.id} />
        ))}
      </div>
    </section>
  );
};

export default CompletedList;
