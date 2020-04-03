import React, { useContext } from 'react'
import {GlobalContext} from '../contexts/GlobalContext'

function Add(){
    const {onKeyDown} = useContext(GlobalContext)
    return (
        <div className="add mt-4 mb-2">
            <input className='w-full border-t-2 outline-none p-2' type="text"
            placeholder="plan your today here."
                onKeyDown={(e)=>onKeyDown(e)}
            />
        </div>
    )
}

export default Add