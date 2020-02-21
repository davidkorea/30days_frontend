


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

- 如何根据图片数量，自动移动偏移量
  - `$('.__1').css('margin-left, function(i, v){}')`
    - `i`就是所选择的这个css属性margin-left的索引,
    - `v`是margin-left属性对应的当下的值
  - 根据当前margin-left的数值来判断是否要进行下一轮的偏移
