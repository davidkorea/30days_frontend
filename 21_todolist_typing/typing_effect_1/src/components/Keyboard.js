import React from 'react'
import Keys from './Keys'

function Keyboard(props){

    return (
        <>
            <div className="keyboard flex flex-col items-center bg-gray-500 flex justify-center p-4">
                <div className="keys bg-gray-400 select-none">
                    {/* <Keys></Keys> */}
                    {props.children}
                </div>
                <div className="trackpad mt-2 w-48 h-32 bg-gray-400 shadow-inner rounded"></div>
            </div>
            <div className="bottom bg-gray-600 rounded-b flex justify-center">
                <div className="open bg-gray-400 w-32 h-1 rounded-b"></div>
            </div>
        </>
    )
}

export default Keyboard
