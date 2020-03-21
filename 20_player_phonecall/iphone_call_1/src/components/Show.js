import React from 'react'


function Show(props){
    // console.log(props.numLength);
    
    return (
        <div className="show flex flex-col justify-center items-center">
            <input
                value={props.inputNums}
                onChange={props.handleChange}
                className="outline-none text-center text-3xl bg-gray-100" type="text"/>
            
            {
                props.numLength>0
                    ? <div className="add text-blue-500 text-xs">添加号码</div>
                    : <div className="add"></div>
            }
        </div>
    )
}

export default Show