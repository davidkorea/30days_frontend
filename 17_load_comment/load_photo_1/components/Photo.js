import React,  { Component, Fragment } from "react";

class Photo extends Component{
    constructor(props){
        super(props)
    }

    render(){        
        return (            
            <div className="box w-24 h-24 mr-1 mt-1 border-2">
                <img src={this.props.src}/>
            </div>
        )
    }
}
export default Photo