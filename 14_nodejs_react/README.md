
- index.js
  - App.js
    - Phone.js
    - Phone.css



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


### 2. 组件中引入图片
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






