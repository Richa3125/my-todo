import React, { useEffect, useState } from 'react'
import "./Todo.css"
import { MdCheck, MdDeleteForever } from "react-icons/md";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
const todoKey = "reactTodo"
function Todo() {

    const [task, setask] = useState(() => {
        const rawTodos = localStorage.getItem(todoKey);
        if (!rawTodos) return [];
        return JSON.parse(rawTodos);
    });

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (!content) return;
        // if (task.includes(inputValue)) return;

        const contentmatch = task.find((curTask) => curTask.content === content)
        if (contentmatch) return;

        setask((prev) => [...prev, { id: id, content: content, checked: checked }]);


    }

    localStorage.setItem(todoKey, JSON.stringify(task));

    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value)
        setask(updatedTask)
    }
    const handleClearTodoData = () => {
        setask([]);
    }
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;

            }
        });
        setask(updatedTask);
    };
    return (
        <section className='todo-container'>
            <header>
                <h1>Stay Organized , Stay Ahead With Your... </h1>
                <div className='date'><TodoDate /></div>
                
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <TodoList key={curTask.id} data={curTask.content} checked={curTask.checked} onHandleDeleteTodo={handleDeleteTodo}
                                onHandleCheckedTodo={handleCheckedTodo} />
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}

export default Todo;
