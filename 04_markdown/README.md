
```css
width: 50vw;
height: 50vh;
```
- 相对于浏览器窗口可视区域的50%

```css
width: 50%;
height: 50%;
```
- 相对于父元素的50%
-----
```css
.centerframe {
    width: 100vw;
    height: 100vh;
    background-color: coral;
    display: flex;            // 子元素默认水平排放
    flex-direction: column;   // 变更默认设置，变更为垂直放置
    justify-content: center;  // 子元素左右居中
    align-items: center;      // 子元素上下居中，不针对元素内文字
}
```
- align-items: center; 子元素上下居中，**不针对元素内文字**
    - 文字位置text-align: right;


-----
```css
.box1 {
    height: 50%;
    width: 50%;
    background-color: burlywood;
    align-self: flex-end;           // 针对自身，非针对子元素
}
```
- align-self，针对**自身元素相对于父元素**的位置，flex-end为元素本身在父元素的最右边或最下边（元素位于容器的结尾）
-----
```html
<style>
.box2 {
    height: 50%;
    width: 100%;
    background-color: cadetblue;
    word-break: break-all;    // 文字到达边框时换行，英文单词会在中间切断
    word-wrap: break-word;    // 文字到达边框时换行，以英文单词为单位，保证单词完整，换行
}
</style>

<div class="box2" contenteditable="true"></div>
```
-----
```css
blockquote p {
    color: gainsboro;               // 元素内文字颜色
    font-weight: 800;               // 元素内文字粗细
    text-align: right;              // 文字右对齐
    border-left: solid white 2px;
    padding-left: 30px;
}
```
-----

```html
<style>
    .right {
        width: 50vw;
        height: 100%;
        padding: 20px 40px;
        background-color: #212A33;
        color: aliceblue;
        display: flex;              // flex默认水平摆放子元素
        flex-direction: column;     // 变更水平摆放为竖直摆放
    }

    .counter {
        height: 20px;               // 进设置高度，不设置宽度，当此div内没有文字时，网页不显示此div
        font-size: 12px;            // 不显示此div，只显示父元素的div
        color: aliceblue;
        align-self: flex-end;       // 本元素相对于父元素.right的最后（最右）
    }

    .right-content * {              // 不显示宽高，当此div内没有文字时，网页不显示该div
        word-break: break-all;      // 不显示此div，只显示父元素的div
    }
</style>

<body>
    <div class="right">
        <div class="counter"></div>
        <div class="right-content"></div>
    </div>
</body>
```

<img width="826"  src="https://user-images.githubusercontent.com/26485327/74310132-63f37c00-4da7-11ea-899a-408908ffee60.png">
<img width="823" src="https://user-images.githubusercontent.com/26485327/74310144-681f9980-4da7-11ea-8112-c7ca238cc0ca.png">















