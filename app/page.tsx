"use client"; // Add this line at the top

import React, { FormEvent, useEffect, useState } from 'react';
import Todo from './Component/Todo';
import TodoList from './Component/TodoList';

const Page = () => {
  const [todos, setTodos] = useState<string[]>(['']);
  const [todo, setTodo] = useState<string>('')
  const [showTodo, setShowTodo] = useState<boolean>(false);


  const handleToggleButtonClick = () => {
    setTodo('')
    setShowTodo(!showTodo);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(todo) {
      setTodos([...todos, todo])
      setShowTodo(!showTodo)
    }
  }

  
const handleDelete = (item: string) => {
  const allTodos = todos.filter(todo => todo !== item)
  console.log(allTodos)
  setTodos(allTodos)
}


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-8'>Hello, Fahim Ahmed Ifty</h1>
      <button
        className='bg-blue-500 hover:bg-blue-700 transition text-white px-3 py-1.5 rounded-md mb-8'
        onClick={handleToggleButtonClick}
      >
        <span className='font-bold'>{showTodo ? 'Hide' : 'Add Todo +'}</span>
      </button>
      {!todos.length ? <p className='font-bold text-xl'>No toods</p> : <TodoList {...{todos, handleDelete, setTodo, setTodos}} />}
      {showTodo && <Todo {...{todo, setTodo , handleSubmit}} />}

    </div>
  );
}

export default Page;
