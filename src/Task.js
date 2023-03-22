
const Task = (props) => {
    return (
        <div className="task"
        style = {{backgroundColor: props.completed ? 'lightgreen' : 'white'}}
        >

            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)} className='btnwrong'>X</button>
            <button onClick={() => props.completeTask(props.id)} className='btncomplete'>Complete</button>
        </div>
          
    )
}

export default Task