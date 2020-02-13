


# JQuery
window.onload()的三中jquery方式

- 引用jquery库文件

```javascript
$(document).ready(function() {
    alert('hi');
})
```
```javascript
$().ready(function() {
    alert('hi');
})
```
```javascript
$(function() {
    alert('hi');
})
```


# CSS

<img width="748" src="https://user-images.githubusercontent.com/26485327/74399462-dde23e80-4e55-11ea-9014-125e2adbce88.png">

```html
<html>

<head>
    <style>
        body {
            margin: 0;
            background-color: lightsteelblue;
        }
        
        .outer {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .sink {
            /* box-sizing: border-box; */
            -webkit-box-shadow: inset 3px 2px 5px 1px rgba(0, 0, 0, 0.22);
            -moz-box-shadow: inset 3px 2px 5px 1px rgba(0, 0, 0, 0.22);
            box-shadow: inset 3px 2px 5px 1px rgba(0, 0, 0, 0.22);
            -webkit-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            -moz-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            border-radius: 3px;
            display: flex;
            flex-direction: row;
            background-color: #F3F3F3;
            height: 60px;
            border-width: 6px;
            border-color: white;
            border-style: solid;
            margin: 20px;
        }
        
        .given {
            height: 60px;
            border: 1px solid whitesmoke;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 20px;
        }
        
        .char {
            width: 60px;
            height: 60px;
            background-color: whitesmoke;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid lightgray;
        }
        
        .btn {
            -webkit-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            -moz-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.29);
            height: 30px;
            border-radius: 3px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: lightskyblue;
            border: 2px solid whitesmoke;
            color: white;
            font-weight: 800;
            font-family: Arial, Helvetica, sans-serif;
            padding: 5px;
            margin: 10px;
        }
        
        .result {
            margin: 10px;
            font-size: 30px;
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
    <script></script>
</head>

<body>
    <div class="outer">
        <div class="sink"></div>
        <div class="result">Congras</div>
        <div class="submit btn">Submit</div>
        <div class="reload btn">Reload</div>
        <div class="given">
            <div class="char">a</div>
            <div class="char">a</div>
        </div>
    </div>
</body>

</html>
```
