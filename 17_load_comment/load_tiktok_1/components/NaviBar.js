import React from 'react';

function NaviBar(){
    return(
        <div className="bottom navibar -mt-2">
            <div className="menuitems  h-10  flex items-center justify-around text-xs text-gray-500">
                <div className="index">首页</div>
                <div className="city">同城</div>
                <div className="btn -ml-4 flex items-center">
                    <div className="left bg-gray-200 w-6 h-6 rounded-lg border-l-2 border-teal-400"></div>
                    <div className="right -ml-5 bg-gray-200 w-8 h-6 rounded-lg border-r-2 border-red-600"></div>
                    <div className="add-btn -mt-1 -ml-6 text-xl text-gray-900">+</div>
                </div>
                <div className="msg">消息</div>
                <div className="me text-white pt-2 pb-1 border-b-2 border-white">我</div>
            </div>
            <div className="iphone-line flex justify-center mt-3">
                <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    )
}

export default NaviBar