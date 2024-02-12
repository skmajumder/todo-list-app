import TaskNav from '../components/TaskNav';
import useTasks from '../hooks/useTasks';

const TaskCommonInfo = ({ taskNumber = 0 }) => {
  const { handleFilterByPriority } = useTasks();

  return (
    <>
      <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10">
        <TaskNav />
      </div>
      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row lg:flex-row">
        <p className="block cursor-pointer text-sm font-medium text-slate-700">
          {taskNumber}
        </p>
        <div className="flex items-center justify-center gap-10">
          {/* Dropdown menu for filtering by priority */}
          <label htmlFor="priorityFilter" className="text-slate-700">
            Filter by Priority:
          </label>
          <select
            id="priorityFilter"
            onChange={(e) => handleFilterByPriority(e.target.value)}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm
                  focus:border-sky-500 focus:outline-none
                  focus:ring-0 focus:ring-sky-500
                  disabled:border-slate-200 disabled:bg-slate-50
                  disabled:text-slate-500 disabled:shadow-none"
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TaskCommonInfo;
