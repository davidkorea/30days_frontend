
# Markdown
- jquery
- jqury ui
- marked

<img width="1183" src="https://user-images.githubusercontent.com/26485327/74316105-d1a5a500-4db3-11ea-921e-014b2958fd52.png">


# JS
```javascript
window.onload = function() {
    $('.left').sortable();              // jquery ui，可以拖拽元素位置顺序
    
    marked.setOptions({
        breaks: true                    // 用于quote断行
    });
    
    $('.left').keyup(function() {
        var text = document.querySelector('.left').innerText;
        $('.right-content').text(marked(text));
        // .html 而不用.text，是因为marked返回的时带有样式的html代码
        // 如果使用.text则会直接展示被marked转换后的裸html
        var count = $('.left').text().length;
        $('.count').text('Chars in total: ' + count);
    })
};
```
- sortable，拖拽
    - 该方法来自jquery ui，之前也属于jquery，后被拆分出来，但需要依赖jquery库来运行
    - **问题**：拖拽了之后，右边不跟随变化
- 统计left字数，和获得left文字显示给right，用不一样的方式
    - jquery的text()方法自动将文本中的换行\n取消掉了，导致右边显示时不能自动换行，即使开启了上见面时setOptions，也不能换行
    - jquery text()方法的设计初衷就是获取一个干净的文本，因此需要使用原生js获取文本
    - 而统计字数，用jquery是因为代码简洁
-  右边显示时，用.html 而不用.text，是因为marked返回的时带有样式的html代码
    - 如果使用.text则会直接展示被marked转换后的裸html
    
# CSS
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
- 四个是一个组合，display：flex，flex-direction，justify-content，align-items
    - 元素内部子元素上下居中，**包括标签元素和文字元素**
- 文字水平位置text-align: right / center;


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

```css
.left {
    width: 50vw;
    height: 100%;
    padding: 40px;                  // 上下左右均40px！！
    white-space: pre-wrap;
    white-space: pre-line;
    background-color: aliceblue;
}

.right {
    width: 50vw;
    height: 100%;
    padding: 20px 40px;             // 上下20px，左右40px！！
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
```
```html
<div class="right">
    <div class="counter"></div>
    <div class="right-content"></div>
</div>
```

<img width="826"  src="https://user-images.githubusercontent.com/26485327/74310132-63f37c00-4da7-11ea-899a-408908ffee60.png">
<img width="823" src="https://user-images.githubusercontent.com/26485327/74310144-681f9980-4da7-11ea-8112-c7ca238cc0ca.png">


由于left和right的上下padding不一致，导致两个div无法在底端对齐

<img width="781" alt="截屏2020-02-12下午4 12 56" src="https://user-images.githubusercontent.com/26485327/74315547-a1a9d200-4db2-11ea-98e6-c46ddcf1f00b.png">
<img width="784" alt="截屏2020-02-12下午4 13 09" src="https://user-images.githubusercontent.com/26485327/74315557-a53d5900-4db2-11ea-87e7-759f6b45a648.png">

因此，需要调整left和right的上下padding
```css
.left {
    width: 50%;
    height: 100%;
    background-color: whitesmoke;
    padding: 40px;
}

.right {
    width: 50%;
    height: 100%;
    background-color: darkslategray;
    color: whitesmoke;
    padding: 10px 40px 70px 40px;       // 上左下右， 是的上下加总依然为40+40=80px
    display: flex;
    flex-direction: column;
}
```











