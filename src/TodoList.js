import React from 'react';
import TodoItem from "./TodoItem";

export default function TodoList({ todos, editTodo, deleteTodo, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
