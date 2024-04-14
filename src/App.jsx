import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
    return (
        <div className="w-full h-screen bg-zinc-300 p-10">
            <div className="container mx-auto flex flex-col items-center justify-center bg-zinc-200 p-10">
                <h1 className="text-center">Learn about Redux toolkit</h1>
                <AddTodo />
                <Todos />
            </div>
        </div>
    );
}

export default App;
