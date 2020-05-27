# todo_list_5 with context & router

<img width="300" alt="截屏2020-05-27 17 06 22" src="https://user-images.githubusercontent.com/26485327/82993983-67500200-a03c-11ea-91c5-b052a2e83812.png">
<img width="300" alt="截屏2020-05-27 17 06 58" src="https://user-images.githubusercontent.com/26485327/82994044-7cc52c00-a03c-11ea-9d2f-1f988402e4e2.png">
<img width="300" alt="截屏2020-05-27 17 07 11" src="https://user-images.githubusercontent.com/26485327/82994057-83ec3a00-a03c-11ea-9fc2-c3bf7af9574a.png">


# 1. createContext & useContext & Router
- [React hooks - createContext useContext](https://github.com/davidkorea/30days_frontend/blob/master/00_Tips/useContext_router.md)


# 2. context

- 将state变量和事件方法函数，写在context中共享给所有子组件使用
- 再使用map函数遍历功效的状态列表时，key，id，文字等信息，想往常一样在子组件等参数属性中传递
- 事件方法函数，也可以想往常一样在map遍历时，通过参数传递。也可以在子组件中useContext，将发发函数直接拿出来使用

```javascript
import React, { useContext } from 'react';
import {GlobalContext} from '../contexts/GlobalContext'

export default function TabItem(props){
    const {selectedTabId,handleTabClick} = useContext(GlobalContext);
    
    return(
        <div className={`tabitem w-24 h-12 rounded-t-lg flex justify-center items-center
            ${selectedTabId==props.id? 'bg-indigo-400 text-white':'bg-indigo-200'}`}
            onClick={()=>handleTabClick(props.id)}
        >
            {props.name}
        </div>
    )
}
```
- 用于显示等内容，依然是map后等子组件属性传递
- 方法函数则通过context来使用

# 3. router

- 由于使用了路由，因此每个标签页对应一个url，也即对应一个不同的子组件
- 每个子组件还是想version4一样，使用同一个`todoList`变量，根据其中不同状态来判断条件并展示数据

```javascript
import React, { useContext } from 'react';
import {GlobalContext} from '../contexts/GlobalContext'
import TodoItem from './TodoItem'

export default function Finishlist(){
    const {todoList} = useContext(GlobalContext);

    return(
        <div className="finishlist border-2 p-3">
        {
            todoList.map(v=>{
                if(v.finished && !v.deleted){
                    return <TodoItem key={v.id} id={v.id} item={v}></TodoItem>
                }
            })
        }            
        </div>
    )
}
```
