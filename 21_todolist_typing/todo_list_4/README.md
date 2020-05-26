
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
