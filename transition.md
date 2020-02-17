# 过渡
1. transform，单一变化
2. transition，过渡，单次循环变化
3. animation，持续循环变化
4. :hover，没有过度

# 1. 过渡 transition
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
    - cubic-bezier(.36,1.07,.53,-0.46)，如下图，下加速向前，在往回倒一点，再次加速向前
<img height="400" width="300" src="https://user-images.githubusercontent.com/26485327/74625124-2d8e7600-5186-11ea-9fe1-51685f2a8404.png">

- steps(步数，start/end)，分步执行动画效果
    - duration按照步数分开后的时间，时间开始马上旧动作，还是时间结束在动作
    
## 1.4 transition-delay
过渡效果的延迟，等待响应时间后再执行动作
    
    
## 1.5 transition
- 可以直接设置以上4个属性，没有顺序要求
- 但是，设置延迟delay时，第二个时间为延迟时间，第一个为duration持续时间
    
    
    
# 2. 一图右多个分步动作，连成动画
- 画面显示一张图片的一个动作的尺寸
- 当触发时，背景图片移动一个动作尺寸的偏移量，实现动作切换
    - 使用`transition-timing-function: steps(4);`，数值每分动作的个数

![Feb-17-2020 14-23-09](https://user-images.githubusercontent.com/26485327/74628613-11440680-5191-11ea-82ac-37a0bda88568.gif)

```html
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .outer {
            width: 100vw;
            height: 100vh;
            background-color: cornflowerblue;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .frame {
            height: 70vh;
            width: 36vh;
            border: 1px solid black;
            border-radius: 3%;
            box-shadow: 3px 3px 6px darkslateblue;
            background-image: url('./source/0.png');
            background-size: 400% 100%;
            transition-duration: 2s;
            transition-timing-function: steps(4);
        }
        
        .frame:hover {
            background-position: -400%;
        }
    </style>
</head>

<body>
    <div class="outer">
        <div class="frame"> </div>
    </div>
</body>
</html>
```












