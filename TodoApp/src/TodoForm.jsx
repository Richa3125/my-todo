import React from 'react'
import { useState } from 'react';
function TodoForm({onAddTodo}) {
     const [inputValue, setInputValue] = useState({});
     const handleInputChange = (value) => {
    
            setInputValue({id:value,content:value,checked:false});
        }
        const handleFormSubmit=(event)=>{
            event.preventDefault();
            onAddTodo(inputValue);
            setInputValue({id:"",content:"",checked:false});
        }
  return (
  <section className='form'>
                 <form onSubmit={handleFormSubmit}>
                     <div>
                         <input style={{ color: "black" }}
                             type="text"
                             onChange={(event) => handleInputChange(event.target.value)}
                             className='todo-input'
                             autoComplete="off"
                             placeholder="Type your task"
                             value={inputValue.content}
                         />
 
                     </div>
                     <div>
                         <button className='todo-btn' type='submit'>Add Task</button>
                     </div>
                 </form>
             </section>
  )
}

export default TodoForm