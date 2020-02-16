# 30days_frontend

## 定位position
- static，不开启定位
- relative
- absolute
- fixed
- sticky

开启定位后，需要搭配偏移量（top bottom left right）来使用，否则定位不生效。偏移量的设置类似margin，但是margin影响其周围元素的布局（挤开周围元素），但是偏移量不会挤开其他元素

**定位元素 + 定位位置**

### 1. 相对定位relative
- 参照物为开启定位之前的文档流中的位置，相对于自身之前的位置，进行left和top进行左右上下偏移
- 不会使元素脱离文档流，其他元素的位置不收影响。但是定位元素会提升一个层级，会覆盖掉文档流中其他的位置
- 类似于灵魂出窍，元素本身所在的位置保留空白，不会塌陷，起亚元素位置也不变，而自己确可以跑到其他位置上去

### 2. 绝对定位absolute
