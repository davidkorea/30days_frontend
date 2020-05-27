import React, { useContext } from 'react';
import {GlobalContext} from '../contexts/GlobalContext'
import TodoItem from './TodoItem'

export default function DeleteList(){
    const {todoList} = useContext(GlobalContext);

    return(
        <div className="deletelist border-2 p-3">
        {
            todoList.map(v=>{
                if(v.deleted){
                    return <TodoItem key={v.id} id={v.id} item={v}></TodoItem>
                }
            })
        }            
        </div>
    )
}