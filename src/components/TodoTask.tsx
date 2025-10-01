import React, { useState } from 'react'
import { ITask } from '../interface'

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const complete1 = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      {task?.taskName} | {task?.deadline}

      <button onClick={complete1}>
        {isCompleted ? "Completed" : "Complete"}
      </button>

      <button
        onClick={() => {
          completeTask(task?.taskName);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
