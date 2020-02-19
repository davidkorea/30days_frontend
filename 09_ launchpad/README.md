# 1. DJ LaunchPad

## 1.1 最小实现
1. 搭建hmtl css框架
2. background-color：radial-gradient（），渐变色
3.
```html
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* background: rgb(0, 23, 140); */
            background: radial-gradient(circle, rgba(0, 23, 140, 1) 0%, rgba(53, 16, 93, 1) 50%, rgba(36, 36, 36, 1) 90%);
        }
        
        .frame {
            height: 480px;
            width: 480px;
            border-radius: 10px 10px;
            background-color: #131313;
            display: flex;
            flex-wrap: wrap;
            /* align-items: flex-start; */
            padding: 10px;
            transform: perspective(900px) rotateX(10deg);
        }
        
        .bottom {
            width: 500px;
            height: 50px;
            background-color: #1f1818;
            opacity: .7;
            border-radius: 2px 2px;
            transform: perspective(900px) rotateX(-50deg);
        }
        
        .key {
            height: 50px;
            width: 50px;
            background-color: whitesmoke;
            border-radius: 10% 10%;
            margin: 5px;
        }
        
        .keyled {
            /* background: rgb(129, 245, 149); */
            background: radial-gradient(circle, rgba(129, 245, 149, 1) 33%, rgba(181, 215, 153, 1) 80%);
            transform: scale(0.96);
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.3/howler.min.js"></script>
    <script>
        $(function() {
            var player = new Howl({
                src: ['https://mugglecoding-website.oss-cn-beijing.aliyuncs.com/fe/makeit.m4a']
            });

            $('.key').click(function() {
                var $this = $(this);
                $this.addClass('keyled');
                player.play();
                window.setTimeout(function() {
                    $this.removeClass('keyled')
                }, 100)
            })
        })
    </script>
</head>

<body>
    <div class="frame">
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
    </div>
    <div class="bottom"></div>
</body>
```
