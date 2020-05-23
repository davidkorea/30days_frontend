# 15_react_tweet_1


组建嵌套传递
```html
<App>
   <Phone>
      const list = [
        {id:1, name:'david', text:'aassdf', comment:1, share:7, like:12, liked:false}
      ]
      const handleLike = id => {
        ...
      }
      
      list.map(v=><Tweet key={v.id} />)
    
   </Phone>
</App>
```
