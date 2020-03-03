import React from 'react'
import './Content.css'

function Content(){
    return (
        <div className="content flex flex-col flex-shrink-0 p-1 mt-2 mb-3 w-64 rounded-lg shadow-lg bg-gray-200 overflow-hidden">
            <div className="pic shadow-md">
            </div>
            <div className="status text-gray-500 text-xs font-light ml-2 -mt-6">3位好友已读</div>
            <div className="title font-bold text-gray-900 mt-2 ml-2">Tiny AI</div>
            <div className="detail font-light text-gray-700 ml-2">Lorem ipsum, dolor</div>
        </div>
    )
}
export default  Content