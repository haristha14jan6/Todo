const TodoItem = ({ todo, setTodos }) => {
  // Toggle completion
  const toggleComplete = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete todo
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="flex justify-between items-center bg-white p-2 mb-2 shadow rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={deleteTodo}
        className="text-red-500 font-bold hover:text-red-700"
      >
        ✖
      </button>
    </div>
  );
};

export default TodoItem;
