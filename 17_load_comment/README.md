
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











