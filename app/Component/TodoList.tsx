import React, { useState } from 'react';

interface TodoListProps {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  handleDelete: (item: string) => void;
}

const TodoList = ({ todos, setTodos, handleDelete }: TodoListProps) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const handleEditClick = (index: number, todo: string) => {
    setEditIndex(index);
    setEditValue(todo);
  };

  const handleSaveClick = (index: number) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? editValue : todo));
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {todos.map((todo, index) =>
        todo.length ? (
          <div key={index} className="flex items-center justify-center gap-x-2">
            {editIndex === index ? (
              <>
                <input
                  className="bg-green-400 w-[20rem] text-left px-2 py-3 rounded-md"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  onClick={() => handleSaveClick(index)}
                  className="w-10 h-10 rounded-full bg-blue-400"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <p className="bg-green-400 w-[20rem] text-left px-2 py-3 rounded-md">{todo}</p>
                <button
                  onClick={() => handleEditClick(index, todo)}
                  className="w-10 h-10 rounded-full bg-yellow-400"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => handleDelete(todo)}
              className="w-10 h-10 rounded-full bg-red-400"
            >
              X
            </button>
          </div>
        ) : null
      )}
    </div>
  );
};

export default TodoList;
