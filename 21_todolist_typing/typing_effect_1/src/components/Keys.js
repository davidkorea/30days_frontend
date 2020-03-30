import React from 'react'

function Keys(props){
    const keyList1 = ['q','w','e','r','t','y','u','i','o','p','[',']','\\']
    const keyList2 = ['a','s','d','f','g','h','j','k','l',';','"','Enter']
    const keyList3 = ['z','x','c','v','b','n','m',',','.','/','Backspace' ]

    return (
        <div className="keys flex flex-col text-xl">
            <div className="flex justify-between ">
            {
                keyList1.map((v,i)=>{
                    return <div 
                    onClick={(v)=>{props.onClick(v)}}
                    style={props.keyDown == v ? {backgroundColor:'rgb(172, 219, 248)',border:'2px solid gray'} : {}}
                    key={i} className="key flex justify-center items-center mt-8 border-2 m-1 bg-blue-300 shadow-md rounded">{v}</div>
                })
            }
            </div>
            <div className="flex justify-between mt-4">
            {       
                keyList2.map((v,i)=>{
                    return <div 
                    onClick={(v)=>{props.onClick(v)}}
                    style={props.keyDown == v ? {backgroundColor:'rgb(172, 219, 248)',border:'2px solid gray'} : {}}
                    key={i} className="key border-2 m-1 p-1 text-center bg-blue-300 shadow-md rounded">{v}</div>
                })
            }
            </div>
            <div className="flex justify-between mt-4">
            {
                keyList3.map((v,i)=>{
                    return <div 
                    onClick={(v)=>{props.onClick(v)}}
                    style={props.keyDown == v ? {backgroundColor:'rgb(172, 219, 248)',border:'2px solid gray'} : {}}
                    key={i} className="key border-2 m-1 p-1 text-center bg-blue-300 shadow-md rounded">{v}</div>
                })
            }
            </div>
        </div>
    )
}

export default Keys