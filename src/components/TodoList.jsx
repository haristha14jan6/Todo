import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="w-72">
      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))
      )}
    </div>
  );
};

export default TodoList;
