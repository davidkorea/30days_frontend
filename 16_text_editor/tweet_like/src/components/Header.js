import React, { Component } from "react";

class Header extends Component{
    render(){
        return (
            <div className="header flex w-64 justify-between">
                <div className="time ml-2">9:51</div>
                <div className="signal mr-2">⚘ ✆</div>
            </div>
        )
    }
}

export default Header