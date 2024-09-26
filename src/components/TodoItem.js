import React from 'react';
import Button from './Button';

// Component to display individual todo item
const TodoItem = ({ task, onComplete, onDelete }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <Button
        text={task.completed ? 'Undo' : 'Complete'}
        onClick={() => onComplete(task.id)}
      />
      <Button text="Delete" onClick={() => onDelete(task.id)} />
    </li>
  );
};

export default TodoItem;
