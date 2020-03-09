
# load comment

### 1. 静态结构 
<img width="200" src="https://user-images.githubusercontent.com/26485327/76190184-5ea71700-6217-11ea-8d5b-93bfe4bc86d6.png">

```html
// App.js

<div>
  <Page>
    <Comment name={} comment={} key={} />
    <Comment name={} comment={} key={} />
    <Comment name={} comment={} key={} />
  </Page>
</div>
```

```html
// Page.js

<div>
   <img src="banner pic">
   <div>article</div>
   <div>
      { this.props.childern }  // == all <Comment /> in the App.js
   </div>
</div>
```

```html
// Comment.js

<div>
    <img src=''>
    <div> { this.props.name }  </div>
    <div> { this.props.comment }  </div>
</div>
```

## 2. 动态加载评论

- 点击 load more后，多显示3条评论内容
- 也就是每次点击load more，自动多加载3个<Comment />组件

### 2.1 循环列表
- react 中不建议使用for循环，将列表中数据取出
- 强烈建议使用map()函数，将列表中的数据取出

```javascript
// App.js

<div>
  <Page>
      { dataList.map( (v, i)=>(
           <Comment name={v.name} comment={v.comment} key={i} />
      ) ) }
  </Page>
</div>

```
```
dataList.map(function(v, i){
    return <Comment name={v.name} comment={v.comment} key={i} />  // 上面箭头函数的等价ES5形式
})
```

### 2.2 点击按钮，加载评论


















