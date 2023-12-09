import React, { useState } from "react";
import {nanoid} from "nanoid"
import { GoTrash } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";


import "./style.css";
const Todo = () => {
    const[todos,setTodos]=useState([])
    const[input,setInput]=useState({
        name:"",
        id:""
    })

    const handleInput=(e)=>{
        const value=e.target.value
        setInput({
            name:value,
            id:nanoid()
        })
    }

const handleSubmit=()=>{
    input.name && setTodos([...todos,input])
    setInput({
        name:"",
        id:""
    })
}
const deleteTodos=(id)=>{
    const updateTodos=todos.filter((a)=>{
        return a.id!==id
    })
    setTodos(updateTodos)
}
const ResetAll=()=>{
    setTodos([])
}


  return (
    <div className="container">
       
     <div className="todo">
     <h1>Todo List</h1>
      <div className="task">
      <h3>You have {todos.length}</h3>
     <button onClick={ResetAll}>Reset All</button>
      </div>
     <div className="inputs">
        <input onChange={handleInput} type="text"  value={input.name} placeholder="Add your new todo"/>
        <button onClick={handleSubmit}><IoIosAdd />
</button>
         </div>
     <div className="newInput">
     {
         todos.map(item=>(
             <div key={item.id} className="todos-item">
                <h3>{item.name}</h3> <button onClick={() => deleteTodos(item.id)}><GoTrash />
</button>
            </div>
        ))
    }
     </div>
    
     </div>
    </div>
  );
};

export default Todo;
