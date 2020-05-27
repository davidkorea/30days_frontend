import React, { useContext } from 'react';
import {GlobalContext} from '../contexts/GlobalContext'
import TodoItem from './TodoItem'

export default function Openlist(){
    const {todoList} = useContext(GlobalContext);
    return(
        <div className="openlist border-2 p-3">
            {
                todoList.map(v=>{
                    if(!v.deleted){
                        return (
                            <TodoItem id={v.id} key={v.id} item={v}></TodoItem>
                        )
                    }
                })
            }            
        </div>
    )
}