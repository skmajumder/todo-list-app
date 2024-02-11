import { createContext, useState } from 'react';

export const TaskAddContext = createContext(null);

const TaskAddProvider = ({ children }) => {
  const [priority, setPriority] = useState('');

  const taskInfo = { priority, setPriority };
  return (
    <TaskAddContext.Provider value={taskInfo}>
      {children}
    </TaskAddContext.Provider>
  );
};

export default TaskAddProvider;
