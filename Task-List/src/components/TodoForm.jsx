import React,{useState} from 'react'

const TodoForm = ({AddTodo}) => {

    const [value,setValue] = useState("")
    const [category,setCategory] = useState("")

    const HandleSubmit = (e) =>{
        e.preventDefault()

        if(!value || !category){
            console.log(`Texto:${value} e categoria:${category}`)
            console.log("Preencher todos os dados")
            return
        }
        AddTodo(value,category)
        setValue("")
        setCategory("Nenhuma")
    }



  return (
    <div className='todo-form'>
      <h2>Criar Tarefas</h2>
      <form onSubmit={HandleSubmit}>
        <input type='text' placeholder='Digite o titulo' value={value} onChange={(e)=>{
            setValue(e.target.value)
            console.log(e.target.value)}}/>
        <select value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="Nenhuma">Nenhuma</option>
            <option value="Estudos">Estudos</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Nada">Nada</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  )
}

export default TodoForm
