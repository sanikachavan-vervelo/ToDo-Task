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

    <button onClick={complete1} style={{ backgroundColor: isCompleted ? 'hotpink' : 'white', color: isCompleted ? 'white' : 'black',
  }}
>
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
