

# 伪类

不是元素上真正加上去的class，而是虚拟的，用于描述元素的特殊状态
- 被点击的元素
- 鼠标移动入的元素

1. `:first-child`，`:last-child`，第一个，最后一个子元素，不用手动在li上添加class
  ```css
  ul > li.first-child{
    
   }
  ```
2. `.nth-child(?)`，第几个子元素
  - odd 或 2n+1全部奇数子元素
  - even 或 2n全部偶数子元素
  - n表示全部子元素
