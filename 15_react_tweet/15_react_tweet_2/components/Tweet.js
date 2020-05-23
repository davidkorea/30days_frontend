import React from 'react';
import {Heart, Share, Edit} from 'react-feather'

function Tweet(props){
    return(
        <div className="tweet m-2 mb-5 flex shadow-md rounded-md">
            <div className="left w-1/5">
                <img className="ml-2 w-12 h-12 rounded-full shadow-md" src={`https://i.pravatar.cc/50?u=${props.value.id*5}`} />
            </div>
            <div className="right w-4/5 ml-2">
                <div className="name text-lg font-bold">{props.value.name}</div>
                <div className="text mt-1 w-56 h-12 break-all overflow-hidden">{props.value.text}</div>
                <div className="icons mt-3 mb-3 pr-8 font-light flex">
                    <div className="comment w-1/3 flex items-center justify-center">
                        <Edit size="16" />
                        <div className="num ml-2">{props.value.comment}</div>
                    </div>
                    <div className="share w-1/3 flex items-center justify-center">
                        <Share size="16" />
                        <div className="num ml-2">{props.value.share}</div>    
                    </div>
                    <div 
                        onClick={()=>{props.handleLike(props.value.id)}}
                        className="like w-1/3 flex items-center justify-center">
                        <Heart size="16" color={props.value.liked? 'red':'black'} />
                        <div className="num ml-2">{props.value.like}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet