

# 0. Tools
- JavaScript Event KeyCodes http://keycode.info
- Sets - Unicode® Character Table https://unicode-table.com/en/sets/


### 3d flip
```html
<style>
.item {
    transform-style: preserve-3d;
    transition: all 0.3s linear;
}
  
.item-front {
    height: 250px;
    width: 200px;
    /* 隐藏背面，否则反转过来会显示正面图片的镜像图片*/
    backface-visibility: hidden;  
}

.item-back {
    /* 减去正面的高度，否则会上下显示正反面，正面外空，反面会显示在下面 */
    margin-top: -250px;   
    /* 不用上面方法，就开启绝对定位，这样反正面之间贴合没有缝隙！！！ */
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
}
</style>


<div class="item">
  
    <div class="item-front">
        <div class="pic"></div>
        <div class="name">Microphone Kit</div>
    </div>
  
    <div class="item-back">
        <div class="heart">like</div>
    </div>
  
</div>
```



# 1. Bank Card

![Feb-22-2020 21-45-43](https://user-images.githubusercontent.com/26485327/75093445-b8270900-55bc-11ea-8ce0-740793dd5663.gif)


# 2. AliExpress
![Feb-22-2020 21-49-46](https://user-images.githubusercontent.com/26485327/75093503-4602f400-55bd-11ea-8a43-f4b9b367e8a4.gif)

<img width="680" alt="截屏2020-02-22下午9 51 28" src="https://user-images.githubusercontent.com/26485327/75093533-7cd90a00-55bd-11ea-82b8-825395e88872.png">


- jQuery阻止冒泡                
  - `e.stopPropagation();` 

- text-decoration

  |值|描述|
  |-|-|
  |none|默认。定义标准的文本，没有样式|
  |underline|下划线，定义文本下的一条线。下划线 也是我们链接自带的|
  |overline|顶线，定义文本上的一条线|
  |line-through|删除线，定义~~穿过文本~~下的一条线|

- 保留小数点后几位 
  - Number.toFixed(2)，保留2位小数
  - Math.floor(Numbver)，保留整数
  
