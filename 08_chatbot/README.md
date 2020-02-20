
- 移动端适配：[chatbot mobile page](http://www.davidkorea.com/chatbot-mobile.html)
-----

## 1.
`jquery-scrollTo` library: https://www.bootcdn.cn/jquery-scrollTo/
- scroll to the bottom of the div
## 2. 
- `flex-direction: reverse-row;`，flex布局内的子元素横向倒序排列，前面的元素会被放到最右边

## 3. 
- 慎用preventDefault！！！否则已使用就出错，因为阻止了默认动作
  - 如果在contentEditable的Div上直接开启preventDefault，那么输入文字，删除文字会出现问题
  ```javascript
  $('.inputarea').keydown(function(e) {
    if (e.key == 'Enter') {
        // 光标恢复位置，不能放在if外面,否则时间一响应就被这个禁止，不能退格
        e.preventDefault();
        ...
  });
  ```
