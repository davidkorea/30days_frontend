import React from 'react';

function TabBar(props){
    return(
        <div className="tabbar flex justify-center items-center select-none cursor-pointer">
            {props.children}
        </div>
    )
}

export default TabBar