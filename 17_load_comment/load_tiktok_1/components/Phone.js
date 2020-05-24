import React from 'react';

function Phone(props){
    return(
        <div className="phone rounded shadow-md bg-gray-900">
            {props.children}
        </div>
    )
}

export default Phone