import React from 'react';
import {BarChart, Wifi, BatteryCharging, Menu, UserPlus, User} from 'react-feather'

function AuthorInfo(){
    return(
        <div className="top authorinfo bg-gray-900 text-white">
            <div className="top-bg h-32">
                <div className="statusbar pt-3 pl-6 pr-6 text-xs font-bold flex justify-between items-center">
                    <div className="time">21:36</div>
                    <div className="icons flex">
                        <div className="signal mr-2"><BarChart size="17" /></div>
                        <div className="wifi mr-2"><Wifi size="18" /></div>
                        <div className="battary"><BatteryCharging size="18" /></div>
                    </div>
                </div>
                <div className="menubar flex justify-end mr-3 mt-1">
                    <div className="menuicon w-8 h-8 rounded-full flex items-center justify-center">
                        <Menu size="16" />
                    </div>
                </div>
            </div>

            <div className="author-main -mt-8 p-3">
                <div className="option-btns flex">
                    <img src="https://i.pravatar.cc/100?u=5" className="avatar w-20 h-20 rounded-full border-4 border-gray-900" />
                    <div className="btns flex mt-8 ml-2 text-xs text-gray-400">
                        <div className="edit w-40 h-8 mr-1 text-center bg-gray-800 flex justify-center items-center">编辑资料</div>
                        <div className="add w-20 h-8 bg-gray-800 flex justify-center items-center">
                            <UserPlus size="16" />
                            <div className="ml-2"> 加好友</div>
                        </div>
                    </div>
                </div>
                <div className="name-id">
                    <div className="name text-xl font-extrabold">David.kor</div>
                    <div className="id text-xs pb-2 border-b-2 border-gray-800">抖音号: 87654321</div>
                </div>
            </div>

            <div className="author-details pl-3">
                <div className="intro font-light text-sm">AOW</div>
                <div className="tags mt-2 text-xs flex text-gray-600">
                    <div className="gender flex items-center bg-gray-800 pl-1 pr-1">
                        <User size="12" color="teal" />
                        <div className="ml-1">男</div>
                    </div>
                    <div className="add ml-2 flex items-center bg-gray-800 pl-2 pr-2">+增加年龄、学校等标签</div>
                </div>
                <div className="indice mt-2 flex text-gray-500 text-sm">
                    <div className="likes flex items-center">
                        <div className="num text-white">50</div>
                        <div className="ml-1 font-thin">获赞</div>
                    </div>
                    <div className="focus ml-4 flex items-center">
                        <div className="num text-white">279</div>
                        <div className="ml-1 font-thin">关注</div>
                    </div>
                    <div className="fans ml-4 flex items-center">
                        <div className="num text-white">28</div>
                        <div className="ml-1 font-thin">粉丝</div>
                    </div>
                    <div className="friends ml-4 flex items-center">
                        <div className="num text-white">2</div>
                        <div className="ml-1 font-thin">好友</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthorInfo