

- `jquery-scrollTo` library: https://www.bootcdn.cn/jquery-scrollTo/
  - scroll to the bottom of the div

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
