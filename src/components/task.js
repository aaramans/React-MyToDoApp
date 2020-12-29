import React, { useState } from 'react'
import { FiTrash2, FiEdit, FiPlay, FiRepeat, FiCheckCircle } from 'react-icons/fi'

function Task(props) {
    const [status, setStatus] = useState({
        status : 'new'
    });
    const setTaskClass = status => {
        switch (status) {
            case 'inprogress': return 'list-group-item list-group-item-warning';
            case 'complete': return 'list-group-item list-group-item-success';
            default : return 'list-group-item';
        }
    };
    return (
        <ul className="list-group">
            {props.tasks.map((task, index)=> (
                <li
                    className={setTaskClass(task.status)}
                    key={index}>
                    {task.taskName}
                    <span
                        className="task-delete float-right mx-2"
                        onClick={() => props.taskDelete(index)}
                        title="Delete this task">
                        <FiTrash2 />
                    </span>
                    <span
                        className="task-edit float-right mx-2"
                        onClick={() => props.taskEdit(task)}
                        title="Edit this task">
                        <FiEdit /></span>
                    <span
                        className={"task-" + task.status + " float-right mx-2"} 
                        onClick={() => props.updateTaskStatus(index, task.status)}
                        title={task.status === 'new' ? 'Start progress' : task.status === 'inprogress' ? 'Mark as complete' : 'Restart as new'}>
                        {task.status === 'new' ? <FiPlay /> : (task.status === 'inprogress' ? <FiCheckCircle /> : <FiRepeat />) }
                    </span>
                </li>)
            )}
        </ul>
    );
}

export default Task