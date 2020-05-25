# R&M角色图鉴效果

1. 无路由页面切换+选中效果 -> more：[01_tab_switch_no_router.md](https://github.com/davidkorea/30days_frontend/blob/master/00_Components/01_tab_switch_no_router.md)

2. fetch后map数据，string->json->setState
3. map后循环fetch url，每个url传递给一个子组件，每子组件根据拿到的urlfetch到自己的数据，本村到本地变量

## 选中效果 + 切换标签

![chrome-capture (5)](https://user-images.githubusercontent.com/26485327/82784578-c9253600-9e9b-11ea-9e59-d03db624989d.gif)

- 两个状态变量
    - 原始状态变量，包含全部数据信息
    - 选中状态变量，仅存储当前被选中的数据
- 单击事件触发后
    - 获取当前元素id
    - 这只selected状态为当前元素id
    - 根据当前元素id，选择原来状态中的对应条目数据，set到新的状态变量中
- 内容显示区域，根据选中状态变量中的数据进行展示

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
<img width="300"  src="https://user-images.githubusercontent.com/26485327/82781077-d9d1ae00-9e93-11ea-8c58-ace5350028c1.png">

![chrome-capture](https://user-images.githubusercontent.com/26485327/82781066-d63e2700-9e93-11ea-9652-980f45872901.gif)

