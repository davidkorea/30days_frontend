# 过渡和动画
1. transform，单一变化
2. transition，过渡，单次循环变化
3. animation，持续循环变化
4. :hover，没有过度

# 1. transition
当一个属性发生变化时的切换方式（一下子变换，逐渐变换）

- `transition-property: all;`执行过度的属性，如果设置下面的属性，默认可以省略这一条
- transition-duration: ;持续时间
- transition-timing-function: ;
- transition-delay: ;

**语法小课堂**
```css
.box1:hover .box2 {       // 鼠标停留在box1后，设置box1内部class为box2的样式
    margin-left: 600px;
}
-------------------------
.box1:hover div {       // 鼠标停留在box1后，设置box1内部所有div的样式
    margin-left: 600px;
}
```

```javascript
$('.box1').click(function() {
      $('.box2').toggleClass('boxtransition'); // class名不能加前面的点
  })
```

## 1.1 transition-property
- 大部分属性，有数值的元素属性，都可以变化。多个属性使用逗号隔开，所有属性都变化则使用all
- 过渡时，必须从一个有效值到另一个有效值过渡，不填写数值的默认为auto，auto不能过渡

## 1.2 transition-duration
- 持续时间，可以使用s和ms，1s=1000ms
- 可以对不同的元素设置不同时间
    ```css
    .box2 {
        height: 100px;
        width: 100px;
        background-color: skyblue;
        transition-property: heigt, width;  
        transition-duration: 1s, 2s;         // 分别对上面的2个属性设置时间   
    }

    .box1:hover .box2 {
        height: 200px;        // 上面2个属性的新值
        width: 300px;
    }
    ```
    
## 1.3 transition-timing-function
过渡的时序函数，在duration指定的动作时间内，过渡效果具体如何执行，如变化速度

参数：
- ease，默认，慢速开始，在加速，最后减速
- linear，匀速运动
- ease-in，慢速开始，一直加速到结束
- ease-out，快速开始，一直减速到结束
- ease-in-out，先加速，后减速，和ease差不多，但是加速比ease快
- cubic-bezier贝塞尔曲线 [https://cubic-bezier.com/](https://cubic-bezier.com/)
    - linear = cubic-bezier(0,0,1,1)，前两个为起始点坐标，后两个为结束点坐标，红色绿色两个点
    
    <img width="333" src="https://user-images.githubusercontent.com/26485327/74624968-7134b000-5185-11ea-8c2a-709e0ad33626.png">

    
    
    
    
    
    
    
    
    
    
    
    













