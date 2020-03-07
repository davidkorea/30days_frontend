import React, { Component } from "react";
import Tweet from './Tweet'
class Page extends Component{
    render(){
        return (
            <div style={{width:'270px',height:'520px'}} className="list overflow-scroll flex flex-col rounded-lg">
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
            </div>
        )
    }
}

export default Page