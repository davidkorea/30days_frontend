# Github Trending

### 1. github-trending-1.html
<img width="1245" src="https://user-images.githubusercontent.com/26485327/74530850-15401080-4f66-11ea-9b4c-03846ee5fe00.png">

### 3. github-trending-2.html
- 用百分比定义宽高，可以实现元素大小不变，布局变化
<img width="1094" src="https://user-images.githubusercontent.com/26485327/74530844-1113f300-4f66-11ea-902a-d5894fab70ce.png">
<img width="737" src="https://user-images.githubusercontent.com/26485327/74542626-ebdfae80-4f7e-11ea-8a8c-9982905edc45.png">

### 3. github-trending-3.html
- 除了做外层元素width 100vw，height 100vh之外，其他内层元素的长宽均使用相同的单位vw，包括文字大小front-size也是用vw，这样可以跟随浏览器大小等比例缩放，布局相对位置不变
    
<img width="1155"  src="https://user-images.githubusercontent.com/26485327/74542001-aff81980-4f7d-11ea-90eb-c79b48f85dd0.png">
<img width="732" src="https://user-images.githubusercontent.com/26485327/74542659-f732da00-4f7e-11ea-8dee-f5de915838df.png">




# 1. hacker news


## CSS
```html
<html>

<head>
    <style>
        body {
            background-color: black;
        }
        
        .centerframe {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .base {
            display: flex;
            flex-direction: column;
            /* 不能设置子元素居中，否则justify-content: space-between;失效，
            所有元素挤到中间，没有刘空白 */
            /* justify-content: center;
            align-items: center; */
            padding: 10px;
            /* 视觉上的居中，在元素周围padding，
            这样可以省区在base外面在嵌套一层div并设置各种居中，这种方法就写死了
            如果可以自动根据下层元素的长度来控制会更好 */
        }
        
        .header {
            height: 86px;
            width: 100%;
            /* background-color: white; */
            background-image: url('//res.cform.cn/unzip/1581318351549_5489170958335894/confuse.png');
            background-repeat: no-repeat;
            /* 背景图片居中，用之前的都无小 justify-content: center;和align-items: center; */
            background-position: center;
            margin-bottom: 50px;
        }
        
        .item {
            display: flex;
            /* 此处不设置居中，但是依然显示出来是居中
            因为是以元素为中心，周围都加了padding，所以视觉效果也是居中 */
            /* align-items: center; */
            /* 将子元素之间水平间隔开摆放 */
            justify-content: space-between;
            color: aliceblue;
            background-color: #18141D;
            padding: 40px 20px 40px 20px;
            border-radius: 10px;
            margin-bottom: 10px;
            box-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.2);
        }
        
        .item:hover {
            transition: transform 0.2s ease;
            transform: scale(1.02);
            border-color: orange;
            border-width: 2px;
            border-style: solid;
            box-shadow: 0px 0px 5px 0px rgba(255, 132, 0, 1);
            box-shadow: 0px 0px 37px -4px rgba(255, 132, 0, 0.66);
        }
        
        .item>h5 {
            color: orange;
        }
    </style>
    <script></script>
</head>

<body>
    <div class="centerframe">
        <div class="base">
            <div class="header"></div>
            <div class="item">
                <h3>Google pushed to take action against Android bloatware</h3>
                <h5>▲123</h5>
            </div>
            <div class="item">
                <h3> to take action against Android bloatware</h3>
                <h5>▲123</h5>
            </div>
            <div class="item">
                <h3>gainst Android bloatware</h3>
                <h5>▲123</h5>
            </div>
            <div class="item">
                <h3>Google pushed to take action against Android bloatware</h3>
                <h5>▲123</h5>
            </div>
            <div class="item">
                <h3>Google pushed to take action take action take action take action take action against Android bloatware</h3>
                <h5>▲123</h5>
            </div>
        </div>
    </div>

</body>

</html>
```
