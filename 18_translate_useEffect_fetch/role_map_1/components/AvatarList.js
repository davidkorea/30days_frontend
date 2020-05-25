import React from 'react';

function AvatarList(props){
    return(
        <div className="avatarlist mt-2">
            {props.children}
        </div>
    )
}

export default AvatarList