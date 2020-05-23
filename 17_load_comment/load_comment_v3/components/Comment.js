import React from 'react';

function Comment(props){
    return(
        <div className="comment mb-2 flex items-center text-gray-700">
            <img src={`https://i.pravatar.cc/50?u=${props.value.id*5}`} className="avatar w-8 h-8 rounded-full border-2" />
            <div className="text ml-2 w-64 text-sm truncate">{props.value.text}</div>
        </div>

    )
}

export default Comment