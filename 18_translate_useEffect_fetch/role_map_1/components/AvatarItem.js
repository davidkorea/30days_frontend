import React, { useEffect, useState } from 'react';

function AvatarItem(props){

    const [avatarInfo, setAvatarInfo] = useState();
    
    useEffect(() => {
        console.log(props.url);
        fetch(props.url).then(res=>res.json()).then(data=>{
            setAvatarInfo(data)
            console.log(data);
        })
    },[props.url]); 
    // 此处必须有限制值，当且仅当传递来的url变化时，请求数据。
    // 也就是每次切换剧集，每个AvatarItem子组件，都会收到不用任务的url，根据这个url种禽请求任务数据
    // 不可以设置为空，因为当第一次加载获取数据后，就不再执行。所以在点击其他剧集，也无法获取对应的新数据

    return(
        <div className="avataritem flex h-24 bg-gray-800 rounded mb-2">
            <div style={{backgroundImage:`url(${avatarInfo&&avatarInfo.image})`}} className="avatar-img h-24 w-24 bg-gray-600"></div>
            <div className="infos w-48 ml-2 text-gray-600 text-sm flex flex-col justify-center">
                <div className="name truncate">Name: {avatarInfo&&avatarInfo.name}</div>
                <div className="species">Species: {avatarInfo&&avatarInfo.species}</div>
                <div className="gender">Gender: {avatarInfo&&avatarInfo.gender}</div>
                <div className="origin truncate">Origin: {avatarInfo&&avatarInfo.origin.name}</div>
            </div>
        </div>
    )
}
export default AvatarItem