import Task from "./Task"


const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <>
     {tasks.map((task, index)=>{
            return (
                <Task key={index} task={task} onDelte={onDelete} onToggle={onToggle}/>
            )
        
     })}
    </>
  )
}

export default Tasks