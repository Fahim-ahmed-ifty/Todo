interface TodoListProps {
    todos: string[]
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
    handleDelete: (item: string) => void
}



const TodoList = ({todos, setTodo, handleDelete}: TodoListProps) => {




  return (
    <div className="flex flex-col items-center justify-center space-y-3" >      
        {todos.map((todo, index)  => todo.length ?  
        <div key={todo} 
        className="flex items-center justify-center gap-x-2">
           <p className="bg-green-400 w-[20rem] text-left px-2 py-3 rounded-md"
           contentEditable='true'
            onChange={(e) => setTodo(e.currentTarget.textContent ?? '')}
           > {todo}</p>
            <button onClick={() => handleDelete(todo)} className="w-10 h-10 rounded-full bg-red-400">X</button>
            </div>         
        : null)}
      </div>
  )
}

export default TodoList