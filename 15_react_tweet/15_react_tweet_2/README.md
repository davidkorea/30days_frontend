# 15_react_tweet_1


组建嵌套传递
```javascript
<App>
   <Phone>
      const list = [
        {id:1, name:'david', text:'aassdf', comment:1, share:7, like:12, liked:false}
      ]
      const handleLike = id => {
        // 根据id取出对应数据
        if(liked){
            liked = false
            like -= 1
        }else{
            liked = true
            like += 1
         }
      }
      
      list.map(v=><Tweet value={v} handleLike={handleLike} key={v.id} />)
    
   </Phone>
</App>
```

```javascript
<Phone>
   {props.children}
</Phone>
```

```javascript
<Tweet>
   <div onclick={()=>{props.handleLike(props.value.id)}}></div>
</Tweet>
```




