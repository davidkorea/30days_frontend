import React, { useState }  from 'react'
import './style.css'
import Items from './Items'
import Add from './Add'



function List(){

    const [dataList, setDataList] = useState([
        {content:'hello world', checked: false},
        {content:'hello hello', checked: true},
    ])
    const [input, setInput] = useState('');

    const handleClick = (idx)=>{
        console.log(idx);
        let list = [...dataList]  
        list[idx].checked = !list[idx].checked
        // console.log(list)    
        setDataList(list)        
    }

    // const handleChange = (e)=>{
    //     console.log(e.target.value);
    //     setInput(e.target.value)    
    // }

    const handleKeyDown = (e)=>{
        if(e.key == 'Enter'){
            console.log(e.target.value);
            setInput(e.target.value)  
            setDataList(dataList.concat({content:e.target.value,checked: false}))
            // setInput('')
            e.target.value=''
        }        
    }

    const handleDelete = (idx)=>{
        // console.log(idx);
        let list = [...dataList]
        list.splice(idx,1)
        // console.log(list);
        setDataList(list)        
    }

    return (
        <div className="frame bg-indigo-800 p-2">
            <div className="list flex flex-col">
                {
                    dataList.map((v,i)=>{
                        return <Items idx={i} 
                        handleClick={idx=>handleClick(idx)} 
                        handleDelete={idx=>handleDelete(idx)}
                        content={v.content} checked={v.checked} key={i}></Items>
                    })
                }
            </div>
            <div className="add mt-4">
                <Add input={input} handleKeyDown={e=>handleKeyDown(e)}
                    handleChange={e=>handleChange(e)}
                ></Add>
            </div>

        </div>
    )
}

export default List