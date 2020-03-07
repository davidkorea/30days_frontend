import React, { Component } from "react";

class Options extends Component{
    render(){
        return (
            <div className="flex justify-between w-56 border-teal-400 border-2 shadow-lg bg-teal-200">
                {/* <div onClick={()=>this.props.changeStyle('12px', '')} 
                    第二个参数不能留空，否则每次都清空对齐样式*/}
                <div onClick={()=>this.props.changeStyle('12px', this.props.align)}
                className="sm m-1 mr-2">aa</div>
                <div onClick={()=>this.props.changeStyle('22px',this.props.align)}
                className="md m-1 mr-2">aA</div>
                <div onClick={()=>this.props.changeStyle('32px',this.props.align)}
                className="lg m-1 mr-2">AA</div>
                <div onClick={()=>this.props.changeStyle(this.props.fontSize,'center')} 
                className="middle m-1 mr-2">三</div>
                <div onClick={()=>this.props.changeStyle(this.props.fontSize,'left')} 
                className="left m-1 mr-2">←</div>
                <div onClick={()=>this.props.changeStyle(this.props.fontSize,'right')} 
                className="right m-1 mr-2">→</div>
            </div>
        )
    }
}
export default Options