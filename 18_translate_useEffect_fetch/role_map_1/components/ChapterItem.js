import React from 'react';

function ChapterItem(props){
    return(
        
        <div className="item h-4 w-6 m-1 rounded bg-gray-700 text-white text-xs 
            flex justify-center items-center cursor-pointer"
            onClick={()=>props.handleChapter(props.chapter_id)}
        >
            {props.chapter_id}
        </div>
    )
}

export default ChapterItem