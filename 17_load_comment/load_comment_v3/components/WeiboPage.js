import React, { useState } from 'react';
import './style.css'
import {Plus} from 'react-feather'
import Comment from './Comment'
function WeiboPage(){

    const [pointer, setPointer] = useState(3)

    const [commentList, setCommentList] = useState([
        {id:1, name:'david', text:'very good post!!!'},
        {id:2, name:'jimmy', text:'interesting :)'},
        {id:3, name:'john', text:'i like this article'},
        {id:4, name:'hower', text:'subscribe ok!!'},
        {id:5, name:'lucy', text:'lol'},
        {id:6, name:'hebosee', text:'6666666666'},
        {id:7, name:'sanlata', text:'emm...'},
    ])

    return (
        <div className="weibopage shadow-lg border-2 border-indigo-100 rounded-lg p-3 select-none">
            <div className="main w-full">
                <div className="author p-1 flex items-center justify-between border-b-2 border-indigo-100">
                    <img className="w-12 h-12 rounded-full shadow border-indigo-100 border-2" src="https://i.pravatar.cc/100" />
                    <div className="name ml-5 text-xl">david</div>
                    <div className="subscribe w-16 h-8 rounded-full border-2 border-indigo-100 shadow bg-indigo-400
                                    flex justify-center items-center text-white">
                        <div className="icon"><Plus size="16" /></div>
                        <div className="text text-xs">关注</div>
                    </div>
                </div>
                <div className="image mt-2 w-full h-40 rounded shadow-md"></div>
                <div className="text mt-3 font-light text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, 
                    possimus sapiente? Excepturi ullam laboriosam labore dolore eveniet totam numquam 
                    optio dicta in accusantium. 
                </div>
            </div>
            <div className="comments mt-3">
                <div className="title flex border-b-2 border-indigo-100">
                    <div className="text">Comments</div>
                    <div className="count ml-1 text-sm">( {pointer>commentList.length? commentList.length:pointer} / {commentList.length} )</div>
                </div>
                <div className="list mt-2 h-40 overflow-scroll">
                    {
                        commentList.slice(0,pointer).map(v=><Comment value={v} key={v.id}></Comment>)
                    }
     
                    <div onClick={()=>setPointer(pointer+3)}
                        className="btn mt-2 text-center text-gray-500">
                        {pointer>=commentList.length? '': 'Load more...'}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WeiboPage