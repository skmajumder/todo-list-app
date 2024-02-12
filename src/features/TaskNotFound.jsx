import TaskNav from '../components/TaskNav';

const TaskNotFound = ({ children }) => {
  return (
    <section className="space-y-8 px-4 py-20">
      <div className="flex items-center justify-center gap-10">
        <TaskNav />
      </div>
      <div className="flex items-center justify-center">
        <h2 className="mb-7 text-center text-xl font-medium leading-tight text-slate-900 md:mb-7 md:text-2xl md:leading-tight lg:mb-7 lg:text-2xl lg:leading-tight">
          {children}
        </h2>
      </div>
    </section>
  );
};

export default TaskNotFound;
