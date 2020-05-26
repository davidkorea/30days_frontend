import React, { useState, createContext } from 'react'
import './style.css'
import TabBar from './TabBar'
import TabItem from './TabItem'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import AddNew from './AddNew'

function App() {
    // 1. tab switch and selected effect
    const [tabList, setTabList] = useState([
        {id:1,name:'Open',path:'/'},
        {id:2,name:'Finished',path:'/finished'},
        {id:3,name:'Deleted',path:'/deleted'},
    ]);
    const [selectedTabId, setSelectedTabId] = useState(1);
    const handleTabClick = id => {
        console.log(id);
        setSelectedTabId(id)
    }

    // 2. todolist
    const [todoList, setTodoList] = useState([
        {id:1, text:'get up early at 6am.', finished:false, deleted:false},
        {id:2, text:'take a shower', finished:false, deleted:false},
        {id:3, text:'check unempolyment insurance', finished:false, deleted:false},
        {id:4, text:'have breakfast', finished:false, deleted:false},
        {id:5, text:'apologize to baby dayday', finished:false, deleted:false},
        {id:6, text:'develop a todolist app by react and taro oif possible', finished:false, deleted:false},
    ]);

    const handleFinish = id => {
        console.log(id);
        let temp = [...todoList]
        temp[id-1].finished = !temp[id-1].finished
        setTodoList(temp)    
    }

    const handleDelete = id => {
        console.log(id);
        let temp = [...todoList]
        temp[id-1].deleted = !temp[id-1].deleted
        setTodoList(temp)  
    }

    // 3. input add new
    const [newInput, setNewInput] = useState('');
    const [newPointer, setNewPointer] = useState(todoList.length+1);
    
    const handleInput = input =>{
        console.log(input);
        setNewInput(input)
    }

    const handleKeyDown = e => {
        console.log(e.key);
        if(e.key=='Enter'){
            handleAddClick()
        }
    }

    const handleAddClick = ()=>{
        // create new obj to be appending
        let inputObj = {id:newPointer,text:newInput,finished:false,deleted:false}    
        // append new obj to todoList state
        let temp = [...todoList]
        temp = temp.concat(inputObj)
        console.log(temp);
        setTodoList(temp)
        // clear input box
        setNewInput('')
        // update index flag
        let index = newPointer+1
        setNewPointer(index)    
    }

    return (
        <div className='flex flex-col items-center pt-20 h-screen bg-gray-100'>
            <TabBar>
                {
                    tabList.map(v=><TabItem id={v.id} name={v.name}
                                    selectedTabId={selectedTabId} 
                                    handleTabClick={handleTabClick} 
                                    key={v.id} />)
                }
            </TabBar>
            <TodoList>
                {
                    selectedTabId==1
                    ? todoList.map(v=>{
                        if(!v.deleted){
                            return <TodoItem value={v} handleFinish={handleFinish} handleDelete={handleDelete} key={v.id}></TodoItem>
                        }
                    })
                    : selectedTabId==2
                        ? todoList.map(v=>{
                            if(v.finished && !v.deleted){
                                return <TodoItem value={v} handleFinish={handleFinish} handleDelete={handleDelete} key={v.id}></TodoItem>
                            }
                        })
                        : todoList.map(v=>{
                            if(v.deleted){
                                return <TodoItem value={v} handleFinish={handleFinish} handleDelete={handleDelete} key={v.id}></TodoItem>
                            }
                        })
                }
            </TodoList>
            <AddNew newInput={newInput} handleInput={handleInput} handleKeyDown={handleKeyDown} handleAddClick={handleAddClick}></AddNew>
        </div>
    )
}
export default App