import React from 'react';

function ChapterItem(props){
    return(
        
        <div className={`item h-4 w-6 m-1 rounded bg-gray-700 text-xs 
            flex justify-center items-center cursor-pointer
            ${props.selected_id==props.chapter_id? 'text-yellow-400 text-sm': 'text-white'} `}
            onClick={()=>props.handleChapter(props.chapter_id)}
        >
            {props.chapter_id}
        </div>
    )
}

export default ChapterItem