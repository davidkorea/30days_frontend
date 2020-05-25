import React from 'react';

function Intros(){
    return(
        <div className="intros">
            <div className="name  flex items-center">
                <div className="cover-img w-32 h-32 rounded"></div>
                <div className="text w-64 ml-2 ">
                    <div className="title text-xl text-white">Rick and Morty</div>
                    <div className="info text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt temporibus ut.</div>
                    <div className="date mt-1 text-sm font-bold text-gray-400">2020.05.06</div>
                </div>
            </div>
            <div className="decs mt-2 text-gray-500">
                <div className="title font-bold text-white">Description</div>
                <div className="text  text-sm">
                    Facere neque magnam voluptatibus Deserunt temporibus ut. 
                    esse enim ad ducimus fugiat nostrum error possimus.
                </div>
            </div>
        </div>
    )
}

export default Intros