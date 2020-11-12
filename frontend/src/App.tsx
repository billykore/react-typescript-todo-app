import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import Todo from './interfaces/Todo';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

function App() {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/api/todos')
      .then(response => setTodos(response.data))
      .catch((err: string) => console.error(err));
  }, [todos]);

  return (
    <>
      <Form text={text} setText={setText} todos={todos} setTodos={setTodos} />
      <TodoItemList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
