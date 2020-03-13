# translate

- **useEffect, 在每次执行useState中的setState函数后`[state, setState] = useState()`，自动被调用**
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

- 函数组件中的useEffect，相当于类组件中的生命周期函数（didMount，didUpdate）的合成
  - 也就是说，虽然函数组件中没有声明周期函数，但是可以使用`useEffect`一并代替第一次加载组件和每次更新组件时的操作

- `<textarea readOnly ></textarea> `只读输入框

- 自定义元素没有`onClick`事件，html原生标签才有







-----

![Mar-13-2020 09-58-58](https://user-images.githubusercontent.com/26485327/76582485-539f0000-6511-11ea-8aa8-e1ef70148eda.gif)
