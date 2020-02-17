# 过渡和动画
1. transform，单一变化
2. transition，过渡，单次循环变化
3. animation，持续循环变化
4. ：hover，没有过度

# 1. transition
当一个属性发生变化时的切换方式（一下子变换，逐渐变换）

- `transition-property: all;`执行过度的属性，如果设置下面的属性，默认可以省略这一条
- transition-delay: ;
- transition-duration: ;持续时间
- transition-timing-function: ;

**语法小课堂**
```css
.box1:hover .box2 {       // 鼠标停留在box1后，设置box2的样式
    margin-left: 600px;
}
```

```javascript
$('.box1').click(function() {
      $('.box2').toggleClass('boxtransition'); // class名不能加前面的点
  })
```

## transition-property
- 大部分属性，有数值的元素属性，都可以变化。多个属性使用逗号隔开，所有属性都变化则使用all
- 过渡时，必须从一个有效值到另一个有效值过渡，不填写数值的默认为auto，auto不能过渡
