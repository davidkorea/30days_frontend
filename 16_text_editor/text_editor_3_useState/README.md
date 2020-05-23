# text_editor useState

## version1
```javascript
import React, {useState} from 'react'
import './Editor.css'

const Editor = ()=>{
    const [size, setsize] = useState(30);
    const [align, setalign] = useState('left');
    return (
        <div className="editor flex flex-col border-2 bg-indigo-100">
            <textarea 
            style={{fontSize:size, textAlign:align}}
            className="w-full h-64 p-4 outline-none resize-none"></textarea>
            <div className="options flex w-48 justify-between m-2 select-none">
                <div onClick={()=>setsize(20)} className="sm">aa</div>
                <div onClick={()=>setsize(30)} className="md">aA</div>
                <div onClick={()=>setsize(40)}  className="lg">AA</div>
                <div onClick={()=>setalign('center')} className="middle">三</div>
                <div onClick={()=>setalign('left')} className="left">←</div>
                <div onClick={()=>setalign('right')} className="right">→</div>
            </div>
        </div>
    )
}

export default Editor
```

## version2
```javascript
import React, { useState } from 'react';
import {AlignCenter, AlignLeft, AlignRight} from 'react-feather'
function Editor(){
    const [size, setSize] = useState(20);
    const [align, setAlign] = useState('left');
    return(
        <div className="editor w-64 h-64 shadow">
            <div className="input h-56 p-1 font-thin">
                <textarea 
                    style={{fontSize:size,textAlign:align}}
                    className="text h-56 w-full p-2 resize-none outline-none"></textarea>
            </div>
            <div className="actions mt-1 border-t-2 cursor-pointer select-none flex justify-around">
                <div className="sm" onClick={()=>setSize(20)}>aa</div>
                <div className="md" onClick={()=>setSize(30)}>aA</div>
                <div className="lg" onClick={()=>setSize(40)}>AA</div>
                <div className="left" onClick={()=>setAlign('left')}><AlignLeft /></div>
                <div className="center" onClick={()=>setAlign('center')}><AlignCenter /></div>
                <div className="right" onClick={()=>setAlign('right')}><AlignRight /></div>
            </div>
        </div>
    )
}

export default Editor
```




