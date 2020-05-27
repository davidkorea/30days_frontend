import React, { createContext, useState } from 'react';

export const GlobalContext = createContext()

export default function GlobalContextProvider(props){

    // 1. tab menu
    const [menuList, setMenuList] = useState([
        {id:1, name:'Open', path:'/'},
        {id:2, name:'Finished', path:'/finish'},
        {id:3, name:'Deleted', path:'/delete'},
    ]);
    const [selectedTabId, setSelectedTabId] = useState(1);
    const handleTabClick = id => {
        console.log(id);
        setSelectedTabId(id)
    }

    // 2. todolist
    const [todoList, setTodoList] = useState([
        {id:1, text:'get up early in the morning', finished:false, deleted:false},
        {id:2, text:'have breakfast', finished:false, deleted:false},
        {id:3, text:'react project', finished:true, deleted:false},
        {id:4, text:'lunch time', finished:false, deleted:true},
        {id:5, text:'crazy rich asians', finished:false, deleted:false},
    ]);

    const handleFinish = id => {
        console.log(id);
        let temp = [...todoList]
        temp[id-1].finished = !temp[id-1].finished
        setTodoList(temp)
    }

    return(
        <GlobalContext.Provider value={{menuList,selectedTabId,handleTabClick,
                                        todoList,handleFinish}}>
            {props.children}
        </GlobalContext.Provider>
    )
}