import React from 'react'

const Todo = ({todo,removeTodo,completeTodo}) => {

  return (
    <div>
        
      <div className='todo-list' >
      <h1>Lista de Tarefas</h1>

        {todo.map((todo)=>(
        <div className='todo' key={todo.id} style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
            <div>
                <p >{todo.text}</p>
                <p className='Categoria'>
                ({todo.category})
                </p>
            </div>

            <div>   
                <button className='complete' onClick={()=>completeTodo(todo.id)}>Completar</button>
                <button className='delete' onClick={()=>removeTodo(todo.id)}>X</button>
            </div>

            
            
            
            </div>
        ))}

    </div>
        </div>
  )
}

export default Todo
