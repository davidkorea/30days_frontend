
- fackbook cdn works well, but doesn't work when use a local js lib file which you `npm install` the node modules
```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
---

react中不是很好操作<img>标签，图片的大小很难设置
- 还是使用div的背景图片来设置，但是需要单图使用一个css文件来控制
- 和组件js文件卸载一起还是困难，我不会？`<img style={{backgroundImage:url(???}}>`

-----
# React App

> 为什么要使用react，看到下面的图片，每一个菜单都需要10行左右代码去布局，那么如果10个菜单就需要100行。代码重复不说，而且很难后期去维护，很难用眼睛去定位哪一个标签。

> 使用react组件化的一个好处就是，重复代码可以复用，一个菜单标签模版写完，其他的直接调用就可以了！！

- index.js
  - App.js
    - Phone.js
    - Phone.css
      - Card.js

<img width="500" src="https://user-images.githubusercontent.com/26485327/75755152-0bd9e500-5d69-11ea-82f4-a9ddc76b46ee.png">


### 0. start a react project
- use template which has a `package.json`
- `npm install` will install all packages that `package.json` mentioned
- `npm start` **运行项目**



### 1. 创建一个react组件

- `Phone.js`
  - import React first
  - export this function out for other file to use

```javascript
// Phone.js

import React from 'react'
import './Phone.css'

function Phone(){
    return (
        <div className="phone flex"></div>
    )
}

export default Phone
```
- `Phone.css`
  - 如果上述组件需要变更样式那么css文件也要创建，里面的样式设定和之前完全一样
```css
.phone {
  hieght: 600px;
  width: 350px;
}
```

- 在App.js中引用上述模块

```javascript
// App.js

import Phone from './phone'

<Phone />
```

### 2. 样式引入
- 除了上面import外部的css文件之外
- 还可以在组件的js文件中直接写样式，但是由于react中不支持解析css样式结尾的分号;，因此需要创建一个对象，再把对象对胃变量放到标签的style中
  - 对象中的key不能加双引号
```javascript

function Phone(){
  const newStyle = {
    marginTop: -40,
    marginLeft: -20
  }
  
  <div style={newStyle} className="card">
    card
  </div>
}

export default Phone
```
但是，当然也可以不单独创建一个样式的对象，而是直接把样式对象放到style变量的花括号里面，注意，并不是双花括号{{}}有其他特殊含义
```javascript
function Phone(){
  <div style={{marginTop:-40, marginLeft:-20}} className="card">
    card
  </div>
}
```
 




### 3. 组件中引入图片
- 之前是将image的scr写死
```html
<div className="phone p-3 bg-gray-100 text-white shadow-xl">
    <img src="./header.png" alt=""/>
</div>
```
- react中引用图片，就想引入css一样，需要import
  - `import $Name from './$filePath'`
```javascript
import React from "react"
import './Phone.css'
import header from './header.png'   // 引入图片

function Phone(){
    return (
        <div className="phone p-3 bg-gray-100 text-white shadow-xl">
            <img src={header} />    // src后面不加双引号，直接花括号引入变量
        </div>
    )
}
```
如此引入的图片，在实际编译后的代码中，图片名显示为一串乱码。包括引入的css文件名也是一串乱码

<img width="900" src="https://user-images.githubusercontent.com/26485327/75751625-e2698b00-5d61-11ea-8e07-0476d7bde627.png">






