import { useContext } from 'react';
import { TaskAddContext } from '../contexts/TaskAddProvider';

const useTasks = () => {
  const context = useContext(TaskAddContext);
  if (context === undefined)
    throw new Error('TaskAddContext was used outside of the TaskAddProvider');
  return context;
};

export default useTasks;
