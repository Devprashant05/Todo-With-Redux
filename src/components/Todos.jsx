import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <>
            <ul className="list-none w-1/2">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className="text-white">{todo.text}</div>
                        <button
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            onClick={() => dispatch(deleteTodo(todo.id))}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
