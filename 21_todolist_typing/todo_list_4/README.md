
# todolist version 4

1. ~~no Router~~
2. ~~no Context~~
3. enter & btn to add a new item 


<img width="1235" src="https://user-images.githubusercontent.com/26485327/82867517-f9d1a200-9f65-11ea-8431-449f60857897.png">

# 1. Switch Menu Tab

> 参考其他示例：[switch tab selected effect](https://github.com/davidkorea/30days_frontend/blob/master/00_Components/01_tab_switch_no_router.md#1-switch-tab-selected-effect)

切换菜单 + 选中效果

1. 创建菜单列表状态，包含序号id和菜单名称。其中id用于实现选中效果。通过map函数，将每一个标签项对应一个子组件`TabItem`
2. 创建标签序号状态变量，保存当前被选中标签的序号id的
3. 单击事件函数，将当前标签序号id，复制给上面创建的标签序号状态变量
4. 在子组件中，判断自己的id和选中变量的id是否一致，一直则呈现选中效果

```javascript
// App.js
// 1. tab switch and selected effect
const [tabList, setTabList] = useState([
    {id:1,name:'Open'},
    {id:2,name:'Finished'},
    {id:3,name:'Deleted'},
]);
const [selectedTabId, setSelectedTabId] = useState(1);
const handleTabClick = id => {
    console.log(id);
    setSelectedTabId(id)
}

<TabBar>
    {
        tabList.map(v=><TabItem id={v.id} name={v.name}
                        selectedTabId={selectedTabId} 
                        handleTabClick={handleTabClick} 
                        key={v.id} />)
    }
</TabBar>
```
```javascript
// TabItem.js

<div className={`tabitem w-1/3 h-12 rounded-t-lg flex justify-center items-center
    ${props.selectedTabId==props.id? 'bg-indigo-400 text-white text-lg': 'bg-indigo-200'}`}
    onClick={()=>{props.handleTabClick(props.id)}}
>
    {props.name}
</div>
```


# 2. Switch Menu with Content changed

切换菜单标签，内容跟随变换

1. 所有数据条目保存在同一个状态变量中，其中包含各个条目的状态信息（finished，deleted）
2. 根据条目的不同状态，分别展示在finished和deleted标签对应的内容区域。从而实现**无路由切换内容**
3. 通过`... ? ... : ... `表达式的嵌套，实现三种状态的判断
4. 最后通过对全部数据遍历map中，使用if条件表达式，来return满足条件的数据
5. 在生成符合条件的子组件时，还要相应传递**变更状态的事件函数**，用于状态之间的来回切换

```javascript
// App.js
const [todoList, setTodoList] = useState([
    {id:1, text:'get up early at 6am.', finished:false, deleted:false},
    {id:2, text:'take a shower', finished:false, deleted:false},
    {id:3, text:'check unempolyment insurance', finished:false, deleted:false},
    {id:4, text:'have breakfast', finished:false, deleted:false},
    {id:5, text:'apologize to baby dayday', finished:false, deleted:false},
    {id:6, text:'develop a todolist app by react and taro oif possible', finished:false, deleted:false},
]);
const handleFinish = id => {
    let temp = [...todoList]
    temp[id-1].finished = !temp[id-1].finished
    setTodoList(temp)    
}
const handleDelete = id => {
    let temp = [...todoList]
    temp[id-1].deleted = !temp[id-1].deleted
    setTodoList(temp)  
}


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
```
```javascript
// todoItem.js

<div className={`todoitem mb-3 rounded-lg shadow-md p-2 flex items-center justify-center 
     ${props.value.finished? 'text-gray-500 bg-gray-200':' text-gray-700'}`}
     onClick={()=>{props.handleFinish(props.value.id)}}
>
    <div className="todo-check mr-4 select-none">
        {
            props.value.finished
                ? <CheckCircle size={16} color={'orange'} />
                : <Flag size={16} />
        }
    </div>

    <div className={`todo-text truncate ${props.value.finished? 'line-through':''}`}>{props.value.text}</div>

    <div className="todo-del ml-3 select-none"
        onClick={()=>{props.handleDelete(props.value.id)}}
    >
        {
            props.value.deleted? <CornerUpLeft size={15}/> :<Trash2 size={13} />
        }
    </div>
</div>
```























