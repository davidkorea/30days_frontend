
# switch tab selected

![Apr-05-2020 21-36-14](https://user-images.githubusercontent.com/26485327/78499823-82616c80-7785-11ea-9ab7-043740d519ca.gif)



```javascript
import React, { Component, useState } from 'react'

function Tab(){

    const [tabList, setTabList] = useState([
        {name:'index', id:1},
        {name:'list', id:2},
        {name:'about', id:3},
    ]);

    const [selected, setSelected] = useState('');

    const handleClick = (item)=>{
        if(selected.id != item.id){
            setSelected(item)
        }
    }
    return (
        <div className="tabs">
            {
                tabList.map((v,i)=>{
                return <div onClick={()=>handleClick(v)}
                 style={selected.id==v.id?{color:'white',backgroundColor:'lightgray'}:{}}
                 className="item w-24 pt-2 pb-2 shadow text-center" 
                 key={v.id}>{v.name}</div>
                })
            }
        </div>

    )
}

export default Tab
```




