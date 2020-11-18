import React from 'react';
import Todo from '../interfaces/Todo';
import removeIcon from '../assets/svgs/remove_icon.svg';
import completeIcon from '../assets/svgs/done_icon.svg';
import Axios from 'axios';

interface TodoItemProps {
  todo: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {
  function handleRemoveButton(): void {
    Axios.delete(`http://localhost:5000/api/todos/${todo._id}`)
      .then(response => setTodos(response.data))
      .catch((err: string) => console.error(err));
  }

  function handleCompleteButton(): void {
    Axios.patch(`http://localhost:5000/api/todos/${todo._id}`)
      .then(response => setTodos(response.data))
      .catch((err: string) => console.log(err));
  }

  return (
    <li>
      {todo.text}
      <div className="buttons">
        <button className="remove" onClick={handleRemoveButton}>
          <img src={removeIcon} alt="Remove" />
        </button>
        <button className="complete" onClick={handleCompleteButton}>
          <img src={completeIcon} alt="Complete" />
        </button>
      </div>
    </li>
  )
}

export default TodoItem;
