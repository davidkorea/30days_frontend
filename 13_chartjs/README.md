# Chartjs

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


# 2. 文件上传

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

# 3. 表单事件绑定
js - onchange， jq - change

**语法小课堂**
- https://github.com/davidkorea/javascript_study/blob/master/07_Array.md#slice
- 数组slice(start,end)，不指定end时，表示从start索引开始一直到数组最后
    - 返回由取出的元素组成的新数组
    - 不影响原数组


# 4. 更新 chart.update()
```javascript
function updateScale(chart) {
    chart.options.scales.yAxes[0] = {
        type: 'logarithmic'
    };
    chart.update();
}
```













