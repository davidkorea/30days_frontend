import React from 'react'
import * as Icon from 'react-feather'

function Footer(){
    return(
        <div className="footer p-2 flex text-gray-700 text-xs justify-between items-center">
            <div className="item flex flex-col justify-center items-center">
                <Icon.Star size={20} ></Icon.Star>
                <div className="name">个人收藏</div>
            </div>
            <div className="item flex flex-col justify-center items-center">
                <Icon.Clock size={20} ></Icon.Clock>
                <div className="name">通话记录</div>
            </div>
            <div className="item flex flex-col justify-center items-center">
                <Icon.User size={20}></Icon.User>
                <div className="name">通讯录</div>
            </div>
            <div className="item flex flex-col justify-center items-center text-blue-500 font-bold">
                <Icon.PhoneCall size={20}></Icon.PhoneCall>
                <div className="name">拨号</div>
            </div>
            <div className="item flex flex-col justify-center items-center">
                <Icon.Voicemail size={20}> </Icon.Voicemail>
                <div className="name">语音留言</div>
            </div>
        </div>
    )
}

export default Footer