import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"

export function TasksList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        
        async function loadTaks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTaks();

    }, [])
    
    return (
    <div>
      <h1>Task List</h1>
      <div>
        {tasks.map(task => (
            <div key={task.id}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
        ))}      
      </div> 
      
    </div>
  )
}
