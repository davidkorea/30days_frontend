import React from 'react';

function ContentList(props){
    return(
        <div className="middle contentlist bg-gray-900 font-light -mt-4">
            <div className="tabs flex text-gray-500  pb-1 pl-3 pr-3 text-sm">
                <div className="products w-1/3 text-center text-white pb-1 border-b-2 border-yellow-500">
                    作品 {props.count}
                </div>
                <div className="posts w-1/3 text-center">动态 23</div>
                <div className="likes w-1/3 text-center">喜欢 3869</div>
            </div>

            <div className="videoslist flex justify-start flex-wrap overflow-scroll">
                {props.children}
            </div>
        </div>
    )
}

export default ContentList