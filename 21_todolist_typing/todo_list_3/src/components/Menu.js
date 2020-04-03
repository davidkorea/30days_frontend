import React from 'react'

function Menu(props){
    return (
        <div className="menulist w-full h-10 flex mb-4 select-none">
            <div className="menu-open w-1/3">
                {props.children[0]}
            </div>
            <div className="menu-finish w-1/3">
                {props.children[1]}
            </div>
            <div className="menu-delete w-1/3">
                {props.children[2]}
            </div>
            
        </div>
    )
}

export default Menu