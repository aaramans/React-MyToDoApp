import React, {useState} from 'react'
import TodoForm from './todoForm'
import Task from './task'
import { render } from '@testing-library/react'

const NoTasks = () => {
    return (
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Hurray!</h4>
            <p>No tasks for today. Enjoy your day!</p>
            <hr/>
            <p class="mb-0">Add a task if you need to.</p>
        </div>
    )
}

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const addTask = task =>{
        if(!task.taskName || /^\s*$/.test(task.taskName)){
            return;
        }
        const newTasks = [...tasks, task];
        setTasks(newTasks);
    };
    const updateTaskStatus = (indx,status) => {
        let newstatus;
        switch (status) {
            case 'new': newstatus = 'inprogress'; break;
            case 'inprogress': newstatus = 'complete'; break;
            case 'complete': newstatus = 'new'; break;
            default:newstatus = 'new'; break;
        }
        tasks[indx].status = newstatus;
        setTasks([...tasks]);
    };
    const taskDelete = indx => {
        tasks.splice(indx, 1);
        setTasks([...tasks]);
    };
    const taskEdit = task => {
        console.log('task', task);
    };
    const displayComp = tasks => {
        if (tasks.length) {
            return <Task
                tasks={tasks}
                updateTaskStatus={updateTaskStatus}
                taskDelete={taskDelete}
                taskEdit={taskEdit} />;
        } else {
            return <NoTasks />;
        }
    };
    return (
        <div>
            <h2>Todos List</h2>
            <TodoForm onSubmit={addTask} />
            {displayComp(tasks)}
        </div>
    )
}

export default TaskList;