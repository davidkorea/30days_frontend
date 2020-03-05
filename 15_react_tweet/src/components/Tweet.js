import React from 'react'
import './Tweet.css'

function Tweet({comment, retweet, like, share, children}) {
    return (
        <div className="tweet border-b-2 w-64 h-32 m-2 p-1 flex-shrink-0 flex justify-start">
            <div className="avatar flex-shrink-0 w-12 h-12 rounded-full"></div>
            <div className="content ml-4 flex flex-col w-30">
                {children}

                <div className="icons h-6 flex mt-1 font-light text-gray-600 text-xs">
                    <div className="comment w-10 m-1">@ {comment}</div>
                    <div className="retweet w-10 m-1 ">∞  {retweet}</div>
                    <div className="like w-10 m-1 ">♡ {like}</div>
                    <div className="share w-10 m-1">↻ {share}</div>
                </div>
            </div>
        </div>
    )
}

export default Tweet