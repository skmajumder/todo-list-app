import { HiMiniPencilSquare, HiTrash } from 'react-icons/hi2';
import { IoCheckbox } from 'react-icons/io5';
import useTasks from '../hooks/useTasks';

const Task = ({ task = {} }) => {
  const { handleDeleteTask, handleTaskCompletedStatus, handleEditTask } =
    useTasks();

  const {
    id,
    title,
    description,
    priority,
    isTaskCompleted,
    taskCompletedOn,
    isEdit,
  } = task;

  // * derived state
  const taskStatus = isTaskCompleted ? `Completed` : 'Not Completed';
  const taskStatusColor = isTaskCompleted
    ? 'border-green-700 bg-green-700'
    : 'border-red-700 bg-red-700';

  let taskPriorityColor = '';
  if (priority === 'low') {
    taskPriorityColor = 'border-t-green-500';
  } else if (priority === 'medium') {
    taskPriorityColor = 'border-t-yellow-500';
  } else if (priority === 'high') {
    taskPriorityColor = 'border-t-red-500';
  }

  const editTask = isEdit ? 'Updated' : '';

  return (
    <article
      className={`flex flex-col space-y-4 rounded-md border-t-8 bg-white p-4 shadow-md ${taskPriorityColor}`}
    >
      <div>
        <h3 className="mb-1 flex items-center justify-between text-base font-medium capitalize">
          <span>{title}</span>
          {isEdit && <span className="text-xs text-slate-500">({editTask})</span>}
        </h3>

        <p className="mb-1 text-xs uppercase tracking-wider text-slate-700">
          Priority: {priority}
        </p>
        {isTaskCompleted && (
          <>
            <p className="text-xs uppercase tracking-wider text-slate-700">
              Completed on {taskCompletedOn}
            </p>
          </>
        )}
      </div>
      <p className="mb-1 pb-3 text-sm font-normal leading-relaxed text-black">
        {description}
      </p>
      <div className="!mt-auto flex items-center justify-between border-t pt-3">
        <div className="flex items-center justify-start gap-5">
          {!isTaskCompleted && (
            <button onClick={() => handleEditTask(id)} title="Edit task">
              <HiMiniPencilSquare />
            </button>
          )}
          <button onClick={() => handleDeleteTask(id)} title="Delete task">
            <HiTrash />
          </button>
          {!isTaskCompleted && (
            <>
              <button
                onClick={() => handleTaskCompletedStatus(id)}
                title="Mark as complete"
              >
                <IoCheckbox />
              </button>
            </>
          )}
        </div>
        <span className="text-slate-400">|</span>
        <p className="text-sm font-medium text-slate-700">
          <span
            className={`mr-1 inline-block h-3 w-3 rounded-full border ${taskStatusColor}`}
          ></span>
          {taskStatus}
        </p>
      </div>
    </article>
  );
};

export default Task;
