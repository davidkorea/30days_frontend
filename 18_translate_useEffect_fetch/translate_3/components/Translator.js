import React, { useState, useEffect } from 'react';

function Translator(){

    const [origin, setOrigin] = useState('');
    const [target, setTarget] = useState('');

    useEffect(() => {
        // console.log('hi');
        const url = "https://googleapi-qeovm5m0u.now.sh/?msg=" + origin
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.sentences);
            let str = ''
            data.sentences.map(v=>str += v.trans)
            // data.sentences.map(v=>setTarget(v.trans))
            // console.log(str);
            setTarget(str)
        })
    }, [origin]);

    return (
        <div className="translator flex border-2">
            <div className="input w-64 h-64">
                <textarea onChange={(e)=>{setOrigin(e.target.value)}} className="w-full h-full resize-none p-2 outline-none" ></textarea>
            </div>
            <div className="w-1 h-full divide-indigo-100"></div>            
            <div className="translate w-64 h-64">
                <textarea className="w-full h-full resize-none p-2" value={target} disabled></textarea>
            </div>
        </div>
    )
}

export default Translator