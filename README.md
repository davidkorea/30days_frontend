# 30days_frontend

## Tools
- JavaScript Event KeyCodes http://keycode.info
- Sets - Unicode® Character Table https://unicode-table.com/en/sets/

## Tips

- body设置min-width，防止无限被压缩没出现布局错乱








-----

1. flex
2. position
3. float
-----
# 1. 弹性盒 flex

> 不会高度坍塌！！！ 比float好用到不知道哪里去了

- 弹性容器，该元素开启`display: flex`
- 弹性元素：弹性容器的**直接子元素**，弹性元素也叫做弹性项
- 一个元素即可以弹性容器又可以是弹性元素，即直接父元素开启了flex，自己也开启了flex

## 1.1 弹性容器属性
> - **justify- 主轴属性**
> - **align- 侧轴/附轴属性**

#### 1.flex-direction
1. row，默认值，从左向右水平排列，主轴就是从左向右，侧轴垂直于主轴
2. row-reverse，从右向左水平排列，主轴就是从右向左
3. column，从上向下纵向排列
3. column-reverse，从下向上纵向排列

#### 2. flex-wrap
设置弹性元素是否在弹性容器中自动换行
1. warp，沿主轴换行
2. no-wrap
3. wrap-reverse

#### 3. flex-flow
对flex-direction和wrap的简写属性
- `flex-flow: flex wrap`

#### 4. justify-content 分配主轴剩余空间
1. flex-start，子元素沿着主轴起边排列
2. flex-end，沿着主轴重边排列
3. center，子元素沿主轴居中
4. space-around，空白平均分配给每一个子元素两侧，两个元素之间空白多，其实元素左边和结尾元素右边空白少
5. space-evenly，空白分配给每个子元素的单侧，各个元素之间的所有空白均相同
6. space-between，空白均匀分配在元素之间，开始和结尾没有空白

#### 5. align-content，侧轴剩余空间的排列
所有参数功能同上
- flex-start，搭配wrap可以实现元素自动换行时，**不留行间距，严丝合缝！！！（🌻拼图）**

#### 6. align-items，设置元素间侧轴排列

可以被弹性元素上个align-self属性覆盖

1. stretch，默认值，设置相同行之内的元素长度相同，长度短的子元素会按照同行最长元素的长度设置
2. flex-start，沿着侧轴起边对其排列
3. flex-end，沿着侧轴终边对其排列
4. center，居中对其
5. baseline，基线对其


## 1.2 弹性元素属性
适用于弹性容器的直接子元素
#### 1. align-self
和弹性容器的align-items作用一样，用来覆盖外层弹性容器align-items的设置，只为当前的单个子元素设置侧轴分布

#### 2. flex-grow 当父元素右多余空间时,弹性元素伸展系数，0为不伸展
父元素的剩余空间，会按照其直接子元素的flex-grow数值大小按比例缩放，每个子元素可以右不同的flex-grow数值
#### 3. flex-shrink 当父元素空间不足以容纳所有子元素时，弹性元素收缩系数，0为不收缩，默认1
所以子元素同样按比例收缩
#### 4. flex-basics，元素在主轴方向的基础长度，默认auto
- 主轴为横向，则代表宽度
- 主轴为纵向，则代表高度
将覆盖弹性容器中设置的宽或高

flex-grow，flex-shrink，flex-basics，三个参数为一组

#### 5. flex，替代flex-grow，flex-shrink，flex-basics的组合参数
1. initial = `0 1 auto`，grow 0，shrink 1，basic auto
2. auto = `1 1 auto`
3. none = `0 0 auto`

#### 6. order，弹性元素的前后排列顺序








# 2. 定位 position
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

## 5. 元素的层级z-index

- 如果相邻的几个元素都开启了定位，无论是相对还是绝对，元素会出现逐层覆盖的问题。 默认，最下面的元素层级越高
- **兄弟元素**：z-index 可以手动调整层级，整数数值越大，层级越高
- **父子元素**：父元素永远不会覆盖子元素，即使父元素设置了搞z-index，而子元素没有设置。就想水涨船高，父元素层级高了，自动带着子元素也高了，但是相对层级不变，子元素依然在父元素上面

应用：图片切换
1. 多张图片叠放在一起，配置absolute position，使得脱离文档流
2. js改变每个元素的z-index数值，使其更换叠放层级

<img width="826" src="https://user-images.githubusercontent.com/26485327/74600533-05434080-50ce-11ea-9bd2-5cada0673cc2.png">

```html
<head>
    <style>
        div {
            font-size: 40px;
        }
        
        .outer {
            height: 100vh;
            width: 100vw;
            background-color: thistle;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .pic {
            position: relative;
            height: 200px;
            width: 200px;
            border: 10px solid black;
            border-radius: 10px;
            box-shadow: 5px 5px 10px darkslategray;
        }
        
        .box {
            height: 200px;
            width: 200px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            z-index: 1;
        }
        
        .dots {
            /* 无需设置尺寸，靠里面内容撑起来 */
            display: flex;
            position: absolute;
            z-index: 999;
            top: 85%;   /*相对于父元素div.pic位置的绝对定位偏移量*/
            left: 10%;
        }
        
        .point {
            height: 15px;
            width: 15px;
            border-radius: 50%;
            background-color: aliceblue;
            margin: 5px;
        }
        
        .point:hover {
            background-color: lightblue;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
        $(function() {
            $('.box').click(function() {
                $(this).css('z-index', '0');
                console.log($(this));
            });
        })
    </script>
</head>

<body>
    <div class="outer">
        <div class="pic">
            <div class="box box1" style="background-image: url('./sunflower/1.png');">1</div>
            <div class="box box2" style="background-image: url('./sunflower/2.png');">2</div>
            <div class="box box3" style="background-image: url('./sunflower/3.png');">3</div>
            <div class="dots">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
            </div>
        </div>
    </div>
</body>
```
- 下面小圆点的布局，最好是能够在图片的范围之内定位，而不是相对于网页的边框。因此需要给所有图片外面加一个div来放所有的图片，这就是div.pic的由来
- div.pic为什么不能头div.outer来代替，是因为outer的宽高是整个屏幕，而不是图片
- 小圆点在图片内部布局，可以是用百分比，这样就能时刻保持小圆点和图片的相对位置不变

更简单设置，使用flex！参考上面的flex，万能flex
- order 可以更换元素顺序
```diff
  .pic {
+     display: flex
      position: relative;
      height: 200px;
      width: 200px;
      border: 10px solid black;
      border-radius: 10px;
      box-shadow: 5px 5px 10px darkslategray;
  }

  .dots {
      display: flex;
      position: absolute;
      z-index: 999;
-     top: 85%;   /*相对于父元素div.pic位置的绝对定位偏移量*/
-     left: 10%;
+     align-self: flex-end;
  }
```
- pic是父元素，弹性容器
- dots是直接子元素，弹性元素
  - align-self，用于覆盖父元素的align-items，只针对自己设置侧轴/附轴排列

