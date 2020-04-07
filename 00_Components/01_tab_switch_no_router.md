
# 1. switch tab selected effect

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

# 2. switch tab with page changed


结构如下
- Page
  - Tab
  - Content


1. 根据tab的切换，内容页面也随之切换。由于没有路由，不能根据路由path切换内容页面位置的组件。有路由的话，每个Content组件位置上都是一个不同的组件，而不使用路由，那么这个位置上就是同一个Content组件，只是组件中显示的内容需要改变。稍微复杂一些
2. 需要将所有Tab中的状态和方法放到父组件Page中，Tab组件改变父组件状态
3. Content组件根据变更后的父组件的状态来判断组件如何显示
















