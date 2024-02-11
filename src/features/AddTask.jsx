import useTasks from '../hooks/useTasks';

const AddTask = () => {
  const { priority, setPriority } = useTasks();

  const handleTaskPriorityChange = (priority) => {
    setPriority(priority);
  };

  return (
    <section className="border-b py-10">
      <div>
        <h2 className="mb-7 text-center text-xl font-bold leading-tight text-black md:mb-7 md:text-3xl md:leading-tight lg:mb-7 lg:text-4xl lg:leading-tight">
          Todo Daily
        </h2>
        <div className="p-4">
          <form className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label htmlFor="task-title">
                <span className="block cursor-pointer text-sm font-medium text-slate-700">
                  Title
                </span>
                <input
                  type="text"
                  placeholder="Task title | Max length 200 characters"
                  name="task-title"
                  maxLength="200"
                  id="task-title"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
                  focus:border-sky-500 focus:outline-none
                  focus:ring-0 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  disabled:border-slate-200 disabled:bg-slate-50
                  disabled:text-slate-500 disabled:shadow-none"
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="task-description">
                <span className="block cursor-pointer text-sm font-medium text-slate-700">
                  Description
                </span>
                <input
                  type="text"
                  placeholder="Description | Max length 400 characters"
                  name="task-description"
                  maxLength="400"
                  id="task-description"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
                  focus:border-sky-500 focus:outline-none
                  focus:ring-0 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  disabled:border-slate-200 disabled:bg-slate-50
                  disabled:text-slate-500 disabled:shadow-none"
                  required
                />
              </label>
            </div>

            <fieldset className="md:col-span-2 lg:col-auto">
              <legend className="block cursor-pointer text-sm font-medium text-slate-700">
                Task Priority
              </legend>

              <div className="flex items-center justify-start space-x-4">
                {['low', 'medium', 'high'].map((value) => (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center"
                  >
                    <input
                      type="radio"
                      name="priority"
                      value={value}
                      className="mr-2 cursor-pointer"
                      checked={priority === value}
                      onChange={() => handleTaskPriorityChange(value)}
                      required
                    />
                    <span
                      className={`text-sm font-medium ${priority === value ? 'text-sky-500' : 'text-slate-700'}`}
                    >
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </span>
                  </label>
                ))}
              </div>

              <p className={`mt-1 block text-xs font-medium text-slate-500`}>
                {priority === '' ? (
                  'Select your task piority'
                ) : (
                  <>
                    Your task priority set to be{' '}
                    <span className="capitalize">{priority}</span>
                  </>
                )}
              </p>
            </fieldset>

            <div className="space-x-4">
              <button
                type="submit"
                className="rounded-md bg-[#FF4F5A] px-5 py-2 text-sm text-white duration-300 ease-in hover:bg-[#ff4f5be1] focus:outline-none focus:ring focus:ring-[#ff4f5bbf] active:bg-[#ff4f5be1]"
              >
                Add task
              </button>
              <button
                type="reset"
                className="rounded-lg border border-[#FF4F5A] px-5 py-2 text-sm text-[#FF4F5A] duration-300 ease-in hover:bg-[#ff4f5be1] hover:text-white focus:outline-none focus:ring focus:ring-[#ff4f5bbf] active:bg-[#ff4f5be1]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTask;
