# 动画

- 过渡transition是一个交互效果，属性变化时，需要鼠标触发
- 动画值加载页面后会直接运行，自动触发
  - 关键帧，动画执行的每个步骤
    ```css
    .box2 {
        animation-name: identifier;     // 给box2元素加一个动画，设置动画名字为identifier
        animation-duration: infinite;
    }
        
    @keyframes identifier { // identifier关键帧的名字
        to {
            transform: rotate(0deg);
        }
        from {
            transform: rotate(720deg);
        }
    }
    ```
    - from = 0%，开始位置
    - to = 100%，结束位置
    - 中间可以加任何百分比位置

1. animation-name: name
2. @keyframes name {}
3. animation-duration
4. animation-delay
5. animation-timing-function
6. animation-iteration-count，重复执行次数，infinite，永远执行
7. animation-direction，动画执行方向
8. animation-play-state，设置动画执行状态
9. animation-fill-mode，动画填充模式

## animation-iteration-count
重复执行次数，可以infinite，永远执行

## animation-direction，动画执行方向
- normal，默认，从0%到100%执行，每次都是从头到尾执行
- reverse，从100%到0%执行
- alternate，先从0%到100%执行，多次执行时，回程动画为从后往前
- alternate-reverse，先从0%到100%执行，多次执行时，回程动画为从前往后


## animation-play-state
设置动画执行状态，控制动画停止播放
- paused，动画暂停
- running

## animation-fill-mode
- none，默认值，动画执行完毕，元素回到原来位置
- forwards，停止到元素的结束位置
- backwards，延迟等待时，元素就已经处于开始位置，动画结束后回到初始位置
- both，结合了forwards和backwards。延迟等待时，元素就已经处于开始位置，动画结束后留在结束位置




# 2. 雪碧图小人跑
![run](https://user-images.githubusercontent.com/26485327/74632696-ebbbfa80-519a-11ea-8b2f-de19a8d8864c.png)

```html
<head>
    <style>
        body {
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: aquamarine
        }
        
        .frame {
            /* 1536 × 256 */
            height: 256px;
            width: 256px;
            background-image: url('./source/run.png');
            animation-name: run;
            animation-duration: 1s;
            animation-timing-function: steps(6);
            animation-iteration-count: infinite;
        }
        
        @keyframes run {
            0% {
                background-position: 0 0;
            }
            100% {
                background-position: -1536px 0;
            }
        }
    </style>
</head>

<body>
    <div class="frame"></div>
</body>
```



