import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { todoContext } from './context'
import { TodoForm, TodoItem } from './components';


function App() {
  const [todos, setTodos] = useState([{
    id: uuidv4(),
    task: "demo",
    isDone: false
  }
  ]);

  const addTodo = (task) => {
    setTodos((prev) => [...prev, { id: uuidv4(), task: task, isDone: false }])
  }

  const editTodo = (id, task) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: task }
      } else {
        return todo
      }
    }))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id))
  }

  const isCompleted = (id) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      } else {
        return todo
      }
    }))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (
    <todoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, isCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div  key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </todoContext.Provider>
  )
}

export default App
