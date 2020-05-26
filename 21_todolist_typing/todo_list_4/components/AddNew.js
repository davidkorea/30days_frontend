import React from 'react';
import {Plus} from 'react-feather'

function AddNew(props){
    return (
        <div className="addnew p-2 border-2 border-t-0 flex items-center">
            <input autoFocus 
                className="p-1 pr-10 w-full h-10 shadow-inner rounded border-indigo-200 border-b-2 outline-none" 
                onChange={(e)=>props.handleInput(e.target.value)}
                onKeyDown={(e)=>{props.handleKeyDown(e)}}
                value={props.newInput}
            />
            <div className="addbtn -ml-8 w-6 h-6 rounded-full text-indigo-400 border-2 border-indigo-200 
                            select-none cursor-pointer flex justify-center items-center"
                onClick={()=>props.handleAddClick()}
            >
                <Plus className="addbtn" size={16}></Plus>
            </div>
        </div>
    )
}

export default AddNew