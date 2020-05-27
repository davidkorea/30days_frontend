import React, { useContext } from 'react';
import {GlobalContext} from '../contexts/GlobalContext'

export default function TodoItem(props){
    const {handleFinish} = useContext(GlobalContext);
    return(
        <div className={`w-64 mb-3 p-2 shadow 
            ${props.item.finished? 'bg-gray-300 line-through':''}`}
            onClick={()=>{handleFinish(props.id)}}
        >
            {props.item.text}
        </div>
    )
}