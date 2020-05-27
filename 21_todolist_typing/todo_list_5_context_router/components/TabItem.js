import React, { useContext } from 'react';
import {GlobalContext} from '../contexts/GlobalContext'

export default function TabItem(props){
    const {selectedTabId,handleTabClick} = useContext(GlobalContext);
    return(
        <div className={`tabitem w-24 h-12 rounded-t-lg flex justify-center items-center
            ${selectedTabId==props.id? 'bg-indigo-400 text-white':'bg-indigo-200'}`}
            onClick={()=>handleTabClick(props.id)}
        >
            {props.name}
        </div>
    )
}