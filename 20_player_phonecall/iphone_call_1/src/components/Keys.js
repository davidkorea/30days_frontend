import React, { Component, useRef } from 'react'
import * as Icon from 'react-feather'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Calling from './Calling'

 function Keys(props){

    // const keyRef = useRef()
    // const keyClick = (e)=>{
    //     console.log(e.target.innerHTML);
    //     const num = e.target.innerHTML
    // }

     const keyList = [1,2,3,4,5,6,7,8,9,'*',0,'#']
     return (
        <>
         <div className="nums p-1 flex flex-wrap content-start justify-center">
            {
                keyList.map((v,i)=>{
                    return <div key={i} 
                        // ref={keyRef}
                        onClick={e=>props.keyClick(e)}
                        className="key ml-2 mr-2 mt-1 mb-1 flex justify-center 
                        items-center rounded-full bg-gray-400 text-2xl border-2"
                    >{v}</div>
                })
            }
         </div>
         <div className="options -mt-2 pr-10 flex justify-end items-center">
            
            <div className="key m-4 mr-3 flex justify-center 
            items-center rounded-full bg-green-500 text-4xl border-2">
                <Icon.PhoneForwarded color={'white'} size={20} />
            </div>

            {
                props.numLength>0
                    ? <div className="del m-4">
                            <Icon.Delete onClick={props.deleteClick}  color={'gray'} size={24}></Icon.Delete>
                        </div>
                    : <div className="del m-6 p-1"></div>
            }           
         </div>
        </>
     )
 }
 export default Keys