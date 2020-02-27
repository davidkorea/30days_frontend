
# [解决]上传文件后刷新页面，需要再次上传文件
- sessionStorge 关闭页面之前有效，关闭页面则自动清除
- localStorge 持续存储，直到手动删除

将已上传的文件再input file控件中取出存入sessionStorage
- sessionStorage。setitem('key', file)
- sessionStorage。getitem('key', file)


# [解决]input上传文件选择同一文件change事件不生效
```html
<input id="file" class="hidden" type="file">
```
```javascript

$('#file').change(function() {
    ...
    // console.log('onchange: ', $('#file')[0].value);
    $('#file')[0].value = null;
    // console.log('onchange - same file: ', $('#file')[0].value);
})
```
- 由于input file可以一次性上传多个文件，$('#file')返回一个列表，选中一个文件时需要[0]来获取
- input控件的value为上传文件的文件名 onchange:  
    - `console.log('onchange: ', $('#file')[0].value);`
    - return `C:\fakepath\data.csv`
- 将input控件的value清空

# [解决]生成新chart之前，清除已有chart
```javascript
function removeChart() {
    chart.data.labels = [];
    chart.data.datasets = [];
    chart.update();
}
```
- 尝试了官网给出的 .reset, .clear, .destroy 都不能满足要求
- 只有将现有chart的坐标和数据设置为空列表[ ]，update后，实现清除已有数据
- 然后在加载新数据，再update


-----

-----

# canvas

> **语法小课堂**
> - ES6 新增了let命令，用来声明局部变量。只在let命令所在的**代码块内有效**，块外无法访问，而且有暂时性死区的约束。
> - var的作用域只有全局作用域和函数作用域，没有块内作用域

- canvas跨平台动画和游戏的标准解决方案，目前只支持2d
- 绘图需要借助js，固定套路代码
    - `var ctx = document.getElementById('.canvas').getContext('2d');`
    - `ctx` - contect缩写



# 1. Chartjs

### 1. 最小实现

```html
<link rel="stylesheet" href="./tailwind.min.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
    $(function() {
        var ctx = document.getElementById('chart').getContext('2d');
        Chart.defaults.global.defaultFontColor = 'aliceblue';
        var chart = new Chart(ctx, {type: 'line'});
    })
</script>

<body>
    <div class="frame flex flex-col justify-center items-center bg-gray-800 w-screen h-screen">
        <div class="chart bg-gray-700">
            <canvas id="chart" width="600" height="400"></canvas>
        </div>
        <div class="btn mt-6 p-2 text-gray-200 bg-blue-600 hover:text-gray-100 hover:bg-blue-800 select-none rounded shadow-2xl">Open file</div>
    </div>
</body>
```
<img width="500" src="https://user-images.githubusercontent.com/26485327/75256393-5ebe1480-581e-11ea-8aae-b56f1559cbf5.png">

- 最小实现
  - `canvas`
  - `var ctx = document.getElementById('chart').getContext('2d');`
  - `var chart = new Chart(ctx, {type: 'line'});`


### 2. Chart属性和选项
```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{}, {}]
    },
    options: {}
})
```
- 添加数据
```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
        datasets: [{
            label: 'first',
            data: [22, 35, 28, 32, 34]
        }, {
            label: 'second',
            data: [26, 25, 38, 22, 41]
        }]
    },
    options: {}
})
```
<img width="500" src="https://user-images.githubusercontent.com/26485327/75257502-0a1b9900-5820-11ea-9b49-f3c7715d50f5.png">

- 更改颜色
```javascript
data: {
    labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
    datasets: [{
        label: 'first',
        backgroundColor: 'skyblue',
        borderColor: 'royalblue',
        data: [22, 35, 28, 32, 34]
    }, {
        label: 'second',
        backgroundColor: 'whitesmoke',
        borderColor: 'aliceblue',
        data: [26, 25, 38, 26, 41]
    }]
},
```
- canvas中的渐变色背景，与background-color的gradient不同
- toolhttp://angrytools.com/gradient/
```javascript
var grad = ctx.createLinearGradient(0,200,200,0);

grad.addColorStop(0, 'rgba(184,42,162,1)');
grad.addColorStop(1, 'rgba(105,117,255,1)');

data: {
    labels: ['x1', 'x2', 'x3', 'x4', 'x5'],
    datasets: [{
        label: 'first',
        backgroundColor: grad,
        borderColor: 'royalblue',
        data: [22, 35, 28, 32, 34]
    },]}
```


### 3. 文件上传

```html
 <div class="btn mt-6 p-2 text-gray-200 ...">Load CSV</div>
<input id="file" class="hidden" type="file">
```
```javascript
$('.btn').click(function() {
    $('#file').click();
})
```
- 将文件上传的原生input隐藏
- 单击按钮时，调用原生input的点击事件
- 文件选中单击确定之后，文件会保存在input元素的prpo('files')中
```javascript
var files = $('#file').prop('files');
var file = $('#file').prop('files')[0];

console.log(files);
```
```javascript
FileList {0: File, length: 1}
    length: 1
    0: File
        name: "1.jpg"
        lastModified: 1580650170208
        lastModifiedDate: Sun Feb 02 2020 21:29:30 GMT+0800 (中国标准时间) {}
        webkitRelativePath: ""
        size: 13412
        type: "image/jpeg"
        __proto__: File
    __proto__: FileList
```

### 4. 表单事件绑定
js - onchange， jq - change

```javascript
$('#file').change(function() {
    var file = $('#file').prop('files')[0];
    Papa.parse(file, {
        complete: function(results) {
            console.log("Finished:", results.data);
        }
    });
})
```
- csv解析器 https://www.papaparse.com

**语法小课堂**
- https://github.com/davidkorea/javascript_study/blob/master/07_Array.md#slice
- 数组slice(start,end)，不指定end时，表示从start索引开始一直到数组最后
    - 返回由取出的元素组成的新数组
    - 不影响原数组


### 5. 更新 chart.update()
```javascript
function updateScale(chart) {
    chart.options.scales.yAxes[0] = {
        type: 'logarithmic'
    };
    chart.update();
}
```

```javascript
$('#file').change(function() {
    var file = $('#file').prop('files')[0];
    Papa.parse(file, {
        complete: function(results) {
            console.log("Finished:", results.data);
            chart.data.labels = results.data[0].slice(1);
            for (var row of results.data.slice(1)) {
                // chart.data.datasets.label = row[0];
                // chart.data.datasets.data = row.slice(1);
                // datasets[{},{}] 列表需要push
                chart.data.datasets.push({
                    label: row[0],
                    backgroundColor: grad,
                    borderColor: 'skyblue',
                    data: row.slice(1)
                })
            }
            chart.update();
        }
    });
})
```
- 更新一个键值对，直接赋值
- 更新一个数组需要树勇push()方法











