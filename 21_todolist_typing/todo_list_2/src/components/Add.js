import React from 'react'


function Add(props){
    return (
        <div className="add m-1 text-gray-300">
            <input autoFocus
            // value={props.input}
            onKeyDown={(e)=>props.handleKeyDown(e)}
            // onChange={(e)=>props.handleChange(e)} 
            // 获取全部输入内容, 但不能记录功能按键，如Enter,获取为undefined
            // !!!!!前面的()必须写参数(e)，否则报错未定义变量e 
            className="resize-none outline-none h-12 text-xl p-2 w-full bg-indigo-600 rounded"></input>
        </div>
    )
}

export default Add