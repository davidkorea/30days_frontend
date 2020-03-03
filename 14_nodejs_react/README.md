
- index.js
  - App.js
    - Phone.js
    - Phone.css



# 创建一个react组件

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
