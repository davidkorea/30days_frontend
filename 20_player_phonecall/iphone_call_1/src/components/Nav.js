import React from 'react'
import * as Icon from 'react-feather'

function Nav(){
    return (
        <div className="nav flex h-10 p-2  items-center justify-between">
            <div className="time text-xs ml-3">9:41</div>
            <div className="icons flex">
                <Icon.Bell size={12} className="mr-1"></Icon.Bell>
                <Icon.Wifi  size={12} className="mr-1"></Icon.Wifi>
                <Icon.Battery size={12} ></Icon.Battery>
            </div>
        </div>
    )
}

export default Nav