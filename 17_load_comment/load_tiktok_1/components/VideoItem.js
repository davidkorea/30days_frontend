import React from 'react'
import {Play} from 'react-feather'

function VideoItem(props){

    return (
        <div className="videoitem border-gray-900 text-white flex items-end"
            style={{backgroundImage: props.value.src, backgroundColor:'black', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}
        >
            <div className="count m-2 flex text-xs items-center">
                <Play size="14" />
                <div className="num ml-1">{props.value.count}</div>
            </div>
        </div>
    )
}

export default VideoItem