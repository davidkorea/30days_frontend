import React from 'react';
import TodoItem from './TodoItem'

function TodoList(props){
    return(
        <div className="todolist pt-5 p-2 border-2 border-b-0 flex flex-col items-start justify-start overflow-scroll">
            { props.children }
        </div>
    )
}

export default TodoList