import React, { useState } from 'react';
import TodoList from './TodoList';
import Button from './Button';

// Main component for the to-do app
const TodoApp = () => {
  const [newTask, setNewTask] = useState(''); // newTask state to hold the input value
  const [tasks, setTasks] = useState([]); // state to hold the list of tasks

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
