import React, { createContext, useState } from 'react'
import { Database } from 'react-feather';

export const GlobalContext = createContext()

function GlobalContextProvider(props){

    const [dataList, setDataList] = useState([
        {content:'hello world', checked:false,delete:false},
        {content:'get up at 6 am', checked:true,delete:false},
        {content:'go to bed at 11 pm', checked:false,delete:false},
        {content:'learn react.js', checked:false,delete:false},
        {content:'smoke', checked:false,delete:true},
    ]);

    const onKeyDown = (e)=>{
        if(e.key=='Enter'){
            console.log(e.target.value);
            setDataList(dataList.concat( {content:e.target.value, status:'open'} ))
            e.target.value = ''
        }
    }

    const handleCheck = (idx)=>{
        // console.log(idx);
        const list = [...dataList]
        list[idx].checked = !list[idx].checked
        setDataList(list)
    }
    const handleDelete = (idx)=>{
        // console.log(idx);
        const list = [...dataList]
        list[idx].delete = !list[idx].delete
        setDataList(list)
    }

    return (
        <GlobalContext.Provider value={{dataList, onKeyDown, handleCheck, handleDelete}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider