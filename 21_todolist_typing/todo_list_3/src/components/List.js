import React, { useContext } from 'react'
import Item from  './Item'
import {GlobalContext} from '../contexts/GlobalContext'


function List(){

    const {dataList} = useContext(GlobalContext)

    return (
        <div className="todolist flex flex-col items-center p-2">
            {
                dataList.map((v,i)=>{
                    if(!v.delete){
                        return <Item key={i} idx={i} item={v}></Item>
                    }
                })
            }
        </div>
    )
}

export default List