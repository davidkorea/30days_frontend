import React, { Component } from "react";
import InputArea from './InpotArea'
import Options from './Options'

class Frame extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <InputArea></InputArea>
                <Options></Options>
            </div>
        )
    }
}
export default Frame