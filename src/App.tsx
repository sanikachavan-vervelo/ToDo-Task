import React ,{useState,ChangeEvent, type FC} from 'react'
import {ITask} from './interface'
import './App.css'
import TodoTask from './components/TodoTask'

const App: FC = () => {
  const[task,setTask] = useState("");
  const[deadline,setdeadline] = useState<number>(0);
  const[todo,settodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    if(event.target.name === "task"){
      setTask(event.target.value)
      }
    else{
      setdeadline(Number(event.target.value))
    }
  };

  const addTask = (): void =>{
    const newTask = {taskName:task,deadline:deadline};
      settodo([...todo,newTask])
      setTask("")
      setdeadline(0);
      
  }

 const completeTask = (taskNameToDelete:string):void => {
    settodo(todo.filter((task) =>{
     return task.taskName !== taskNameToDelete
     } 
  ))
 }

  return (
    <div className='App'>
      <div className="header">
        <input className='input1' type="text" placeholder='add task' name='task' value={task} onChange={handleChange} required/>
        <input className='input1' type="number" placeholder='Date To complete task' name='deadline' value={deadline} onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todolist">
        {todo.map((task:ITask,key:number)=>{
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  )
}
export default App;