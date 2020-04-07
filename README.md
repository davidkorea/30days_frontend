# 30days_frontend

## Component
1. switch tab and change page
    - with router
    - with no router


## Tools
- Random Face photos https://i.pravatar.cc/100 ，`https://i.pravatar.cc/<$Size>?u=123` 
- Random pictures https://picsum.photos ， https://i.picsum.photos/id/827/200/200.jpg , `https://i.picsum.photos/id/<$int>/200/200.jpg`
- JavaScript Event KeyCodes http://keycode.info
- Sets - Unicode® Character Table https://unicode-table.com/en/sets/
- VScode css auto-complete https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css


## Tips

- `npm install --save react-router-dom`, --save可以在项目中的package.json文件中增加依赖，下次使用该配置文件直接`npm install`就可以
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



