
# 30days_frontend


## Component
1. switch tab and change page
    - [with router](https://github.com/davidkorea/30days_frontend/blob/master/00_Components/01_tab_switch_no_router.md#3-switch-tab-with-page-changed-with-router)
    - [with no router](https://github.com/davidkorea/30days_frontend/blob/master/00_Components/01_tab_switch_no_router.md#2-switch-tab-with-page-changed-no-router)


## Tools
- Random Face photos https://i.pravatar.cc/100 ，`https://i.pravatar.cc/<$Size>?u=123` 
- Random pictures https://picsum.photos ， https://i.picsum.photos/id/827/200/200.jpg , `https://i.picsum.photos/id/<$int>/200/200.jpg`
- JavaScript Event KeyCodes http://keycode.info
- Sets - Unicode® Character Table https://unicode-table.com/en/sets/
- VScode css auto-complete https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css
- **[VScode react jsx语法识别](https://github.com/davidkorea/30days_frontend/issues/4#issue-623574983)**：settings - user - search “includeLanguages” - add
    ```javascript
    "emmet.includeLanguages": {
    　　"javascript": "javascriptreact"
    }
    ```
- **[react-feather图标库](https://bit.dev/feathericons/react-feather)**: `npm install react-feather`
    ```javascript
    import {BatteryCharging, Wifi} from 'react-feather'

    <div className="battary"><BatteryCharging size="18" /></div>
    ```

## Tips
- **useEffect中fetch请求得到数据后，如何通过setState将数据保存到本地状态变量中？**，将所有数据拼接成一个字符串，再把字符串解析为json对象，在set到状态变量中
    1. `fetch(url).then(res=>res.json()).then(data=>data.map( ... ))`，循环拿到每一条数据
    2. 现将数据保存到一个字符串中，字符串最后用”反斜线“作为分隔符
    3. 
- **npm**
    - **--save / -S**: `npm install --save react-router-dom`, --save可以在项目中的package.json文件中`dependencies`增加依赖，下次使用该配置文件直接`npm install`就可以
    - **--save-dev**: 安装到package.json文件的`devDependencies`中
    
- body设置min-width，防止无限被压缩没出现布局错乱
- `position: absolute; display: none;`  -> `display: block` 隐藏显示菜单，当点击时显示的非js方法
- `text-overflow: ellipsis;`，文字根据div宽度，自动截取，并在末尾显示... [Github Trending 小卡片](https://github.com/davidkorea/30days_frontend/tree/master/06_hackerNews)
  - tailwindcss使用`truncate`
- 取点按钮元素点击边框
  ```css
  button:focus {
      outline: none;
  }
  ```
- 取消输入框，输入文本框，选中边框效果
    ```css
    // tailwindcss
    outline-none
    ```
- 页面滚动，但是不显示滚动条
  ```css
  ::-webkit-scrollbar {
      display: none;
  }
  ```

- 居中对齐
  - 当前组件内部，先设置一个div作为外层frame，width：100%
  - 再在这个frame设置flex justify-center item-center
  - 这样元素内部的标签可以居中



