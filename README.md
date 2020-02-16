# 30days_frontend

# 定位position
- static，不开启定位
- relative
- absolute
- fixed
- sticky

开启定位后，需要搭配偏移量（top bottom left right）来使用，否则定位不生效。偏移量的设置类似margin，但是margin影响其周围元素的布局（挤开周围元素），但是偏移量不会挤开其他元素

**定位元素 + 定位位置**

## 1. 相对定位relative
- 参照物为开启定位之前的文档流中的位置，相对于自身之前的位置，进行left和top进行左右上下偏移
- 不会使元素脱离文档流，其他元素的位置不收影响。但是定位元素会提升一个层级，会覆盖掉文档流中其他的位置
- 类似于灵魂出窍，元素本身所在的位置保留空白，不会塌陷，起亚元素位置也不变，而自己确可以跑到其他位置上去

## 2. 绝对定位absolute
- 参考位置为，距离起最近的一个 开启了定位（相对或绝对）的父元素
  - 如果所有父元素都没有开启定位，则参考~~浏览器左上角~~，即根元素html元素
  - 若果其外层的直接父元素开启定位，在相对于其外层父元素进行偏移
  - **包含块**
    - 离当前元素最近的父元素，但是span，a属于行内元素，不算在其内。如div1-span-div2，div2的直接父元素为div1。
    - 绝对定位的包含块，就是距离其最近的开启了定位的祖先元素
    
- 开启绝对定位，不设置偏移量，元素本身位置不变
- 绝对定位元素脱离文档流，其下方元素会上移
- 回事元素提升一个层级，覆盖其后面的上移后的元素

> **一般来讲父元素开启relative相对定位，子元素开启absolute绝对定位。原因是相对定位不会影响父元素本身，而子元素开启绝对定位可以在其父元素内部进行移动**

水平方向，盒模型水平等式`LEFT + margin left + border left + padding left + width + padding right + border right + margin right + RIGHT == 父包含块content宽度`，开启绝对定位后，上面等式多了2个值，一个是left，一个是right。发生过度约束时
- 如果9个之中没有auto，自动调整right，满足上述等式。之前时margin right
- 存在auto（适用于margin，width，left，right），则自动将auto取匹配等式

垂直方向，盒模型垂直等式以前无需满足，开启绝对定位后，9个属性的等式则必须满足。没有auto则优先设置bottom，有auto值的属性则自动调整auto

> 父元素相对定位，让开启绝对定位的子元素居中，`margin: auto; left+right+top+bottom:0;`，必须设置定位偏移量=0，否则默认为auto，根据优先级，自动适应偏移量，而不是适应margin。因为偏移量在margin的外层



## 3. 固定定位fixed
- 特殊的绝对定位，大部分性质和绝对定位一样
- 唯一不同，固定定位永远参考于浏览器可视窗口的左上角
  - 可视窗口左上角 和 根元素html不同！当网页向下滑动时
    - 可是窗口左上角永远不动，用于网页最上端fixed导航条
    - 根元素html会随着网页向下移动，而向上被隐藏

## 4. 粘滞定位
- 类似相对定位，兼容性不好
- 不同，在粘滞定位元素到达某个位置（top）时，将其固定











