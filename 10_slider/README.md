


- https://cssgradient.io
- https://feathericons.com
  ```html
   <script src="https://unpkg.com/feather-icons"></script>
   <body>
      <i data-feather="circle"></i>
     
      <script>
        feather.replace()
      </script>
   </body>
  ```

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
  
  
  
  
  
  
  
  
