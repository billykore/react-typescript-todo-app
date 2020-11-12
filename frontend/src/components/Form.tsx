import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../interfaces/Todo';
import addIcon from '../assets/svgs/add_icon.svg';

interface FormProps {
  text: string;
  setText: (text: string) => void;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const Form: React.FC<FormProps> = ({ text, setText, todos, setTodos }) => {
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    if (text === '') return;
    const todo: Todo = { _id: uuidv4(), text }
    e.preventDefault();
    setTodos([todo, ...todos]);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleTextChange} value={text} type="text" placeholder="Tambah Aktifitas.." id="item" />
      <button type="submit" id="add">
        <img src={addIcon} alt="" />
      </button>
    </form>
  )
}

export default Form;
