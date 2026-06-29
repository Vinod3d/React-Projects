import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([
        {id: 1, text: "Learn React", completed: false},
        {id: 2, text: "Learn Redux", completed: false},
        {id: 3, text: "Learn Context API", completed: false},
    ]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        const newTodoObj = {id: Date.now(), text: newTodo, completed: false};
        setTodos([...todos, newTodoObj]);
        setNewTodo("");
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo)=> todo.id !== id));
    }
  return (
    <div>
        <h2>Todo List</h2>
        <form onSubmit={addTodo}>
            <input type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} placeholder="Enter your todo" />
            <button type="submit">Add Todo</button>
        </form>
        <ul>
            {todos.map((todo)=> (
                <li key={todo.id}>{todo.text} <button onClick={()=>deleteTodo(todo.id)}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList