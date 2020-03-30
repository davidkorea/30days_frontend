import React, { Component, useState } from 'react'
import './todo.css'
import TodoItem from './TodoItem'


function Todolist(){

    const dataList = [
        {item:'get up at 6am',state:false},
        {item:'take a shower',state:false},
        {item:'have breakfast',state:false},
        {item:'take subway',state:true},
        {item:'arrive at office',state:false},
    ]

    const [todolist, setTodolist] = useState(dataList);

    const handleKeyDown = (e) => {
        if(e.key == 'Enter' && e.target.value){
            console.log(e.target.value);
            setTodolist(todolist.concat({item:e.target.value, state:false}))
            e.target.value = ''
        }
    }

    const check = (idx)=>{
        // console.log(!todolist[idx].state);   
        const result = [...todolist]        
        result[idx].state = !result[idx].state
        setTodolist(result)
    }

    const del = (idx)=>{
        // console.log(todolist[idx]);
        const result = [...todolist]        
        result.splice(idx,1)
        // console.log(result);
        setTodolist(result)
    }

    return (
        <div className="frame shadow-lg flex flex-col rounded-lg">
            <div className="todolist">
                {todolist.map((v,i)=>(
                  <TodoItem key={i} item={v.item} state={v.state} idx={i} check={check} del={del}></TodoItem>
                ))}
            </div>
            <div className="input w-full mt-6">
                <input 
                    onKeyDown={handleKeyDown}
                    // onKeyDown={e=>handleKeyDown(e)}
                    className="w-full h-10 p-2 text-2xl rounded-lg bg-gray-700 text-gray-300 outline-none" 
                    type="text"
                />
            </div>
        </div>
    )
}

export default Todolist