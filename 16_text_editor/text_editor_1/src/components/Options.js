import React, { Component } from "react";

class Options extends Component{
    constructor(props){
        super(props)
    }

    render(){                
        return (
            <div className="options flex bg-blue-400 w-64 shadow-lg">
                <div
                onClick={()=>{this.props.handlestyle({size:'12px'})}}
                className="sm m-1 mr-2">aa</div>
                <div onClick={()=>{this.props.handlestyle({size:'22px'})}} 
                className="md m-1 mr-2">aA</div>
                <div onClick={()=>{this.props.handlestyle({size:'32px'})}} 
                className="lg m-1 mr-2">AA</div>
                <div onClick={()=>{this.props.handlestyle({align:'center'})}} 
                className="middle m-1 mr-2">中</div>
                <div onClick={()=>{this.props.handlestyle({align:'left'})}} 
                className="left m-1 mr-2">👈🏻</div>
                <div onClick={()=>{this.props.handlestyle({align:'right'})}} 
                className="reght m-1 mr-2">👉🏻</div>
            </div>
        )
    }
}

export default Options