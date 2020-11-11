import React, {useState} from 'react'
import TodoForm from './todoForm'

function TaskList() {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <h2>Todos List</h2>
            <TodoForm/>
        </div>
    )
}

export default TaskList

