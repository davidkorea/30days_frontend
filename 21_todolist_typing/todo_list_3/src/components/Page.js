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
        {name:'Open', active:true},
        {name:'Finished', active:false},
        {name:'Deleted', active:false}
    ])

    const openActive = ()=>{
        let list = [...menuList]
        list[0].active = true
        list[1].active = false
        list[2].active = false        
        setMenuList(list)
    }

    const finishActive = ()=>{
        let list = [...menuList]
        list[1].active = true

        list[0].active = false
        list[2].active = false
        setMenuList(list)
    }

    const deleteActive = ()=>{
        let list = [...menuList]
        list[2].active = true

        list[0].active = false
        list[1].active = false
        setMenuList(list)
    }

    return (
        <div className="page m-10 shadow-lg rounded-lg flex flex-col items-center">
            <GlobalContextProvider>

                <Router>
                    <Menu>
                        <Link to="/">
                            <div onClick={openActive} 
                            style={menuList[0].active? {backgroundColor:'royalblue', color:'white', fontWeight:'600'}:{}}
                            className="open w-full h-full flex justify-center items-center bg-indigo-200 rounded-t-lg">
                                {menuList[0].name}
                            </div>
                        </Link>
                        <Link to="/finish/">
                            <div onClick={finishActive} 
                            style={menuList[1].active? {backgroundColor:'royalblue', color:'white', fontWeight:'600'}:{}}
                            className="finish w-full h-full flex justify-center items-center bg-indigo-200 rounded-t-lg">
                                {menuList[1].name}
                            </div>
                        </Link>
                        <Link to="/delete/">
                            <div onClick={deleteActive} 
                            style={menuList[2].active? {backgroundColor:'royalblue', color:'white', fontWeight:'600'}:{}}
                            className="delete w-full h-full flex justify-center items-center bg-indigo-200 rounded-t-lg">
                                {menuList[2].name}
                            </div>
                        </Link>
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