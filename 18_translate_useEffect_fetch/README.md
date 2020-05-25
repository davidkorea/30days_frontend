> 1. fetch请求到数据后，map函数遍历数据后，生成字符串，再parse成json，最后setState保存数据到状态变量
> 2. map函数中需要遍历每一个url进行fetch请求，将每一个url的fetch传送给一个子组件来处理，子组件内部请求该url的所有数据，保存在自组建的本地状态变量中，由子组件直接使用


# 2. Role Map

<img width="300"  src="https://user-images.githubusercontent.com/26485327/82781077-d9d1ae00-9e93-11ea-8c58-ace5350028c1.png">

![chrome-capture](https://user-images.githubusercontent.com/26485327/82781066-d63e2700-9e93-11ea-9652-980f45872901.gif)



# 1. translate

## version-3
随输入，随检测翻译，无需手动回车

![chrome-capture](https://user-images.githubusercontent.com/26485327/82749709-121ab300-9de6-11ea-977b-65845bab2e4d.gif)


## React Hook useEffect
- **useEffect, 在每次执行useState中的setState函数后`[state, setState] = useState()`，自动被调用**
  - 函数组件中的useEffect，相当于类组件中的生命周期函数（didMount，didUpdate）的合成
   - 也就是说，虽然函数组件中没有声明周期函数，但是可以使用`useEffect`一并代替第一次加载组件和每次更新组件时的操作
  - useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在**第一次渲染**之后和**每次更新**之后都会执行
  - 但是控制它在指定参数变化后才进行更新
    ```javascript
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]); // 仅在 count 更改时更新
    ```
    ```javascript
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setimage(data.image)
            setname(data.name)
            setloading(false)
        })
    },[url])  // 仅在 url 更改时更新
    ```
    ```javascript
    useEffect(() => {
        fetch(url+chapterId).then(res=>res.json()).then(data=>{
           setcharacters(data.characters)
        })
    },[chapterId])  // 仅在 chapterId 更改时更新
    ```
  - 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个**空数组（[]）作为第二个参数**。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。

## HTML Tag
- `<textarea readOnly ></textarea> `只读输入框
- `<textarea disabled ></textarea> `只读输入框

- **自定义元素没有`onClick`事件，html原生标签才有**
  - **自定义元素可以自定义属性用来传递参数，但是原生html标签不能使用自定义属性传递参数**

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




-----

![Mar-13-2020 09-58-58](https://user-images.githubusercontent.com/26485327/76582485-539f0000-6511-11ea-8aa8-e1ef70148eda.gif)
