import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id : Math.floor(Math.random*10000),
            taskname : input
        });
        setInput('');
    };
    const handleChange = e =>{
        setInput(e.target.value);
    };
    return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add todo" 
                name="todotext" 
                className="todo-input" 
                value={input}
                onChange={handleChange}/>
            <button className="todo-button">Add Todo</button>
        </form>
    )
}

export default TodoForm
