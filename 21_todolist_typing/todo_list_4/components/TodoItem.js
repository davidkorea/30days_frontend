import React from 'react';
import {CheckCircle,Trash2, Flag, CornerUpLeft} from 'react-feather'

function TodoItem(props){
    
    return(
        <div className={`todoitem mb-3 rounded-lg shadow-md p-2 flex items-center justify-center 
             ${props.value.finished? 'text-gray-500 bg-gray-200':' text-gray-700'}`}
             onClick={()=>{props.handleFinish(props.value.id)}}
             // 由于外层设置点击finished事件，因此点击删除按钮时，也会同步出发finish事件，因为冒泡！
        >
            <div className="todo-check mr-4 select-none"
                // onClick={()=>{props.handleFinish(props.value.id)}}
            >
                {
                    props.value.finished
                        ? <CheckCircle size={16} color={'orange'} />
                        : <Flag size={16} />
                }
                
            </div>

            <div className={`todo-text truncate ${props.value.finished? 'line-through':''}`}>{props.value.text}</div>
            
            <div className="todo-del ml-3 select-none"
                onClick={()=>{props.handleDelete(props.value.id)}}
            >
                {
                    props.value.deleted? <CornerUpLeft size={15}/> :<Trash2 size={13} />
                }
                
            </div>
        </div>
    )
}

export default TodoItem