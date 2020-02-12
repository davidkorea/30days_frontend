
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

```css
.centerframe {
    width: 100vw;
    height: 100vh;
    background-color: coral;
    display: flex;            // 子元素默认水平排放
    flex-direction: column;   // 变更默认设置，变更为垂直放置
    justify-content: center;  // 子元素左右居中
    align-items: center;      // 子元素上下居中
}
```

```css
.box1 {
    height: 50%;
    width: 50%;
    background-color: burlywood;
    align-self: flex-end;           // 针对自身，非针对子元素
}
```
- align-self，针对**自身元素相对于父元素**的位置，flex-end为元素本身与父元素右对齐摆放（元素位于容器的结尾）

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

```css
blockquote p {
    color: gainsboro;               // 元素内文字颜色
    font-weight: 800;               // 元素内文字粗细
    border-left: solid white 2px;
    padding-left: 30px;
}
```

















