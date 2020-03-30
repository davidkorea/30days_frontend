import React, { Component } from 'react'
import * as Icon from 'react-feather'

function TodoItem(props){

    return (
        <div style={props.state? {backgroundColor:"#434B60"} :{}}  
            className="todo-item m-2 flex p-2 items-center justify-center rounded-lg h-12 bg-gray-800 border-2 border-gray-600 select-none">
            
            <div className="check" onClick={()=>props.check(props.idx)} >
            {props.state
                ? <Icon.CheckCircle size={25} className="text-orange-400 ml-1 "></Icon.CheckCircle>
                : <Icon.Circle size={25} className="text-orange-400 ml-1"></Icon.Circle>
            }
            </div>


            <div style={props.state? {textDecoration:"line-through white"} :{}} 
                className="text w-4/5 ml-5 text-orange-200 text-xl font-thin truncate"
            >{props.item}</div>

            <Icon.Trash2
                onClick={()=>props.del(props.idx)}
                size={15} className="del text-gray-400 ml-6"
            ></Icon.Trash2>
        </div>
    )
}

export default TodoItem