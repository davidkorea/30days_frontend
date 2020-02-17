# 变形 transform

- 当前元素变形，不会影响周围其他元素布局，即不会挤开其他元素
- transform通过函数来实现效果

![1581856692638_37384929069040007](https://user-images.githubusercontent.com/26485327/74643913-73f8ca80-51b0-11ea-90d2-634bcd323a41.png)

# 1. translate() 沿轴平移
有点像margin，但是不影响别人的布局，会覆盖其他元素
- translateX
- translateY
- translateZ

平移元素可以执行平移像素或百分比
- 百分比大小为相对于自身尺寸，translateX(50%)，平移自身x轴尺寸的50%
    - 搭配transition和transform，通过过渡来设置变形的快慢
    ![Feb-17-2020 16-27-38](https://user-images.githubusercontent.com/26485327/74636234-89ff8e80-51a2-11ea-9f5a-82959829ff0c.gif)

    ```css
    .box1,
    .box2 {
        height: 250px;
        width: 150px;
        background-color: whitesmoke;
        margin: 10px;
        transition: transform 2s;     // 通过过渡来设置变形的快慢
    }

    .box1:hover {
        transform: translateY(-10%);
        box-shadow: 5px 5px 5px gray;
    }
    ```
- translateZ，需要搭配html的视距perspective属性来使用，否则无放大缩小效果

# 2. rotate() 沿轴旋转
需要设置视距perspective，否则没有近大远小的透视效果
- rotateX
- rotateY
- rotateZ




# 3. scale() 沿轴缩放
不搭配transition使用，就是显示缩放之后的静态尺寸，搭配使用就是一个缩放动画

- scale，双方向
- scaleX
- scaleY
- scaleZ


# 4. transform-origin() 原点缩放
更改缩放的基准点/参考点，默认值是center，以中心点为基准缩放








