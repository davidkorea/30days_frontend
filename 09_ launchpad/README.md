# 1. DJ LaunchPad

## 1.1 最小实现
1. 搭建hmtl css框架
    - background-color：radial-gradient（），渐变色
    - 立体视角perspective，transform rotateX沿x轴转动
2. js功能
    - 按键后，出现按钮led按下效果，window.setTimeout延迟100ms自动取消led效果。注意window.setTimeout里面的this是window，不是按钮
    - 按钮按下，播放音乐
    
![Feb-19-2020 14-16-48](https://user-images.githubusercontent.com/26485327/74807080-898e0180-5322-11ea-8160-1167576f2821.gif)

```html
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
            var $this = $(this); // 当前被按下的这个按钮，而不是所有class为key的按钮
            $this.addClass('keyled');
            player.play();
            window.setTimeout(function() {
                $this.removeClass('keyled')
            }, 100)
        })
    })
</script>

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

## 2. 功能完善

### 2.1 补全64个按键
<img width="321" alt="截屏2020-02-19下午2 30 09" src="https://user-images.githubusercontent.com/26485327/74807808-56e50880-5324-11ea-8c73-6dc30e71cadc.png">

```javascript
var keys = new Array(64)；   // 创建64个空位的空数组
for (var key of keys) {
    $('.frame').append('<div class="key"></div>');
}
```

## 2.2 每个按键不同音乐

- 将每个音乐的名字，放到每个按键div元素的css中
- 通过jq获取div的css name来匹配对应音乐
- 需要设置一个obj字典数据结构，key=class上显示的音乐名，value=实际的音乐`Howl({src:['real mp3 file']})`
- 这个obj一共需要右64个键值对

```javascript
$(function() {
    var keyList = [
        {name:'workit', type:'once'},
        {name:'makeit', type:'once'},
        {name:'doit', type:'once'},
        {name:'mqkesus', type:'once'},
        {name:'beat', type:'hold'},
    ];

    // 1. 补全64按键，直接根据上面的按键列表中音乐的个数来补全按键，将音乐名字添加到对应按键的class中
    for (var key of keyList) {
        var music = key.name;
        $('.frame').append(`<div class="key ${music}"></div>`);
    }

    function playMusic(music) {
        var player = new Howl({
            src: [`https://mugglecoding-website.oss-cn-beijing.aliyuncs.com/fe/${music}.m4a`]
        });
        player.play();
    }

    $('.key').click(function() {
        var $this = $(this); // 当前被按下的这个按钮，而不是所有class为key的按钮
        $this.addClass('keyled');
        var music = $this.attr('class').split(' ')[1];
        playMusic(music);
        window.setTimeout(function() {
            $this.removeClass('keyled')
        }, 100)
    })
})
```
- 根据按键类型的class来获取按键，并执行不同操作，当然这些播放类型也要放到按键div的class中，就和歌名放到class中一样
    - once，音乐很短，按一下，很快就播放完成
    - hold，音乐很长，按下一直播放，再按一下停止播放，类似唱片圆盘的开始和停止

