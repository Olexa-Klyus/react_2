import {useEffect, useState} from "react";

import Todo from "./Todo/Todo";

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(value => value.json())
            .then(todos => setTodos(todos))
    }, [todos])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>)
}