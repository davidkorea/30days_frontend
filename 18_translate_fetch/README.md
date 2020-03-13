# translate

- **useEffect, 在每次执行useState中的setState函数后`[state, setState] = useState()`，自动被调用**
- 函数组件中的useEffect，相当于类组件中的生命周期函数（didMount，didUpdate）的合成
  - 也就是说，虽然函数组件中没有声明周期函数，但是可以使用`useEffect`一并代替第一次加载组件和每次更新组件时的操作

- ` <textarea readOnly ></textarea> `只读输入框
