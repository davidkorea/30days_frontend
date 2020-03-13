import React, { useState, useEffect } from "react";

function Translator(){

    const [input, setinput] = useState('');
    const [result, setresult] = useState('');
    const handleKeyDown = (e)=>{
        // console.log(e.key);
        // console.log(e.target.value); // e.target时输入框元素textArea
        if(e.key == 'Enter'){
            const input = e.target.value // 获取输入之后，需要将获取到的输入内容放到state中用于render
            // console.log(input);   
            setinput(input)  
            setresult('translating...')
        }
    }

    useEffect(() => {
        const url ='https://googleapi-qeovm5m0u.now.sh/?msg=' + input
        console.log(url);
        
        fetch(url)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                let text = ''
                data.sentences.map((v,i)=>{
                    text += v.trans
                })
                // console.log(text);
                setresult(text)
            })

    });

    return (
        <div className="frame shadow-lg">
            <div className="title flex text-center bg-indigo-200">
                <div className="origin w-64">Origin</div>
                <div className="target w-64">Target</div>
            </div>
            <div className="translator border-2 flex">
                <div className="left w-64 h-64 border-r-2">
                    <textarea 
                    // onKeyDown={(e)=>{handleKeyDown(e)}}
                    onKeyDown={handleKeyDown}
                    className="w-full p-4 h-full resize-none outline-none"></textarea>
                </div>   
                <div className="right w-64 h-64">
                    <textarea 
                    value={result}
                    readOnly
                    className="w-full p-4 h-full resize-none outline-none"></textarea>
                </div>   
            </div>
        </div>
    )
}

export default Translator
