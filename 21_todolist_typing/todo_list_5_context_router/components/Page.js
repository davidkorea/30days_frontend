import React, { useContext } from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import {GlobalContext} from '../contexts/GlobalContext'
import OpenList from './Openlist'
import FinishList from './FinishList'
import DeleteList from './DeleteList'
import TabItem from './TabItem'
export default function Page(){
    const {menuList,selectedTabId,handleTabClick} = useContext(GlobalContext);
    return(
        <div className="page">
            <Router>
                <div className="tabmenu flex">
                {
                    menuList.map(v=>(
                    <Link to={v.path} key={v.id}>
                        <TabItem id={v.id} name={v.name} 
                                // handleTabClick={handleTabClick}
                                // selectedTabId={selectedTabId}
                        />
                    </Link>
                    ))
                }
                </div>
                <Route path='/' exact component={OpenList}></Route>
                <Route path='/finish' exact component={FinishList}></Route>
                <Route path='/delete' exact component={DeleteList}></Route>
            </Router>
        </div>
    )
}