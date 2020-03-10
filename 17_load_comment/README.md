- flex布局， 元素换行后，元素间不留空隙`align-content: flex-start;` tailwindcss: `content-start`
  - [tailwindcss: Align Content](https://tailwindcss.com/docs/align-content/#app)






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
    <div>Load more</div>
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


<img width="200" src="https://user-images.githubusercontent.com/26485327/76190082-230c4d00-6217-11ea-8fe0-9a42e568ab29.gif">


- 点击 load more后，多显示3条评论内容
- 也就是每次点击load more，自动多加载3个<Comment />组件

### 2.1 循环列表
- 首先需要拿到一个包含用户名和评论信息的列表，一般是ajax像服务器请求得到
- react 中不建议使用for循环，将列表中数据取出
- 强烈建议使用map()函数，将列表中的数据取出
  - map函数传递两个参数，第一个时列表中的每个元素，第二个是每个元素对应的索引号
- 循环列表时，每个子组件必须传递`key`参数，用于唯一标识一个元素，一般是从数据库中拿到的uuid等信息，不推荐直接使用循环列表的索引0，1，2...

```javascript
// App.js

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataList: [
                {name: 'david', comment: 'this is so good!'},
                {name: 'joyce', comment: 'lol'},
                {name: 'kawol', comment: 'awesome'},
            ]
        }
    }
    

    render(){
        return (
            <div>
              <Page>
                  { dataList.map( (v, i)=>(
                       <Comment name={v.name} comment={v.comment} key={i} />
                  ) ) }                  
                  
                  <div>Load more</div>
              </Page>
            </div>
        )
    }
}
```
```javascript
dataList.map(function(v, i){
    return <Comment name={v.name} comment={v.comment} key={i} />  // 上面箭头函数的等价ES5形式
})
```
- **注意**：使用 class的方式定义的组件，类里面只可以有函数，如`constructor()` `render()`以及声明周期函数
  - 不可以在类里面定义变量，如 `var idx = 1`，会报错
  - 因此**只能在类的这些函数内部定义变量**，因此dataList只能定义在`constructor()`里面


### 2.2 点击按钮，加载评论
- 分片用的idx
- 分片后的子数组

```javascript
// App.js

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            idx: 0,
            dataList: [
                {name: 'david', comment: 'this is so good!'},
                {name: 'joyce', comment: 'lol'},
                {name: 'kawol', comment: 'awesome'},
            ],
            dataListSlice: []
        }
    }
    
    
    handleClick(){
        this.setState({
            idx: this.state.idx + 3,
            dataListSlice: this.state.dataList.slice(0, this.state.idx)
        })
    }
    
    
    render(){
        return (
            <div>
              <Page>
                  { dataList.map( (v, i)=>(
                       <Comment name={v.name} comment={v.comment} key={i} />
                  ) ) }
                  
                  <div onClick={ ()=>this.handleClick() }>Load more</div>
              </Page>
            </div>
        )
    }
}
```
- 动态加载评论，就是不能一次性全部显示所有评论，而是每次显示一部分
- 需要对全部的数据数组进行分片`slice(startIdx, length)`（从几号开始取，取几个），每次只取出几条，用来显示
  - 因此需要一个idx用来每次指定取出几条数据，还有一个分片之后的新的子数组，用来展示评论
  


## 2.3 评论加载完成
评论全部加载完成后，显示加载完成，不再显示Load more

<img width="348"  src="https://user-images.githubusercontent.com/26485327/76192502-ed6a6280-621c-11ea-8c18-142bfd317476.png">


```javascript
// App.js

...

render(){
    return (
        <div>
          <Page>
              { dataList.map( (v, i)=>(
                   <Comment name={v.name} comment={v.comment} key={i} />
              ) ) }

           // <div onClick={ ()=>this.handleClick() }>Load more</div>
              { this.state.idx > this.state.dataList.length ? 'No more comments' : 'Load more'}
          </Page>
        </div>
    )
}
```





