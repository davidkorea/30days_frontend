# 2. Pic puzzle

- pic-puzzel-1.html

![Feb-13-2020 23-11-19](https://user-images.githubusercontent.com/26485327/74448827-9a6bec80-4eb6-11ea-9ca7-f2193222f711.gif)

- pic-puzzel-2.html
    - 精确拿出图片的idx，再次放回时，匹配答案顺序
    
![Feb-16-2020 20-57-09](https://user-images.githubusercontent.com/26485327/74605026-fa54d400-50fe-11ea-86a6-271aa7cc454c.gif)



# 1. Word puzzle
> - given word乱序, underscore shuffle?

![Feb-13-2020 15-25-10](https://user-images.githubusercontent.com/26485327/74410953-2e1cc900-4e75-11ea-82c1-ea357b0508ab.gif)

1. given从list中取出单词显示，同时sink匹配字母长度
2. 点击given中的字母元素后，given中删除该字母，并在sink中显示字母
3. 单击submit，如果sink的文本和步骤一取出的文本一直，则在result div中显示结果
4. 按钮，一开始只显示submit，不显示reload，提交后，只显示reload，不显示submit
5. 单击reload后，重新执行上述4个步骤。需要将上述4个步骤封装成函数，并做相应代码优化
    - 很多地方使用到同一个元素，都需要重新写`$('.sink')`，在函数开头将所有用到的元素先定义好
    - 但是`var $char = $('.char')`不能在函数开头定义，因为页面此时还没有添加char元素，获取为空，下面不能使用$char这个变量
        - 需要在given中被添加了字母char元素后再定义
6. 单击reload后
    - 清空上一次的sink，`$sink.empty();`
    - 清空 result，`$result.empty();`
    - 清空上一次的given，`$given.empty();`
    - 重新显示submit，隐藏reload
    
    ![](https://user-images.githubusercontent.com/26485327/74403890-cca02e80-4e63-11ea-9887-aaee0c7aedc8.gif)

7. 将元素上的click事件更改为`one('click', function(){})`，执行完一次后，将事件与元素解绑

8. 散花特效
    - 提交成功后散花`confetti.start();`
    - 函数刚开始，reload时停止散花`confetti.stop();`

# JQuery
- 引用jquery库文件

1. window.onload()的三中jquery方式
```javascript
$(document).ready(function() {
    alert('hi');
})
```
```javascript
$().ready(function() {
    alert('hi');
})
```
```javascript
$(function() {
    alert('hi');
})
``` 

2. one()方法，元素绑定的事件执行一次后解绑，即一次使用后失效
```javascript
$('.click').one('click', function() {
    alert('hi');
});

<div class="click btn">click</div>
```
3. 元素显示，隐藏，清空
```javascript
$submit.show();     // display 默认显示，不用设置
$reload.hide();     // style="display: none;"
$sink.empty();      // 清空
```
4. pop()，删除list中最后一个元素，并返回该元素

5. appendTo()
```javascript
$char.click(function() { 
    $(this).appendTo($sink);
})
```
- 不能直接使用this，jquery中需要$(this)
- 将$(this)中的元素删除掉，并添加执$sink元素内部
- `$('.a').appendTo($('.b'));`，把a添加至b








# CSS

<img width="748" src="https://user-images.githubusercontent.com/26485327/74399462-dde23e80-4e55-11ea-9014-125e2adbce88.png">

```html
<html>

<head>
    <style>
        body {
            margin: 0;
            background-color: lightsteelblue;
        }
        
        .outer {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .sink {
            /* box-sizing: border-box; */
            -webkit-box-shadow: inset 3px 2px 5px 1px rgba(0, 0, 0, 0.22);
            -moz-box-shadow: inset 3px 2px 5px 1px rgba(0, 0, 0, 0.22);
            box-shadow: inset 3px 2px 5px 1px rgba(0, 0, 0, 0.22);
            -webkit-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            -moz-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            border-radius: 3px;
            display: flex;
            flex-direction: row;
            background-color: #F3F3F3;
            height: 60px;
            border-width: 6px;
            border-color: white;
            border-style: solid;
            margin: 20px;
        }
        
        .given {
            height: 60px;
            border: 1px solid whitesmoke;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 20px;
        }
        
        .char {
            width: 60px;
            height: 60px;
            background-color: whitesmoke;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid lightgray;
        }
        
        .btn {
            -webkit-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            -moz-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            height: 30px;
            border-radius: 3px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: lightskyblue;
            border: 2px solid whitesmoke;
            color: white;
            font-weight: 800;
            font-family: Arial, Helvetica, sans-serif;
            padding: 5px;
            margin: 10px;
        }
        
        .result {
            margin: 10px;
            font-size: 30px;
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
    <script></script>
</head>

<body>
    <div class="outer">
        <div class="sink"></div>
        <div class="result">Congras</div>
        <div class="submit btn">Submit</div>
        <div class="reload btn">Reload</div>
        <div class="given">
            <div class="char">a</div>
            <div class="char">a</div>
        </div>
    </div>
</body>

</html>
```
