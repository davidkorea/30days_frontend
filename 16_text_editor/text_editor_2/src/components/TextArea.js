import React, { Component } from "react";

class TextArea extends Component{
    render(){
        return (
            <div>
                <textarea style={{fontSize:this.props.fontSize, textAlign:this.props.align}}
                placeholder="write something funny here..."
                className="w-56 h-40 p-2 bg-teal-100 resize-none outline-none"></textarea>
            </div>
        )
    }
}
export default TextArea