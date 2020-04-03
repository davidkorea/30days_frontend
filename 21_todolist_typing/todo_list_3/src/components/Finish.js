import React, { useContext } from 'react'
import {GlobalContext} from '../contexts/GlobalContext'
import Item from './Item'
function Finish(){
    const {dataList} = useContext(GlobalContext)
    return (
        <div className="finishlist flex flex-col items-center p-2">
            {
                dataList.map((v,i)=>{
                    if(v.checked && !v.delete){
                        return <Item key={i} idx={i} item={v}></Item>
                    }
                })
            }
        </div>
    )
}

export default Finish