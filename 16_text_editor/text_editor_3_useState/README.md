# text_editor useState


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
