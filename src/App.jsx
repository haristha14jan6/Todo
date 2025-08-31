import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Add new todo
  const addTodo = () => {
    if (task.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">My Todo App</h1>

      {/* Input + Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          className="border rounded p-2 w-64"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

