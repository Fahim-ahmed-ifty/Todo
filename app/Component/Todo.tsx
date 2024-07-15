import React, { FormEvent } from 'react';

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
}

const Todo = ({ todo, setTodo, handleSubmit }: TodoProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-auto w-screen bg-black p-5'>
      <div className='flex flex-col space-y-3 w-full max-w-md bg-green-800 rounded-lg shadow-lg p-4'>
        <form className='flex items-center space-x-2 text-white' onSubmit={handleSubmit}>
          <label htmlFor='title' className='p-1 text-lg font-semibold'>Title:</label>
          <input
            type='text'
            id='title'
            className='px-2 py-1 border rounded w-full bg-transparent focus:outline-none'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className='bg-cyan-600 px-3 py-1 rounded-md' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Todo;
