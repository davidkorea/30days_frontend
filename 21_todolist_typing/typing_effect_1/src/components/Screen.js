import React, { useState, useEffect } from 'react'
// import *  as Icon from 'react-feather'

function Screen(props){

    const [cursorBlink, setCursorBlink] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setCursorBlink(!cursorBlink)
        }, 200);
    },[cursorBlink])

    return (
        <div className="screen bg-gray-800 border-2 border-gray-600 p-6 shadow-lg">
            <textarea autoFocus
                readOnly // 取消显示默认的光标闪烁
                value={cursorBlink? props.input + '|' : props.input }
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
                onChange={e=>props.onChange(e)}
                className="input outline-none resize-none w-full h-full bg-gray-800 text-gray-200 text-lg"
            ></textarea>
            <div className="logo text-xs text-center text-gray-500">MacBook Pro</div>
        </div>
    )
}

export default Screen
