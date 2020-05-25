import React from 'react';

function Phone(props){
    return(
        <div className="phone p-4 shadow rounded bg-gray-900 overflow-scroll shadow">
            {props.children}
        </div>
    )
}

export default Phone