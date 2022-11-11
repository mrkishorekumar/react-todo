import React, {  useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])


  const formHandle = (e) => {
    setTodo(e.target.value)
  }

  const formSubmit = (e) => {
    e.preventDefault()
    setTodo("")
    setList((prev) => [...prev, todo])
  }

  const deleteFunction = (arrIndex) => {  
    setList((prev)=>prev.filter((val,index)=>{
      return arrIndex!==index
    }))
  }

  const complete = (e) => {
    e.target.style.textDecoration = "line-through"
  }


  return (
    <>
      <main>
        <h1>ToDo List</h1>
        <form onSubmit={formSubmit}>
          <input type="text" required placeholder='EnterTodo' value={todo} onChange={formHandle} />
          <input type="submit" value="Add" />
        </form>
      </main>
      <section>
        {
          (list.length!==0)?<table>
          <tr>
            <th>Todo</th>
            <th>Options</th>
          </tr>
          {
            list.map((val,index)=>{
              return(
                <tr key={index}>
                  <td className='todo'>{val}</td>
                  <td className='option'>
                    <button className='completed' onClick={complete}>Completed</button>
                    <button onClick={()=>deleteFunction(index)} className="delete">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </table>:<h1>You Have No Data!</h1>
        }
      </section>
    </>
  )
}

export default App