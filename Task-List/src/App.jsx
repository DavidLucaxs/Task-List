import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import './components/App.css'

function App() {
  const [todo,setTodos] = useState([
    {
      id:1,
      text:"Criar funcionalidade no sistema",
      category:"Trabalho",
      isCompleted: false
    },
    {
      id:2,
      text:"Estudar React",
      category:"Estudos",
      isCompleted: false
    }
  ])

  const AddTodo = (text,category) =>{
    console.log("TEste")
    const newTodos = [...todo,{
        id: Math.floor(Math.random()*10000),
        text,
        category,
        isCompleted:false,
    }]

    setTodos(newTodos)
}


const removeTodo = (id) =>{
  const newTodos = [...todo]
  const filteredTodos = newTodos.filter(todo =>{
    console.log(`O id da tarefa:${todo.id},Com o id procurado:${id}`)
    if(todo.id !== id){
      return todo
    }else{
      return null
    }
  })
  setTodos(filteredTodos)
}

const completeTodo = (id) =>{
  const newTodos = [...todo]
  newTodos.map((todo)=>{
    if(todo.id === id){
      todo.isCompleted = !todo.isCompleted
      todo.isCompleted ? console.log("Completa") : console.log("Nao completa")
    }
  })
  setTodos(newTodos)
}

  return (
    <div className='app'>
      <TodoForm AddTodo={AddTodo}/>
      <Todo todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
    </div>
  )
}

export default App
