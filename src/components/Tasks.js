import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../features/tasks/tasksSlice';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => dispatch(removeTask(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
