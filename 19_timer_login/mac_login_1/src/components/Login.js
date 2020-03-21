import React, { Component, useState, useEffect } from 'react'
import './Login.css'

function Login(){

    const [result, setResult] = useState('');
    const [count, setCount] = useState(3);
    const [style, setStyle] = useState({});

    const handleClick = () => {
            setCount(t=>t-1)
    }

    useEffect(() => {
        if(count != 3){
            setStyle({animation: "0.4s linear 1s 1 normal swing"})
            setTimeout(() => {
                setStyle({})
            }, 1500);
        }
        if(count == 0){
            setResult('please contact admin to reset your pw.')
        }

    }, [count]);

    return (
        <div className="frame w-full h-full flex flex-col justify-center items-center">
            <div className="img w-32 h-32 rounded-full border-2 shadow-lg"></div>
            <div className="name mt-8 text-gray-300">david</div>
            <div style={style} className="input mt-8 flex">
                <input 
                    autoFocus
                    onFocus={()=>setResult('')}
                    className="pw rounded outline-none p-1 text-gray-200" type="password"/>
                <button 
                    onClick={()=>handleClick()}
                    className="btn rounded-full w-10 h-10 ml-4 text-gray-400">→</button>
            </div>
            <div className="result text-gray-300 mt-4">{result}</div>
        </div>
    )
}

export default Login