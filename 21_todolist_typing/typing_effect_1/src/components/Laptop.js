import React, { Component, useState } from 'react'
import Screen from './Screen'
import Keyboard from './Keyboard'
import Keys from './Keys'
import './style.css'

function Laptop(){

    const [input, setInput] = useState('');
    const [keyDown, setKeyDown] = useState('')
    // const [keyUp, setKeyUp] = useState('')

    const onKeyDown = (e)=>{
        console.log('onKeyDown: ',e.key);
        setKeyDown(e.key)
        if(e.key=='Enter'){
            console.log('enter');
            
            setInput(input.concat('\n'))
        }else if(e.key=='Backspace'){
            setInput(input.slice(0,-1))
            console.log('backspace');
            
        }else{
            setInput(input.concat(e.key))
        }
    }

    // const onKeyUp = (e)=>{
    //     console.log(e.key);
    //     setKeyUp(e.key)
    // }

    const onChange = (e)=>{   
        // console.log('onChange: ',e.key)     
        // setInput(e.key)
    }

    const onClick = (v)=>{
        // console.log(v.target.innerHTML);
        // console.log(input.length);
        console.log(input);
        
        let key = v.target.innerHTML
        if(key=='Enter'){
            console.log('enter');
            
            setInput(input.concat('\n'))
        }else if(key=='Backspace'){
            setInput(input.slice(0,-1))
            console.log('backspace');
            
        }else{
            setInput(input.concat(v.target.innerHTML))
        }

    }

    return (
        <div className="laptop flex flex-col justify-center items-center">
            <Screen input={input} onKeyDown={onKeyDown} onChange={e=>onChange(e)}></Screen>
            <Keyboard>
                <Keys keyDown={keyDown} onClick={v=>onClick(v)}></Keys>
            </Keyboard>
        </div>
    )
}
export default Laptop