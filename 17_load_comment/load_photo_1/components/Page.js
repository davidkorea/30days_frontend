import React, { Component } from "react";
import './Page.css'

class Page extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="phone flex flex-col justify-start items-center rounded-lg shadow-lg bg-indigo-100">
                <div className="page flex flex-col justify-center items-center">
                    <div className="header flex mt-6 items-center justify-start">
                        <div className="img">
                            <img className="rounded-full ml-2 w-12 h-12 border-2 border-yellow-600" src="https://i.pravatar.cc/100"/>
                        </div>
                        <div className="figures flex ml-10 justify-between">
                            <div className="posts flex flex-col justify-center items-center font-light">
                                <div className="digits">608</div>
                                <div className="font-semibold text-sm text-gray-800">Posts</div>
                            </div>

                            <div className="followers ml-2 flex flex-col justify-center items-center font-light">
                                <div className="digits">11.2 K</div>
                                <div className="font-semibold text-sm text-gray-800">Followers</div>
                            </div>
                                
                            <div className="following ml-2 flex flex-col justify-center items-center font-light">
                                <div className="digits">336</div>
                                <div className="font-semibold text-sm text-gray-800">Following</div>
                            </div>
                        </div>
                    </div>

                    <div className="profile mt-4 p-2 text-sm flex flex-col justify-start self-start">
                        <div className="name text-lg text-gray-800 font-bold">David</div>
                        <div className="job font-light">Photographer</div>
                        <div className="blog flex font-hairline">
                            <div className="item">▤ My blog: </div>
                            <div className="url ml-2 text-blue-700">@david.blog</div>
                        </div>
                        <div className="other flex font-hairline">
                            <div className="item">📷More info: </div>
                            <div className="info ml-2 text-blue-700">www.david.com</div>
                        </div>
                    </div>

                    <div className="photo flex flex-col">
                        <div className="btn flex justify-between text-3xl text-gray-800">
                            <div className="btn1 w-1/2 border-b-2 border-gray-500 text-center">◩</div>
                            <div className="btn2 w-1/2 text-center">◪</div>
                        </div>
                        <div className="photolist mt-2 flex flex-wrap content-start overflow-scroll">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page