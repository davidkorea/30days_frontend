import React  from 'react'
import * as Icon from 'react-feather'

function Items(props){
    return (
        <div className="items flex-col m-1 text-xl">
            <div style={props.checked? {backgroundColor:'rgb(91, 84, 136)'} : {}}  className="item flex justify-start items-center p-2 w-full h-12 bg-indigo-700 rounded-lg">
                <div onClick={()=>props.handleClick(props.idx)} className="check select-none">
                        {/* 前面的()不能写参数，否则不用点击，就会触发事件 */}
                    {
                        props.checked ? <Icon.CheckCircle  color="orange"></Icon.CheckCircle>  : <Icon.Circle color="orange"></Icon.Circle>
                    }
                </div>
                <div style={props.checked? {textDecoration:'line-through'} : {}} className="content ml-4 text-gray-400 truncate">
                    {props.content}
                </div>
                <div onClick={()=>props.handleDelete(props.idx)} className="del m-1">
                    <Icon.Trash2 size={15}></Icon.Trash2>
                </div>
            </div>
        </div>
    )
}

export default Items