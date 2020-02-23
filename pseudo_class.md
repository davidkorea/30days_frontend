

# 伪类

不是元素上真正加上去的class，而是虚拟的，用于描述元素的特殊状态
- 被点击的元素
- 鼠标移动入的元素



## 1. 无论元素类型
1. `:first-child`，`:last-child`，第一个，最后一个子元素，不用手动在li上添加class
  ```css
  ul > li.first-child{
    
   }
  ```
2. `.nth-child(?)`，第几个子元素
  - odd 或 2n+1全部奇数子元素
  - even 或 2n全部偶数子元素
  - n表示全部子元素

## 2. 相同元素类型
- `first-of-type`
- `last-of-type`
- `nth-of-type`

功能和上面的类似，但是同类型元素排序

## 3. 否定
将符合条件的元素，在选择器中去除
```css
li > li:not(nth-child(3)){
  // 不论元素类型，排除第三个子元素
}
```
```css
li > li:not(nth-of-type(3)){
  // 仅对li元素排序，排除第三个li子元素
}
```

## 4. 超链接伪类

1. 访问过的链接
  ```css
  a.visited{
    color: orange;
  }
  ```
  - 由于隐私的原因，visited只能修改链接颜色，除此之外都不能更改

2. 没有访问过的链接
  ```css
  a.link{
    color: red;
  }
  ```
  - link表示没访问过的链接，或者叫正常的链接
  - 可以更改字体大小等其他属性

## 5. 鼠标
1. 移入效果 :hover
2. 点击效果 :active












