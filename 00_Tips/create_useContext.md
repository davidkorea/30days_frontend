
# React hooks - createContext useContext

1. 可以在父组件App.js里面创建上下文context然后共享给其他子组件使用
2. 将上下文context单独创建成一个子组件，引入到App.js中，然后让该context子组件去包含其他子组件，来给被包含的子组件提供共享数据，router可以被包含在里面

> ##### 1. 哪怕仅一个共享变量，`value={{ }}`双层花括号，否则报错
> ##### 2. GlobalContextProvider子组件中，不能直接使用自己共享出来的变量，需要中间再使用一个子组件来隔离？？ ！！！ `const {menuList} = useContext(GlobalContext);`反正有这句话就报错找不到menuList



# 1. createContext子组件

- 创建路径`src/contexts/GlobalCOntext.js`
```javascript
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext()              // 创建的全局上下问需要export出去，

function GlobalContextProvider(props){
    // 1. menu tab list
    const [menuList, setMenuList] = useState([
        {id:1, name:'Open', path:"/"},
        {id:2, name:'Finished', path:"/finished"},
        {id:3, name:'Deleted', path:"/deleted"}
    ]);

    return (
        <GlobalContext.Provider value={{menuList}} >    // 将需要共享的变量放在value中
            {props.children}                            // 哪怕只共享一个变量也需要双层花括号{{ }}！！！！！！
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider
```

# 2. useContext

- `App.js`
```javascript
import React, { useContext } from 'react'
import GlobalContextProvider, { GlobalContext } from '../contexts/GlobalContext'
import Page from './Page'

function App() {
    // const {menuList} = useContext(GlobalContext);
    // 注意GlobalContextProvider组件里面不能使用自己共享出来的变量，会报错找不到menuLst变量！！！！！！！！！！
    // 这只能在嵌套一个字句间Page，在Page组件里再引入共享变量menuList来使用

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <GlobalContextProvider>
                <Page></Page>
            </GlobalContextProvider>
        </div>
    )
}
export default App
```

- 创建一个子组件`Page.js`，用于展示menuList
```javascript
import React, { useContext } from 'react';
import {GlobalContext} from '../contexts/GlobalContext'

function Page(){
    const {menuList} = useContext(GlobalContext);
    return(
        <div className="page">
            {
                menuList.map(v=><div key={v.id}>{v.name}</div>)
            }
        </div>
    )
}

export default Page
```
