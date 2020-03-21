import React from 'react'

function Progress({currTime, totalTime}){
    return(
        <div className="progress">
            <div className="bar flex h-1 bg-indigo-500 mt-4">
                <div 
                    style={{width: currTime / totalTime * 100 + '%' }}
                    className="go bg-red-200"></div>
                <div className="dot rounded-full w-3 h-3 -mt-1 bg-red-400"></div>
            </div>
            <div className="time flex mt-1 text-gray-500 font-light justify-between">
                <div className="cur">{currTime}s</div>
                <div className="all">{totalTime}s</div>
            </div>

        </div>
    )
}

export default Progress