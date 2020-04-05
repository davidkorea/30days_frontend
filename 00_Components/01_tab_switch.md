
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




## Router + switch tab

```javascript
import React, { useState } from 'react'
import './style.css'
import Menu from './Menu'
import List from './List'
import Add from './Add'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Delete from './Delete'
import Finish from './Finish'
import GlobalContextProvider from  '../contexts/GlobalContext/'

function Page(){
    const [menuList, setMenuList] = useState([
        {name:'Open', id:1, path:'/'},
        {name:'Finished', id:2, path:'/finish/'},
        {name:'Deleted', id:3, path:'/delete/'}
    ])

    const [selected, setSelected] = useState('');

    const handleTab = (item)=>{
        // console.log(item)
        if(selected.id != item.id){
            setSelected(item)
        }
    }
    
    return (
        <div className="page m-10 shadow-lg rounded-lg flex flex-col items-center">
            <GlobalContextProvider>

                <Router>
                    <Menu>
                        {
                            menuList.map((v,i)=>(
                                <Link key={v.id} to={v.path}>
                                    <div onClick={()=>handleTab(v)} 
                                    style={selected.id == v.id? {backgroundColor:'royalblue', color:'white', fontWeight:'600'}:{}}
                                    className="open w-full h-full flex justify-center items-center bg-indigo-200 rounded-t-lg">
                                        {v.name}
                                    </div>
                                </Link>
                            ))
                        }

                    </Menu>

                    <Route path='/' exact component={List}></Route>
                    <Route path='/finish/' exact component={Finish}></Route>
                    <Route path='/delete/' exact component={Delete}></Route>
                </Router>

                <Add></Add>
            </GlobalContextProvider>
        </div>
    )
}

export default Page
```
