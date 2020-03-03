
# 创建一个react组件

- Phone.js
  - import React first
  - export this function out for other file to use

```javascript
// Phone.js

import React from 'react'

function Phone(){
    return (
        <div className="phone flex"></div>
    )
}

export default Phone
```

- 在App.js中引用上述模块

```javascript
// App.js

import Phone from './phone'

<Phone />
```
