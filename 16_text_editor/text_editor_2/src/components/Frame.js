import React,{ Component } from "react";
import Title from './Title'
import Button from './Button'
import TextArea from './TextArea'
import Options from './Options'

class Frame extends Component{
    constructor(props){
        super(props)
        this.state = {
            themeColor: ''
        }
    }

    handleClick(color){
        this.setState({
            themeColor:color
        })
    }

    changeStyle(fontsize,align){
        console.log(fontsize,align);
        
        this.setState({
            fontSize:fontsize,
            align:align
        })
    }
    render(){
        return (
            <div className="frame w-64 h-56 bg-teal-300 flex flex-col justify-center items-center">
                {/* <Title themeColor={this.state.themeColor}></Title>
                <Button handleClick={(color)=>this.handleClick(color)}></Button> */}
                <TextArea 
                fontSize={this.state.fontSize} 
                align={this.state.align}></TextArea>
                <Options 
                fontSize={this.state.fontSize} 
                align={this.state.align}
                changeStyle={(fontsize,align)=>this.changeStyle(fontsize,align)}></Options>
            </div>
        )
    }
}
export default Frame
