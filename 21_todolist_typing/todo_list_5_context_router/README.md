# todo_list_5 with context & router

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


