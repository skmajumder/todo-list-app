import TaskNav from '../components/TaskNav';

const TaskCommonInfo = ({ taskNumber = 0 }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-10">
        <TaskNav />
      </div>
      <div className="flex items-center justify-start">
        <p className="block cursor-pointer text-sm font-medium text-slate-700">
          {taskNumber}
        </p>
      </div>
    </>
  );
};

export default TaskCommonInfo;
