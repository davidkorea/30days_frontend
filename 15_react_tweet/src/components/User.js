import React from 'react'

function User({user, text}){
    return (
        <div>
            <div className="name h-6 font-bold">{user}</div>
            <div className="text text-sm h-16 w-42 flex-wrap overflow-hidden text-gray-700">
                {text}
            </div>
        </div>
        
    )
}

export default User