import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function TabItem(props){
    return(
        <div className={`tabitem w-1/3 h-12 rounded-t-lg flex justify-center items-center
            ${props.selectedTabId==props.id? 'bg-indigo-400 text-white text-lg': 'bg-indigo-200'}`}
            onClick={()=>{props.handleTabClick(props.id)}}
        >
            {props.name}
        </div>
    )
}

export default TabItem