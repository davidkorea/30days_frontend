import React, { useContext } from 'react'
import * as Icon from 'react-feather'
import {GlobalContext} from '../contexts/GlobalContext'

function Item(props){
    const {handleCheck, handleDelete} = useContext(GlobalContext)

    return (
        <div className="item flex items-center shadow-md rounded w-full h-10 mt-2 mb-2 border-b-2 border-gray-300">
            <div 
            onClick={()=>handleCheck(props.idx)}
            className="status mr-2 ml-1">
                {
                    props.item.checked
                    ? <Icon.CheckCircle size={20} color={'orange'}></Icon.CheckCircle>
                    : <Icon.Circle size={20} color={'gray'}></Icon.Circle>
                }
            </div>
            <div
            style={props.item.delete? {textDecoration:'line-through'}:{}}
            className="content truncate text-gray-700">
                {props.item.content}
            </div>
            <div 
            onClick={()=>handleDelete(props.idx)}
            className="del ml-3">
                {
                    props.item.delete
                    ? ''
                    : <Icon.Trash2 size={15} color={'gray'} className="delicon"></Icon.Trash2>
                }
            </div>
        </div>
    )
}

export default Item