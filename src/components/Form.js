import React, { useState } from 'react';
import '../stylesheets/Form.css'
import { v4 as uuidv4 } from 'uuid';

function Form(props){

    const [input, setInput] = useState("");

    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleSend = e =>{
        e.preventDefault();

        const newTodo = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTodo);
    };

    return(
        <form 
        className="form-todo"
        onSubmit={handleSend}>
            <input
                className="input-todo"
                type="text"
                placeholder="Write your todo here..."
                name="text"
                onChange={handleChange} 
            />
            <button 
            className="button-add-todo"
            >
                Add toDo
            </button>
        </form>
    );
}

export default Form;
