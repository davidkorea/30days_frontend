import React, { Component } from "react";
import './Tweet.css'
class Tweet extends Component{
    constructor(props){
        super(props)
        this.state = {
            like:0,
            display:'none',
            color:''
        }
    }

    handleLike(){
        this.setState({
            like: this.state.like + 1,
            display:'block',
            color:'tomato'
        })
    }
    render(){
        return (
            <div className="box flex justify-start border-b-2">
                <div className="avatar m-2 flex-shrink-0"></div>
                <div className="main flex flex-col m-2">
                    <div className="name font-bold">david</div>
                    <div className="content h-20 w-48 break-words text-gray-700 text-sm">added 905 packages from 610 contributors and audited 9438 packages in 38.635s</div>
                    <div className="btns flex w-48 text-sm font-light select-none">
                        <div className="comment w-12 mr-1"># 18</div>
                        <div className="retweet w-12 mr-1">Ⓒ 9</div>
                        <div onClick={()=>{this.handleLike()}} 
                        style={{color:this.state.color}}
                        className="like flex w-12 mr-1">
                            ♡ 
                            <div style={{display:this.state.display,color:'black'}} className="ml-1">{this.state.like}</div>
                        </div>
                        <div className="share w-12 mr-1">↻ 33</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tweet