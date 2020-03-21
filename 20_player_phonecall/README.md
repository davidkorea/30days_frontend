

# music player
![Mar-21-2020 16-09-25](https://user-images.githubusercontent.com/26485327/77222472-66a77500-6b8e-11ea-9902-ae12095ed74f.gif)



# iphone call

<img width="360" src="https://user-images.githubusercontent.com/26485327/77221295-77062280-6b83-11ea-9f53-ec7a83c78d61.gif">

-----

-----

### 1. 使用react-feather图标
1. 安装方法1：空项目`package.json`
```javascript
  "dependencies": {
    "react": "^16.10.2",
    "react-dom": "^16.10.2",
+   "react-feather": "^2.0.3",
    "tailwind": "^4.0.0"
  }
```
```
cnpm install
```
2. 安装方法1：已有项目直接安装
```
cnpm install --save react-feather
```
3. 引入 & 使用
```javascript
import *  as Icon  from 'react-feather'

<div>
  <Icon.PauseCircle  onClick={pause} size={40} className="cursor-pointer" />
</div>
```
