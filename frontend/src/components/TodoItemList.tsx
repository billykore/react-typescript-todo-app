import React from 'react';
import Todo from '../interfaces/Todo';
import TodoItem from './TodoItem';

interface TodoItemListProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoItemList: React.FC<TodoItemListProps> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      {/* <Uncompleted tasks */}
      <ul className="todo" id="todo">
        {todos.map(todo => (
          <TodoItem todos={todos} setTodos={setTodos} key={todo._id} todo={todo} />
        ))}
      </ul>

      {/* Completed tasks */}
      <ul className="todo" id="completed"></ul>
    </div>
  )
}

export default TodoItemList;
