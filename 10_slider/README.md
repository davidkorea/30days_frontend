


- https://cssgradient.io
- https://feathericons.com
  ```html
  <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>

   <body>
      <i data-feather="circle"></i>
     
      <script>
        feather.replace()
      </script>
   </body>
  ```

# 2. Web-Ton
![Feb-21-2020 21-58-15](https://user-images.githubusercontent.com/26485327/75040298-5fd90400-54f5-11ea-9b2d-400ed6efa1f7.gif)




# 1. slider
## 如何根据图片数量，自动移动偏移量
- `$('.__1').css('margin-left, function(i, v){}')`
  - `i`就是所选择的这个css属性margin-left的索引,
  - `v`是margin-left属性对应的当下的值
- **使用当前margin-left的数值减去600px即可**
- 边界判断
  ```javascript
  if (Math.abs(parseInt(v)) == (imgList.length - 1) * 600) {
      return 0
  } else {
      return parseInt(v) - 600
  }
  ```
  - 如果偏移量等于（图片列表长度-1）* 600时，则将偏移量重置为0，从第一张再重新开始
  
  ```javascript
  $('.prev').click(function() {
      $('.__1').css('margin-left', function(i, v) {
          if (Math.abs(parseInt(v)) != 0) {
              return parseInt(v) + 600
          }
      })
  })
  ```
  - 如果偏移量不等于0，则+600px
  
## 在图片切换的过程中，再单击下一张或前一张，出现错误

![Feb-21-2020 11-51-03](https://user-images.githubusercontent.com/26485327/75002771-828cfd80-54a0-11ea-963e-a2020b4d84c7.gif)

- 切换的时间为image元素的transition的秒数，在这个时间内多次点击按钮，会造成出现下一页空白
- 如果margin-left的当前值不是600的倍数，则禁止操作。满足条件则偏移两增减
```javascript
$('.prev').click(function() {
    if (parseInt($('.__1').css('margin-left')) % 600 != 0) {
        e.preventDefault();
    } else {
                    $('.__1').css('margin-left', function(i, v) {
                        if (Math.abs(parseInt(v)) != 0) {
                            return parseInt(v) + 600
                        }
                    })
    }
})
```
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
