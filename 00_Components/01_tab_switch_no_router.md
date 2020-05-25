
# 1. switch tab selected effect
> 还一个很好的例子，无路由切换页面+选中效果：选集+选中效果 [R&M角色图鉴效果](https://github.com/davidkorea/30days_frontend/blob/master/18_translate_useEffect_fetch/role_map_1/README.md)

### version 2
![chrome-capture (2)](https://user-images.githubusercontent.com/26485327/82783757-143e4980-9e9a-11ea-8344-860bc6ffe00b.gif)

选中效果
```javascript
import React, { useState } from 'react'

function App() {
    const [list, setList] = useState([
        {id:1, name:'Index'},
        {id:2, name:'Order'},
        {id:3, name:'About'},
    ])
    const [selectedId, setSelectedId] = useState(1)
    const handleClick = id => {
        console.log(id);
        setSelectedId(id)
    }
    
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className="list w-20 text-center shadow">
                {
                    list.map(v=><div onClick={()=>handleClick(v.id)} key={v.id} 
                    className={`h-8 border-2 ${selectedId==v.id? 'bg-gray-300':''}`}
                    >{v.name}</div>)
                }
            </div>
        </div>
    )
}
export default App
```

选中效果+切换标签
```javascript
import React, { useState } from 'react'

function App() {

    const [list, setList] = useState([
        {id:1, name:'Index'},
        {id:2, name:'Order'},
        {id:3, name:'About'},
    ]);
    const [selectedId, setSelectedId] = useState(1);
    const [content, setContent] = useState();
    const handleClick = id => {
        console.log(id);
        setSelectedId(id)
        setContent(list[id-1])
    }
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className="list w-20 text-center shadow">
                {
                    list.map(v=><div onClick={()=>handleClick(v.id)} key={v.id} 
                    className={`h-8 border-2 ${selectedId==v.id? 'bg-gray-300':''}`}
                    >{v.name}</div>)
                }
            </div>
            <div className="content w-20 h-24 text-center pt-8 shadow">
                {content&&content.name}
            </div>
        </div>
    )
}
export default App
```



### version 1

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

# 2. switch tab with page changed （no router）

> 还一个很好的例子，就是切换剧集的项目
> - 每次点击按钮后，根据按钮所对应的url，重新请求数据，赋值给唯一的状态变量
> - 这样每次变更状态变量，就可以改变现实的内容，类似切换页面
> 而下面的例子是将所有需要请求的数据，静态的放到一个状态变量中，根据id来切换不同数据显示

- Page
  - Tab
  - Content

![Apr-07-2020 13-28-30](https://user-images.githubusercontent.com/26485327/78633313-e003cf00-78d3-11ea-90c6-fa702635a500.gif)

1. 根据tab的切换，内容页面也随之切换。由于没有路由，不能根据路由path切换内容页面位置的组件。有路由的话，每个Content组件位置上都是一个不同的组件，而不使用路由，那么这个位置上就是同一个Content组件，只是组件中显示的内容需要改变。稍微复杂一些
2. 需要将所有Tab中的状态和方法放到父组件Page中，Tab组件改变父组件状态
3. Content组件根据变更后的父组件的状态来判断组件如何显示


### 2.1 父组件Page

```javascript
import React, { useState } from 'react'
import Tab from './Tab'
import Content from './Content'

function Page(){
    const [tabList, setTabList] = useState([
        {name:'index', id:1},
        {name:'list', id:2},
        {name:'about', id:3},
    ]);

    const [contentList, setContentList] = useState([
        {id:1,content:'index content'},
        {id:2,content:'list content'},
        {id:3,content:'about content'},
    ]);

    const [selected, setSelected] = useState('');

    const handleClick = (item)=>{
        if(selected.id != item.id){
            setSelected(item)
        }
    }

    return (
        <div className="page flex ">
            <Tab tabList={tabList} selected={selected} handleClick={handleClick}></Tab>
            <Content selectedId={selected.id} contentList={contentList}></Content>
        </div>
    )
}

export default Page
```
- 在父组件中，新添加`const [contentList, setContentList] = useState([])`状态
- 当Tab子组件中的某各tab被选中后，其会设置selected的状态，再将改选中的状态传递给另一个子组件Content
- Content子组件，根据传递进来的选中id`SelectedId`，再从contentList状态中选出相对于该id的内容，并展示

### 2.2 子组件Tab

```javascript
import React, { Component, useState } from 'react'

function Tab(props){

    // const [tabList, setTabList] = useState([
    //     {name:'index', id:1},
    //     {name:'list', id:2},
    //     {name:'about', id:3},
    // ]);
    // const [selected, setSelected] = useState('');
    // const handleClick = (item)=>{
    //     if(selected.id != item.id){
    //         setSelected(item)
    //     }
    // }
    // 之前写在该组件内的状态和方法，上移至其父组件，以便多个子组件共享状态
    
    return (
        <div className="tabs">
            {
                props.tabList.map((v,i)=>{
                    return <div onClick={()=>props.handleClick(v)}
                    style={props.selected.id==v.id?{color:'white',backgroundColor:'lightgray'}:{}}
                    className="item w-24 pt-2 pb-2 shadow text-center" 
                    key={v.id}>{v.name}</div>
                })
            }
            
        </div>

    )
}

export default Tab
```

### 2.3 子组件Content


```javascript
import React, { useState,useEffect } from 'react'

function Content(props){
    const [id, setId] = useState(0);
    useEffect(() => {
        props.selectedId&&setId(props.selectedId-1)
    });

    return (
        <div className="content p-2 w-32 h-48 border-2">
            {/* <div className="id">{props.selectedId} - {id}</div> */}
            <div className="content">{props.contentList[id].content}</div>
        </div>
    )
}

export default Content
```



# 3. switch tab with page changed （with router）

- Page
  - Tab
  - Content / List / About, (router)


根据Tab上绑定的路由的不同，在内容位置上显示不同的组件

![Apr-07-2020 14-05-32](https://user-images.githubusercontent.com/26485327/78635579-227bda80-78d9-11ea-8116-0a5cc55caa61.gif)


### 3.1 父组件Page
```javascript
import React, { useState } from 'react'
// import Tab from './Tab'
import Content from './Content'
import List from './List'
import About from './About'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Page(){
    const [tabList, setTabList] = useState([
        {name:'index', id:1, path:'/'},
        {name:'list', id:2, path:'/list/'},
        {name:'about', id:3, path:'/about/'},
    ]);

    // const [contentList, setContentList] = useState([
    //     {id:1,content:'index content'},
    //     {id:2,content:'list content'},
    //     {id:3,content:'about content'},
    // ]);

    const [selected, setSelected] = useState('');

    const handleClick = (item)=>{
        if(selected.id != item.id){
            setSelected(item)
        }
    }

    return (
        <div className="page flex ">
            <Router>
                <div className="tabs">
                {
                    tabList.map((v,i)=>{
                        return (
                            <Link to={v.path} key={i}>
                            <div onClick={()=>handleClick(v)}
                            style={selected.id==v.id?{color:'white',backgroundColor:'lightgray'}:{}}
                            className="item w-24 pt-2 pb-2 shadow text-center" 
                            key={v.id}>{v.name}</div>
                            </Link>
                        )
                    })
                }
                </div>
                <Route path='/' exact component={Content}></Route>
                <Route path='/list/' exact component={List}></Route>
                <Route path='/about/' exact component={About}></Route>
            </Router>

            {/* <Tab tabList={tabList} selected={selected} handleClick={handleClick}></Tab>
            <Content selectedId={selected.id} contentList={contentList}></Content> */}
        </div>
    )
}

export default Page
```

- 更改tabList，添加path字段
- 每个tab小标签，绑定一个`<Link to={url}>`路径url
- `<Route path={url} component={different child component}>`中设置每个url路径，对应的实际组件

### 3.2 ~~子组件Tab~~
1. 原Tab组件中的代码，全部迁移至父组件中，用于循环生成每个tab标签


### 3.3 子组件Content，作为首页
```javascript
import React, { useState,useEffect } from 'react'

function Content(props){
    // const [id, setId] = useState(0);
    // useEffect(() => {
    //     props.selectedId&&setId(props.selectedId-1)
    // });

    return (
        <div className="content p-2 w-32 h-48 border-2">
            {/* <div className="id">{props.selectedId} - {id}</div> */}
            {/* <div className="content">{props.contentList[id].content}</div> */}
            index content
        </div>
    )
}

export default Content
```

### 3.4 子组件List，作为list首页
```javascript
import React from 'react'

function List(){
    return (
        <div className="list p-2 w-32 h-48 border-2">
            list content
        </div>
    )
}

export default List
```


### 3.5 子组件About，作为about首页

```javascript
import React from 'react'

function About(){
    return (
        <div className="about p-2 w-32 h-48 border-2">
            about content
        </div>
    )
}

export default About
```
