import React from 'react';

function Chapters(props){
    return(
        <div className="chapters mt-2">
            <div className="title font-bold text-white">Chapters</div>
            <div className="listn flex items-center justify-start flex-wrap">
                {props.children}
            </div>
        </div>
    )
}

export default Chapters