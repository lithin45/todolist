import { useState } from 'react';
import './App.css';
import Task from './Task'

function App() {
  const [todolist, setToDoList] = useState([])
  const [newTask,setNewTask] = useState('')

  const handlChange = (event)=> {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    setToDoList([...todolist, task])
  }

  const deleteTask = (id) => {
    const newToDoList = todolist.filter((task)=> {
      return task.id !== id
    })

    setToDoList(newToDoList)

  }

  const completeTask = (id)=> {
    setToDoList (
      todolist.map((task)=> {
        if(task.id===id) {
          return {...task, completed:true}
        } else {
          return task
        }
      })
    )
  }
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handlChange}/>
        <button onClick={addTask} className='addtask'>Add Task</button>
      </div>
      <div className='list'>
        {todolist.map((task) => {
          return <Task taskName={task.taskName} id = {task.id} deleteTask={deleteTask} completeTask={completeTask} completed = {task.completed}/>
        })}
      </div>
    </div>
  );
}

export default App;
