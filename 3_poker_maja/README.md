
# Answer

## 1. Poker
```html
<html>

<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js" integrity="sha256-G7A4JrJjJlFqP0yamznwPjAApIKPkadeHfyIwiaa9e0=" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="styles.css"> 
</head>


<body>
  <div class="pool">


  </div>
  <div style="margin-top:45px" class="dealer card"></div>

  <script>
    function sendCard(){
      // var randomNum = Math.floor(Math.random() * (14 - 1)) + 1
      $('.pool').append(`<div class="card f${ _.random(1,13) }"></div>`)
    }
    $('.dealer').click(function(){
      $('.pool').append(`<div class="card f${ _.random(1,13) }"></div>`)
      
    })
  
  </script>

</body>


</html>
```
```css
body {
    background-color: cornflowerblue;
}

.card {
    height: 175px;
    width: 125px;
    background-image: url('//res.cform.cn/unzip/1581303397062_7219807376794356/cards/back.png');
    background-size: 100% 100%;
    margin: 3px;
}

.pool {
    display: flex;
    border-style: dashed;
    border-color: aliceblue;
    border-width: 2px;
    width: 655px;
    height: 181px;
}

.f1 {
    background-image: url('//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f1.png');

}

.f2 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f2.png");
}

.f3 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f3.png");
}

.f4 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f4.png");
}

.f5 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f5.png");
}

.f6 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f6.png");
}

.f7 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f7.png");
}

.f8 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f8.png");
}

.f9 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f9.png");
}

.f10 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f10.png");
}

.f11 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f11.png");
}

.f12 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f12.png");
}

.f13 {
    background-image: url("//res.cform.cn/unzip/1581303397062_7219807376794356/cards/f13.png");

}
```

## 2. maja
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Muggle</title>
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <style>
        body {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .table {
            width: 80vmin;
            height: 80vmin;
            background: #66ae00;
            border: 15px ridge brown;
            display: flex;
            border-radius: 2vmin;
            justify-content: center;
            align-items: center;
        }
        .tile {
            width: 10vmin;
            height: 14vmin;
            margin: 1vmin;
            background-size: 100% 100%;
            background-repeat:no-repeat;
            border-radius: 1vmin;
            box-shadow:
                1px 2px 0 #a1cc36,
                2px 3px 0 #a1cc36,
                3px 5px 0 #a1cc36,
                4px 8px 0 #a1cc36,
                5px 10px 0px #a1cc36;
        }
        
        .face-down {
            background: #a1cc36;
            box-shadow:
                1px 2px 0 white,
                2px 3px 0 white,
                3px 5px 0 white,
                4px 8px 0 white,
                5px 10px 0px white;
        }
    </style>

</head>

<body>
    <div class="table"></div>

    <script>
        var list = ["dot_3", "dot_5", "white_dragon", "bamboo_1", "red_dragon", "bamboo_6"]
        $(function() {
            $.each(list, function (i, char) {
                $(".table").append(`<div class="tile ${list[i]}"></div>`)
            })
            $(".tile").click(function() {
                $(this).toggleClass('face-down')
            });
        })
    </script>
</body>

</html>
```
```css
/* 饼牌 */
.dot_1 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_1.png");
}
.dot_2 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_2.png");
}
.dot_3 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_3.png");
}
.dot_4 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_4.png");
}
.dot_5 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_5.png");
}
.dot_6 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_6.png");
}
.dot_7 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_7.png");
}
.dot_8 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_8.png");
}
.dot_9 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/dot_9.png");
}

/* 条牌 */
.bamboo_1 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_1.png");
}
.bamboo_2 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_2.png");
}
.bamboo_3 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_3.png");
}
.bamboo_4 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_4.png");
}
.bamboo_5 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_5.png");
}
.bamboo_6 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_6.png");
}
.bamboo_7 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_7.png");
}
.bamboo_8 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_8.png");
}
.bamboo_9 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/bamboo_9.png");
}

/* 万牌 */
.character_1 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_1.png");
}
.character_2 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_2.png");
}
.character_3 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_3.png");
}
.character_4 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_4.png");
}
.character_5 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_5.png");
}
.character_6 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_6.png");
}
.character_7 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_7.png");
}
.character_8 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_8.png");
}
.character_9 {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/character_9.png");
}

/* 风牌 */
.east_wind {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/east_wind.png");
}
.west_wind {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/west_wind.png");
}
.south_wind {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/south_wind.png");
}
.north_wind {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/north_wind.png");
}

/* 红中、发财、白板 */
.red_dragon {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/red_dragon.png");
}
.green_dragon {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/green_dragon.png");
}
.white_dragon {
    background-image: url("//res.cform.cn/unzip/1580781214828_07278782994494537/source/white_dragon.png");
}
```
