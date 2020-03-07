import React, { Component } from "react";
import Options from './Options'

class InputArea extends Component{
    constructor(props){
        super(props)
        this.state = {
            content:'',
            size:'',
            align:''          
        }
    }

    handleChange(){
        var input = document.getElementById('input')
        var content = input.value
        // console.log(input.value);
        this.setState({
            content:content,
        })
    }

    handleStyle(attri){
        var key = Object.keys(attri)[0]
        var value = attri[key]
        // console.log(key);
        // console.log(value);
        if(key=='size'){
            this.setState({
                size: value,
            })
        }else if(key=='align'){
            this.setState({
                align: value
            })
        }
    }

    render(){
        return ( 
            <div>
                <textarea 
                    id="input"
                    style={{fontSize:this.state.size, textAlign:this.state.align}}
                    onChange={()=>this.handleChange()}
                    value={this.state.content}
                    className="w-64 p-2 shadow-lg border-2 border-blue-500 h-40 outline-none resize-none"
                    ></textarea>
                <Options
                    handlestyle={(attri)=>{this.handleStyle(attri)}}
                ></Options>
            </div>
        )
    }
}

export default InputArea